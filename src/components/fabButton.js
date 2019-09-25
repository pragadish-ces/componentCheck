import React, { Component } from 'react';
import { Container, Header, View, Fab, Icon, Button, Body, Title, DatePicker } from 'native-base';

class fab extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chosenDate: new Date(),
          active: 'true'
        };
        this.setDate = this.setDate.bind(this);
      }
      setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
      }
      render() {
        return (
          <Container>
                <Header>
                    <Button transparent >
                        <Icon name='md-menu' />
                    </Button>
                    <Body>
                        <Title style={{ marginLeft: 80 }}>Time Sheet </Title>
                    </Body>
                    <Button
                        transparent
                    >
                        <Icon name='md-power' />
                    </Button>
                </Header>
            <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
            <DatePicker
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText='Select date'
            textStyle={{ color: 'black' }}
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </View>
              <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}
              >
                  <Icon name='md-menu' />
                </Fab>
            </View>
          </Container>
        );
      }
}
export default fab;
