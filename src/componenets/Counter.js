import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Count is {count}.</Text>
            <Button title="Click Me!!"
                onPress={() => setCount(count + 1)}
                color="#841584"
            />
        </View>
    );

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