import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const appStyles = StyleSheet.create({
    login: {
        margin: '20px',
        height: 'max-content',
        padding: '2em',
    },

    label: {
        paddingRight: '10px',
    },

    button: {
        color: 'black',
        border: '2px solid #ffba00',
        backgroundColor: 'rgb(255, 255, 255)',
    },

    mobile: {
      '@media (max-width: 375px)': {
        gap: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    mobile_2: {
        '@media (max-width: 900px)': {
            display: 'grid',
            justifyContent: 'center',
        },
    },

});


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false,
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
        this.setState({ isLoggedIn: true });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({ enableSubmit: true });
        } else {
            this.setState({ enableSubmit: false });
        }
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({ enableSubmit: true });
        } else {
            this.setState({ enableSubmit: false });
        }
    }
    render() {
    return (
        <main className={css(appStyles['login'], appStyles.mobile_2)}>
        <p>Login to access the full dashboard</p>
            <section className={css(appStyles['mobile'])}>
            <form onSubmit={this.handleLoginSubmit}>
                <label htmlFor='email' className={css(appStyles['label'])}>
                    Email: <input type="email" id="email" name="email" onChange={this.handleChangeEmail} value={this.state.email}/>
                </label>
                <label htmlFor='password' className={css(appStyles['label'])}>
                    Password: <input type="password" id="password" name="password" onChange={this.handleChangePassword} value={this.state.password}></input>
                </label>
                <input className={css(appStyles.button)} type='submit' value='OK' disabled={!this.state.enableSubmit}
                        />
            </form>
            </section>
        </main>
        );
    }
}
export default Login;
