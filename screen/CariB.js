import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import {    
    AdMobInterstitial,
} from 'react-native-admob';

export default class CariB extends React.Component{
    static navigationOptions = {
        title: "Cari B (U2 dan U1)"
    }

    constructor(props){
        super(props);
    }

    state = {
        hasil: 0,
        tU2 : 0,
        tU1 : 0,        
    }
    
    cariB(tU1, tU2){
        tU1 = parseFloat(tU1);
        tU2 = parseFloat(tU2);
        var b = tU2 - tU1;

        this.setState({
            hasil: b
        });

        this.showInterstitial();
    }    

    showInterstitial() {
        AdMobInterstitial.showAd().catch(error => console.warn(error));
    }

    render(){        
        return(
            <View style = {styles.container}>    
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai U1"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tU1: val})}
                />
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai U2"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tU2: val})}
                />                
                <View style={styles.hasil}>    
                    <TouchableOpacity
                        style={styles.inputButton}
                        onPress={() => this.cariB(this.state.tU1, this.state.tU2)}
                    >
                        <Text style={styles.inputButtonText}>=</Text>
                    </TouchableOpacity>                
                    <View style={styles.hasilContainer}>
                        <Text style={styles.hasilText}>Hasil </Text>
                        <Text style={styles.hasilIsi}>{this.state.hasil}</Text>
                    </View>                    
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        height: '100%',
    },  
    inputText: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        width: '100%',
        color: '#aaa',
        padding: 15,
        margin: 10,
        fontSize: 18
    },
    inputButton:{        
        height: '100%',
        width: 80,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: 'center',
        backgroundColor: '#3EA5D7',
        position: 'relative',
    },
    inputButtonText:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    hasil: {
        position: 'relative' ,     
        position: 'absolute',
        bottom: 0,        
        width: '110%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    hasilContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 20,
    },
    hasilText: {                
        fontSize: 25,
        color: '#333',
        width: '50%',
        textAlign: 'left'
    },
    hasilIsi:{
        fontSize: 25,
        color: '#333',
        width: '50%',
        textAlign: 'right'
    }
})