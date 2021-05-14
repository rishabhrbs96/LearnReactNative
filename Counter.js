import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CounterApp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    onCounterButtonPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Count is {this.state.count}.</Text>
                <Button title="Click Me!!"
                    onPress={this.onCounterButtonPress}
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CounterApp;