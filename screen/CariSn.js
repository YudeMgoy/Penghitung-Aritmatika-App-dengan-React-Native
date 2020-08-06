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

export default class CariSn extends React.Component{
    static navigationOptions = {
        title: 'Cari Nilai Sn'        
    }

    constructor(props){
        super(props);
    }

    state = {
        hasil: 0,
        tA : 0,
        tB : 0,
        tN: 0,
    }
    
    cariSn(n, a, b){
        a = parseFloat(a);
        n = parseFloat(n);
        b = parseFloat(b);
        var sn = n/2*(2*a+((n-1)*b));

        this.setState({
            hasil: sn
        });
        this.showInterstitial();
    }    

    showInterstitial() {
        AdMobInterstitial.showAd().catch(error => console.warn(error));
    }

    render(){        
        return(
            <View style = {styles.container}>   
                <Text style={{fontSize:12}}>Note: Jangan gunakan pecahan(1/2) tapi gunakan bilangan bulat (0.5)</Text> 
                <TextInput 
                    style={styles.inputText}
                    placeholder="Suku ke berapa?"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tN: val})}
                />
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai awal (a)"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tA: val})}
                />
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai beda (b)"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tB: val})}
                />     
                <Text>Rumus</Text>    
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 20, lineHeight: 30}}>n/2*(2*a+((n-1)*b))</Text>
                </View>              
                <View style={styles.hasil}>    
                    <TouchableOpacity
                        style={styles.inputButton}
                        onPress={() => this.cariSn(this.state.tN, this.state.tA, this.state.tB)}
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
