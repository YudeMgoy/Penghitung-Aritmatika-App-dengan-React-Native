import React from 'react';
import {
    Button,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export const MenuButton = ({props, text, link}) => (
    <TouchableOpacity style={styles.menuButton}
        onPress={() => props.navigation.navigate(link)}
    >
        <Text style={styles.menuButtonText}>{text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    menuButton: {
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        width: '80%',
        textAlign: "center",
        alignItems: 'center',
        backgroundColor: '#3EA5D7',
        borderRadius: 10,
        position: 'relative',
        zIndex: 1
    },
    menuButtonText:{
        color: 'white',
        fontSize: 25,
    }    
})