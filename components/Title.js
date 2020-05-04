import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native'

export const Title = ({title}) => (
    <Text style={styles.title}>{title}</Text>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'sans-seriff',
        marginTop: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333'
    }
})