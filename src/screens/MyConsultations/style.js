import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
   card:{
       padding:4,
       height:100,
       borderRadius:6,
       elevation:3,
       backgroundColor:'#FFF',
       shadowOffset:{width:1,height:1},
       shadowColor: '#333',
       shadowOpacity: 0.3,
       shadowRadius:2,
       marginHorizontal:9,
       marginVertical:11
    },
    lineStyle:{
        borderWidth:1.0,
        borderColor:'grey',
        marginVertical:10,
        marginHorizontal:2
    },
    text:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
