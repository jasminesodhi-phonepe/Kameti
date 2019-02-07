import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Overlay, Input } from 'react-native-elements';

import {Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';


import commonStyles from '../style/style';
import Header from '../components/header';

export default class Profile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        }
    }

    handleOnPress = () => this.setState({ isVisible: true })

    render() {
        return (
            <Container style={commonStyles.contentBackground}>
                <React.Fragment>
                    <Header main="no" headerName="Jasmine Sodhi"/>
                    <ScrollView>
                        <Content>
                            <Card style = {{width: responsiveWidth(94), marginLeft: responsiveWidth(3), marginTop: responsiveHeight(2)}}>
                                <CardItem cardBody style={{flexDirection: 'column'}}>
                                    <Image style={{resizeMode: 'cover', margin: responsiveHeight(2)}} source={require('../assets/demo.png')} />
                                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')}>
                                        <Text style={{ margin: responsiveWidth(3)}}>
                                            Lorem ipsum dolor sit amet, at sed epicurei disputando. Novum option pri te, soleat suavitate ut eum, sed alterum offendit pertinacia in. Ei eos nihil nullam. Dicant iudicabit te nam, nam tota molestiae ut.
                                        </Text>
                                    </TouchableHighlight>
                                </CardItem>
                            </Card>
                            <Card style = {{width: responsiveWidth(94), marginLeft: responsiveWidth(3), marginTop: responsiveHeight(3)}}>
                                <CardItem cardBody style={{flexDirection: 'column'}}>
                                    <Image style={{resizeMode: 'cover', margin: responsiveHeight(2)}} source={require('../assets/demo.png')} />
                                    <Text style={{ margin: responsiveWidth(3)}}>
                                        Lorem ipsum dolor sit amet, at sed epicurei disputando. Novum option pri te, soleat suavitate ut eum, sed alterum offendit pertinacia in. Ei eos nihil nullam. Dicant iudicabit te nam, nam tota molestiae ut.
                                    </Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </ScrollView>
                    <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:70,
                            position: 'absolute',                                          
                            bottom: 10,                                                    
                            right: 10,
                            height:70,
                            backgroundColor: '#673AB7',
                            borderRadius:100,
                            }}
                            onPress={this.handleOnPress}
                        >
                        <Icon name="md-add" size={35} style={{color: 'white'}} />
                    </TouchableOpacity>

                    {this.state.isVisible && 
                        <Overlay
                            isVisible={this.state.isVisible}
                            // style = {{height: 40}}
                        >
                        <Input
                            placeholder='What is your name?'
                            leftIcon={<Icon name='md-add' size={12} color='black'/>}
                        />
                        <Input
                            placeholder='How much do you wish to invest monthly?'
                            leftIcon={<Icon name='user' size={12} color='black'/>}
                        />
                        <Input
                            placeholder='What duration do you want to invest for?'
                            leftIcon={<Icon name='user' size={12} color='black'/>}
                        />
                        <Input
                            placeholder='When do you want to start the investment?'
                            leftIcon={<Icon name='user' size={12} color='black'/>}
                        />
                      </Overlay>
                    }
                </React.Fragment>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    overlay: {
        height: responsiveHeight(40),
        backgroundColor: 'red'
    }
});