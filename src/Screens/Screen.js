import React, { Component } from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

export default class Screen extends Component {

    render() {
        return (
            <Text style={{ alignSelf: 'center' }}>{this.props.title }</Text>
        );
    }
}

Screen.propTypes = {
    title: PropTypes.string
  };
Screen.defaultProps = {
    title: 'Please Add Title'
};
