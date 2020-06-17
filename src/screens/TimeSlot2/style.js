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
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-3.4%',
    bottom: '72.54%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: width * 0.09,
    backgroundColor: '#ffffff',
  },

  uName: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: width * 0.04,
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
    top: '14.22%',
    bottom: '16.83%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 2,
  },

  boxUpper: {
    width: '95%',
    height: '28%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
  },

  boxInfo: {
    width: width * 0.45,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: width * 0.035,
  },

  imageWrapper: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.03,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },

  title: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    lineHeight: 17,
    color: '#000000',
    marginTop: height * 0.01,
  },

  description: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.035,
    lineHeight: 14,
    color: '#898A8F',
    marginTop: height * 0.01,
  },

  datechangeWrapper: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.04,
    lineHeight: 17,
    color: '#000000',
  },

  scrollWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  morningTextbtnWrapper: {
    padding: 5,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    marginTop: height * 0.01,
    top: '-28%',
    left: '3%',
  },
  morningTextbtn: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: width * 0.036,
  },
  timecardWrapper: {
    width: width * 0.75,
    height: height * 0.12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginTop: height * 0.05,
  },
  timecardWrapperBig: {
    width: width * 0.75,
    height: height * 0.15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginTop: height * 0.055,
  },
  timeseqWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.05,
  },

  timeseqWrapperLast: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.01,
  },

  timeText: {
    fontWeight: '400',
    fontSize: width * 0.04,
    paddingLeft: 20,
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