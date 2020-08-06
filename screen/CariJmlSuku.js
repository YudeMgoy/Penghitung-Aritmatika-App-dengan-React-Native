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

export default class CariJmlSuku extends React.Component{
    static navigationOptions = {
        title: "Cari Jumlah Suku"
    }

    constructor(props){
        super(props);
    }

    state = {
        hasil: 0,
        tUn : 0,
        tA : 0,        
        tB: 0
    }
    
    cariJmlSuku(tUn, tA, tB){
        tUn = parseFloat(tUn);
        tA = parseFloat(tA);
        tB = parseFloat(tB);
        var n = (tUn-tA-(tB*-1))/tB;

        this.setState({
            hasil: n
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
                    placeholder="Masukan nilai Un Terakhir"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tUn: val})}
                />
                <TextInput 
                    style={styles.inputText}
                    placeholder="Masukan nilai a"
                    keyboardType="numeric"
                    onChangeText={(val) => this.setState({tA: val})}
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
                        onPress={() => this.cariJmlSuku(this.state.tUn, this.state.tA, this.state.tB)}
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