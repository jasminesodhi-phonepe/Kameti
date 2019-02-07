import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Overlay, Input, Button } from 'react-native-elements';

import {Container, Content, Card, CardItem, Thumbnail, Text, Icon } from 'native-base';


import commonStyles from '../style/style';
import Header from '../components/header';

export default class Profile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            name: '',
            amount: null,
            duration: null,
            date: ''
        }
    }

    handlePress = async () => {
        fetch('http://172.17.60.238:8098/v1/hack/kameti/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "amount": this.state.amount,
                "duration": this.state.duration,
                "date": this.state.date,
                "userId": "U1902080335105859917445",
                "allUsers": false
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // Alert.alert("Author name at 0th index:  " + responseJson[0].name);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    handleAddOnPress = () => this.setState({ isVisible: true })
    handleCancelOnPress = () => this.setState({ isVisible: false })
    handleCreateOnPress = () => {
        this.setState({ isVisible: false }); 
        this.props.navigation.navigate('Details')  
    }

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
                                    <TouchableHighlight onPress={() => this.props.navigation.push('Details')}>
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
                            onPress={this.handleAddOnPress}
                        >
                        <Icon name="md-add" size={35} style={{color: 'white'}} />
                    </TouchableOpacity>

                    {this.state.isVisible && 
                        <Overlay
                            isVisible={this.state.isVisible}
                            overlayStyle={styles.overlay}
                        >
                        <Input
                            placeholder='Monthly Investment?'
                            onChangeText={(amount) => this.setState({amount})}
                        />
                        <Input
                            placeholder='Duration In Months?'
                            onChangeText={(duration) => this.setState({duration})}
                        />
                        <Input
                            placeholder='Start Date?'
                            onChangeText={(date) => this.setState({date})}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Button
                                title="Create Group"
                                buttonStyle = {styles.button}
                                // onPress={this.handleCreateOnPress}
                                onPress={this.handlePress}
                            />
                            <Button
                                title="Cancel"
                                buttonStyle = {styles.button}
                                onPress={this.handleCancelOnPress}
                            />
                        </View>
                      </Overlay>
                    }
                </React.Fragment>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    overlay: {
        height: responsiveHeight(43),
        width: responsiveWidth(80),
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#673AB7',
        width: responsiveWidth(30),
        marginTop: 20,
        marginLeft: 20
    }
});