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

export default class DiketA extends React.Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: "Menghitung A"
    }
    

    render(){        
        return(        
            <View style={styles.container}>         
                <Title title="Diketahui Nilai?"/>
                <View style={styles.buttonList}>
                    <MenuButton text="Un dan B" link="CariA" props={this.props}/>
                    <MenuButton text="Sn dan B" link="CariA2" props={this.props}/>
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