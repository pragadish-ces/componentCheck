/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';
import styles from './FirstComponentStyle';

class FirstComponent extends Component {
  static defaultProps = {
    simpleData: {},
  };

  static propTypes = {
    simple: propTypes.objectOf(propTypes.object),
  };

  constructor() {
    super();
    this.state = {
      showText: 'Hai',
    };
  }

  simplecall = () => {
    console.log('hai');
    this.setState({
      showText: 'praga',
    });
    this.props.simpleAction();
  }
  render() {
    const { simpleData } = this.props;
    const { showText } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{showText}</Text>
        <Text style={styles.instructions}>{simpleData.result}</Text>
        <Button
          title="Learn More"
          color="#841584"
          onPress={this.simplecall}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  simpleData: state.simple,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstComponent);
