import React from 'react';
import {
    View,
    BUtton,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {    
    AdMobInterstitial,
} from 'react-native-admob';

import {MenuButton} from '../components/MenuButton';
import {Title} from '../components/Title';
import {Help} from '../components/Help';
import { Root, Popup } from 'popup-ui';

export default class GeometriMenu extends React.Component{
    static navigationOptions = {
        headerShown: false
    }
    constructor(props){
        super(props);
    }   

    render(){        
        return(            
            <Root>
                <View style={styles.container}>         
                    <Title title="Penghitung Geometri"/>
                    <View style={styles.buttonList}>
                        <MenuButton text="Cari Nilai Un" link="CariUnGeometri" props={this.props}/>
                        <MenuButton text="Cari Nilai Sn" link="CariSnGeometri" props={this.props}/>
                        {/* <MenuButton text="Cari Nilai A" link="DiketA" props={this.props}/> */}
                        {/* <MenuButton text="Cari Nilai B" link="DiketB" props={this.props}/> */}
                        <MenuButton text="Cari Sn Tak Hingga" link="CariSnGeometriTakHingga" props={this.props}/>
                    </View>                                   
                    <Popup/>
                </View>                    
            </Root>  
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