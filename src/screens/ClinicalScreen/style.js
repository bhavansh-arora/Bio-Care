import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
    backgroundColor: 'pink',
  },
  wrapper: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  upperCont: {
    resizeMode: 'cover',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-3.4%',
    bottom: '66.54%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backIconWrapper: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    width: width * 0.4,
    height: width * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  settingIconWrapper: {
    width: width * 0.22,
    height: height * 0.032,
  },

  uName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.045,
    lineHeight: 25,
    color: '#fff',
  },

  dropName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.022,
    color: 'rgb(85,136,231)',
  },

  cardWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '21.5%',
    bottom: '16.83%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 2,
  },

  boxUpper: {
    width: '95%',
    height: '22%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  upperInfoWrapper: {
    width: width * 0.4,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.048,
    lineHeight: 20,
    color: '#000000',
  },

  description: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.035,
    lineHeight: 14,
    color: '#898A8F',
  },

  dateText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.032,
    lineHeight: 14,
  },

  boxDate: {
    width: '95%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxMap: {
    width: '95%',
    height: '30%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxMapUpper: {
    width: '100%',
    height: '12%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mapText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.0265,
    lineHeight: 12,
    color: '#898A8F',
    marginLeft: width * 0.02,
  },

  boxMapLower: {
    width: '90%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },

  mapImage: {
    width: '100%',
    height: '100%',
  },

  boxLower: {
    width: '95%',
    height: '19%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxLower2: {
    width: '95%',
    height: '19%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  boxLowerCont1: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 50,
    marginTop: height * 0.015,
  },

  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  boxLowerCont2: {
    width: '45%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  docText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.038,
    color: '#000000',
  },

  docDesc: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.033,
    color: '#898A8F',
  },

  boxLowerCont3: {
    width: '30%',
    height: width * 0.08,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },

  bfbottomWrapper: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 20,
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: '#C7C7C7',
    borderWidth: 1,
    position: 'absolute',
    bottom: 50,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.08,
    marginLeft: width * 0.045,
  },
  feedbackTextbtn: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginLeft: 18,
  },
  bookTextbtnWrapper: {
    width: '70%',
    padding: 10,
    borderRadius: 40,
    marginLeft: 20,
    height: height * 0.08,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookBtn: {
    width: '100%',
    borderRadius: 40,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookTextbtn: {
    fontWeight: 'bold',
    fontSize: width * 0.05,
    textAlign: 'center',
  },
});
