/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import {
    Container,
    Header, Footer, FooterTab, Button, Icon, Body, Title, Text, Fab, View
} from 'native-base';
import { Screen } from '../Screens';

export default class FooterTabsIconExample extends Component {
    constructor() {
        super();
        this.state = {
            active: 'true',
            selectedTab: 'Screen1'
        };
    }

    renderSelectedTab() {
        switch (this.state.selectedTab) {
          case 'Screen1':
            return (<Screen title="Screen1" />);
            break;
          case 'Screen2':
            return (<Screen />);
            break;
          case 'Screen3':
            return (<Screen />);
            break;
          case 'Screen4': 
            return (<Screen />);
            break;
          default:
              return (<Screen />);
        }
      }
    render() {
        return (
            <Container>
                <Header >
                    <Body>
                        <Title style={{ marginLeft: 80 }}>Leave Information</Title>
                    </Body>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Icon name='md-power' />
                    </Button>
                </Header>
                
                    <View style={{ flex: 1 }}>
                    {this.renderSelectedTab()}
                    {this.state.selectedTab === 'Screen1' && <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="mail" />
                        </Button>
                    </Fab>}
                    </View>
                <Footer>
                    <FooterTab>
                        <Button
                          active={this.state.selectedTab === 'Screen1'}
                          onPress={() => this.setState({ selectedTab: 'Screen1' })}
                        >
                            <Text>Total L</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'Screen2'}
                        onPress={() => this.setState({ selectedTab: 'Screen2' })}
                        >
                            <Text>Apply L</Text>
                        </Button>
                        <Button 
                        active={this.state.selectedTab === 'Screen3'}
                        onPress={() => this.setState({ selectedTab: 'Screen3' })}
                        >
                            <Text>L History</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'Screen4'}
                        onPress={() => this.setState({ selectedTab: 'Screen4' })}
                        >
                            <Text>Holidays</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
