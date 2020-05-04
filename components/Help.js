import React from 'react';
import {
    Text,
    TouchableOpacity,
    image,
    StyleSheet,
} from 'react-native';

import { Root, Popup } from 'popup-ui';

export const Help = () => (
    <TouchableOpacity 
        style={styles.help}
        onPress={() =>
            Popup.show({
                type: 'Success',
                title: 'Bantuan',
                button: false,
                textBody: 'a(U1) = Suku pertama \n b = Beda antara suku \n N = Suku terpilih',
                buttontext: 'Ok',
                callback: () => Popup.hide()
            })
        }
    >
        <Text style={styles.helpText}>?</Text>
    </TouchableOpacity>    
)

const styles = StyleSheet.create({
    help:{     
        width: 60,
        height: 60,
        borderRadius: 30,
        position: "absolute",
        right: 20,
        bottom: 40,
        backgroundColor: "#E33434",
        zIndex:2,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helpText:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
})