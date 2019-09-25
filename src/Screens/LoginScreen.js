import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { NetworkContext, NetworkProvider } from '../components/NetworkProvider';
import { LoginAction } from '../actions/LoginAction';

class LoginScreen extends Component {
    static contextType = NetworkContext;
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    onClickListener = () => {
        console.log('username', this.state.username);
        console.log('password', this.state.password);
        const data = { UserName: this.state.username, Password: this.state.password };
        this.props.LoginAction(data);
        this.props.navigation.navigate('Leave');
    }
    render() {
        return (
            <NetworkProvider>
                <Text>You are now {this.context.isConnected ? 'online' : 'offline'}</Text>
            <View style={styles.container}>
                <Image 
                    style={styles.imageContainer}
                    // eslint-disable-next-line global-require
                    source={require('../assets/ces.jpg')} 
                />
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/72/gender-neutral-user.png' }} />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Username"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>

                <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.onClickListener()}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
            </View></NetworkProvider>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCDCDC',
    },
    imageContainer: {
        height: 100,
        width: 100,
        marginBottom: 20
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#00b5ec',
    },
    loginText: {
        color: 'white',
    }
});

const mapStateToProps = state => ({
    simpleData: state.simple,
  });
  
  const mapDispatchToProps = dispatch => ({
    LoginAction: (data) => dispatch(LoginAction(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
