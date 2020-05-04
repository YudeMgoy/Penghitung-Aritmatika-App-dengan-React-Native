import React from 'react';
import {
    View,
    BUtton,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {MenuButton} from '../components/MenuButton';
import {Title} from '../components/Title';
import {Help} from '../components/Help';

export default class DiketB extends React.Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: "Menghitung B"
    }

    render(){        
        return(        
            <View style={styles.container}>         
                <Title title="Diketahui Nilai?"/>
                <View style={styles.buttonList}>
                    <MenuButton text="U2 dan U1" link="CariB" props={this.props}/>                    
                    <MenuButton text="Un dan a" link="CariB2" props={this.props}/>                    
                </View>                    
            </View>     
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "relative",
        width: "100%",
        height: "100%",
    },
    buttonList: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "relative",
        width: "100%",
        height: "100%",
        marginTop: 20,
    }
})