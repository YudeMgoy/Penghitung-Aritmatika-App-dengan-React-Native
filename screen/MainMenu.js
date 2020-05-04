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

export default class MainMenu extends React.Component{
    static navigationOptions = {
        headerShown: false
    }
    constructor(props){
        super(props);
    }

    componentDidMount() {    
        //AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.setAdUnitID('ca-app-pub-5675581804060627/9066522729');
    
        AdMobInterstitial.addEventListener('adLoaded', () =>
          console.log('AdMobInterstitial adLoaded'),
        );
        AdMobInterstitial.addEventListener('adFailedToLoad', error =>
          console.warn(error),
        );
        AdMobInterstitial.addEventListener('adOpened', () =>
          console.log('AdMobInterstitial => adOpened'),
        );
        AdMobInterstitial.addEventListener('adClosed', () => {
          console.log('AdMobInterstitial => adClosed');
          AdMobInterstitial.requestAd().catch(error => console.warn(error));
        });
        AdMobInterstitial.addEventListener('adLeftApplication', () =>
          console.log('AdMobInterstitial => adLeftApplication'),
        );
    
        AdMobInterstitial.requestAd().catch(error => console.warn(error));        
    }
    
    componentWillUnmount() {       
    AdMobInterstitial.removeAllListeners();
    }    

    render(){        
        return(            
            <Root>
                <View style={styles.container}>         
                    <Title title="Penghitung Aritmatika"/>
                    <View style={styles.buttonList}>
                        <MenuButton text="Cari Nilai Un" link="CariUn" props={this.props}/>
                        <MenuButton text="Cari Nilai Sn" link="CariSn" props={this.props}/>
                        <MenuButton text="Cari Nilai A" link="DiketA" props={this.props}/>
                        <MenuButton text="Cari Nilai B" link="DiketB" props={this.props}/>
                        <MenuButton text="Cari Jumlah Suku" link="CariJmlSuku" props={this.props}/>
                    </View>
                    <Help/>                    
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