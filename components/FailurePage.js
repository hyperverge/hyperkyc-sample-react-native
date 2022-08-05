import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FailurePage(props) {
    return (
        <View>
            <Text style={styles.failureTitle}> {props.title} </Text>
            <Text style={styles.message}>  {props.errorMessage} </Text>
           
        </View>
    );
}

const styles = StyleSheet.create ({
    failureTitle: {
        fontSize: 30,
        color: 'red',
        paddingBottom: 10
    },
    message:{
        fontSize: 20
    }
})

export default FailurePage;