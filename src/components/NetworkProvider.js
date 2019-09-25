import React from 'react';

export const NetworkContext = React.createContext({ isConnected: true });

export class NetworkProvider extends React.PureComponent {
  state = {
    isConnected: true
  };

  componentDidMount() {
    this.handleConnectivityChange();
  }

  componentWillUnmount() {
    this.handleConnectivityChange();
  }

  handleConnectivityChange = isConnected => this.setState({ isConnected });

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}
