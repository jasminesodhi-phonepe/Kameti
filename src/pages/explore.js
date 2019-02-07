import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';

import commonStyles from '../style/style';
import Header from '../components/header';

export default class Profile extends React.PureComponent {
    render() {
        return (
            <Container style={commonStyles.contentBackground}>
                <React.Fragment>
                    <Header main="no" headerName="New Groups"/>
                </React.Fragment>
            </Container>
        );
    }
}