import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import styles from './style';
import { Icons, Images } from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

class MyConsultations extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
        <View style={styles.card}>
            <Text>
                <Text style={{fontWeight:"bold"}}>Date : </Text>
                    <Text>16-06-2020</Text>
            </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Doctor : </Text>
                    <Text>Rupesh Gaikwad</Text>
                </Text>
            <View style={styles.lineStyle}/>
            <Text>
                    <Text style={{textAlign:'left',flexDirection:'row'}}>Suggested</Text>
                    <Text style={{ textAlign: 'center' }}>               Invoice</Text>
                    <Text style={{ textAlign: 'right' }}>                Prescription</Text>
            </Text>
            </View>
                <View style={styles.card}>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Date : </Text>
                        <Text>16-06-2020</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Doctor : </Text>
                        <Text>Rupesh Gaikwad</Text>
                    </Text>
                    <View style={styles.lineStyle} />
                    <Text>
                        <Text style={{ textAlign: 'left', flexDirection: 'row' }}>Suggested</Text>
                        <Text style={{ textAlign: 'center' }}>               Invoice</Text>
                        <Text style={{ textAlign: 'right' }}>                Prescription</Text>
                    </Text>
                </View>
                 <View style={styles.card}>
            <Text>
                <Text style={{fontWeight:"bold"}}>Date : </Text>
                    <Text>16-06-2020</Text>
            </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Doctor : </Text>
                    <Text>Rupesh Gaikwad</Text>
                </Text>
            <View style={styles.lineStyle}/>
            <Text>
                    <Text style={{textAlign:'left',flexDirection:'row'}}>Suggested</Text>
                    <Text style={{ textAlign: 'center' }}>               Invoice</Text>
                    <Text style={{ textAlign: 'right' }}>                Prescription</Text>
            </Text>
            </View>
                <View style={styles.card}>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Date : </Text>
                        <Text>16-06-2020</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Doctor : </Text>
                        <Text>Rupesh Gaikwad</Text>
                    </Text>
                    <View style={styles.lineStyle} />
                    <Text>
                        <Text style={{ textAlign: 'left', flexDirection: 'row' }}>Suggested</Text>
                        <Text style={{ textAlign: 'center' }}>               Invoice</Text>
                        <Text style={{ textAlign: 'right' }}>                Prescription</Text>
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Date : </Text>
                        <Text>16-06-2020</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Doctor : </Text>
                        <Text>Rupesh Gaikwad</Text>
                    </Text>
                    <View style={styles.lineStyle} />
                    <Text>
                        <Text style={{ textAlign: 'left', flexDirection: 'row' }}>Suggested</Text>
                        <Text style={{ textAlign: 'center' }}>               Invoice</Text>
                        <Text style={{ textAlign: 'right' }}>                Prescription</Text>
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Date : </Text>
                        <Text>16-06-2020</Text>
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "bold" }}>Doctor : </Text>
                        <Text>Rupesh Gaikwad</Text>
                    </Text>
                    <View style={styles.lineStyle} />
                    <Text>
                        <Text style={{ textAlign: 'left', flexDirection: 'row' }}>Suggested</Text>
                        <Text style={{ textAlign: 'center' }}>               Invoice</Text>
                        <Text style={{ textAlign: 'right' }}>                Prescription</Text>
                    </Text>
                </View>
            </React.Fragment>
           
            
      
            
            
              
            
         );
    }
}
 
export default MyConsultations;