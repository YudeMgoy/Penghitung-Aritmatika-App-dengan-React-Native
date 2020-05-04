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

export default class CariA2 extends React.Component{
    static navigationOptions = {
        title: "Cari A (Sn dan B)"
    }

    constructor(props){
        super(props);
    }

    state = {
        hasil: 0,
        tSn : 0,
        tN : 0,        
        tB: 0
    }
    
    cariA(tSn, tN, tB){
        tSn = parseFloat(tSn);
        tN = parseFloat(tN);
        tB = parseFloat(tB);
        var a = (tSn - (tN/2*(tN-1)*tB))/tN;

        this.setState({
            hasil: a
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
                    placeholder="Masukan nilai Sn"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tSn: val})}
                />
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai n"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tN: val})}
                />    
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai b"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tB: val})}
                />             
                <View style={styles.hasil}>    
                    <TouchableOpacity
                        style={styles.inputButton}
                        onPress={() => this.cariA(this.state.tSn, this.state.tN, this.state.tB)}
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