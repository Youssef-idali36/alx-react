import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const appStyles = StyleSheet.create({
    'bodySectionWithMargin': {
      marginBottom: '40px',
},
});

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(appStyles['bodySectionWithMargin'])}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};


export default BodySectionWithMarginBottom;
