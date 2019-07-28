import React, {Component} from 'react';
import {View, Text} from 'react-native';

class GreetingsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}</Text>
            </View>
        );
    }
}

export default GreetingsComponent;