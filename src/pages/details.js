import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {Container, Content, Card, CardItem, Thumbnail, Text, Icon } from 'native-base';


import commonStyles from '../style/style';
import Header from '../components/header';
export default class Details extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                  },
                  {
                      name: 'Amy Farha',
                      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      subtitle: 'Vice President'
                  },
                  {
                      name: 'Chris Jackson',
                      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                      subtitle: 'Vice Chairman'
                  },
            ]
        }
    }

    goBackHandler(){
        this.props.navigation.navigate('Profile');
    }

    keyExtractor = (item, index) => index
    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{ source: { uri: item.avatar_url } }}
        />
    )

    render () {
        return (
            <Container style={commonStyles.contentBackground}>
                <React.Fragment>
                    <Header main="no" headerName="Jasmine Sodhi" goBack={this.goBackHandler} close={this.goBackHandler}/>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                    />
                </React.Fragment>
            </Container>
        )
    }
}