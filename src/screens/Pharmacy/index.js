import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from './style';

import { Icons, Images } from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';

const docCatTypes = [
  {
    doc_cat_id: '1',
    doc_cat_name: 'Open Now',
  },
  {
    doc_cat_id: '2',
    doc_cat_name: 'Near You',
  },
  {
    doc_cat_id: '3',
    doc_cat_name: 'In Hospital',
  },
  {
    doc_cat_id: '4',
    doc_cat_name: 'Home Doctor',
  },
];

const sponseredDoc = [
  {
    s_id: '1',
    s_img: Images.doc_1,
    s_per: '97',
    s_name: 'Glenn Stores',
    sub_text_1: 'Address Goes Here',
    sub_text_2: 'Phone Number Goes Here',
    sub_text_3: 'Email Goes Here',
    feedback_number: '95',
    no_of_doc: '1',
    doc_location: 'South Delhi',
    doc_fee: '500',
    screenName: 'ClinicalScreen',
  },
  {
    s_id: '2',
    s_img: Images.doc_2,
    s_per: '87',
    s_name: 'Glenn Stores',
    sub_text_1: 'Address Goes Here',
    sub_text_2: 'Phone Number Goes Here',
    sub_text_3: 'Email Goes Here',
    feedback_number: '70',
    no_of_doc: '4',
    doc_location: 'South Delhi',
    doc_fee: '700',
    screenName: 'ClinicalScreen',
  },
  {
    s_id: '3',
    s_img: Images.doc_3,
    s_per: '95',
    s_name: 'Glenn Stores',
    sub_text_1: 'Address Goes Here',
    sub_text_2: 'Phone Number Goes Here',
    sub_text_3: 'Email Goes Here',
    feedback_number: '80',
    no_of_doc: '7',
    doc_location: 'South Delhi',
    doc_fee: '800',
    screenName: 'ClinicalScreen',
  },
  {
    s_id: '4',
    s_img: Images.doc_4,
    s_per: '92',
    s_name: 'Glenn Stores',
    sub_text_1: 'Address Goes Here',
    sub_text_2: 'Phone Number Goes Here',
    sub_text_3: 'Email Goes Here',
    feedback_number: '121',
    no_of_doc: '2',
    doc_location: 'South Delhi',
    doc_fee: '1000',
    screenName: 'ClinicalScreen',
  },
];

class Pharmacy extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{ x: 0.16, y: 0.1 }}
              end={{ x: 1.1, y: 1.1 }}
              locations={[0.16, 50]}
              style={styles.upperCont}>
              <View style={styles.upperWrapper}>
                <TouchableOpacity
                  style={styles.backIconWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Pharmacy</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    alert('Pressed !!!');
                  }}>
                  <Text style={styles.dropName}>South Delhi</Text>
                  <Image source={Icons.dropDownIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={docCatTypes}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        alert('Pressed !!!');
                      }}>
                      <Text style={styles.catText}>{item.doc_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.doc_cat_id}
                />
              </View>
            </LinearGradient>

            <View style={styles.docContWrapper}>
              <ScrollView>
                <View style={styles.docCont}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={sponseredDoc}
                    renderItem={({ item }) => (
                      <>
                        <View style={styles.docDetailedWrapper}>
                          <View style={styles.sponserWrapper}>
                            <Text style={styles.sponserText}>SPONSORED</Text>
                          </View>
                          <View style={styles.docSpecsWrapper}>
                            <Image
                              style={styles.docdetailImg}
                              source={Images.doc_1}
                            />
                            
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                Glenn Stores
                              </Text>
                              <Text style={styles.docSubNameText}>
                                Address Goes Here
                              </Text>
                              <Text style={styles.docprofText}>
                                Phone Number Goes Here
                              </Text>
                              <Text style={styles.docExpText}>
                              Email Goes Here
                              </Text>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>50% discount</Text>
                            <View style={styles.nodoctorWrapper}>
                              
                           
                            </View>
                            <View style={styles.locationWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.doclocText}>South Delhi</Text>
                            </View>
                          </View>
                          <View style={styles.bottom1Wrapper}>
                            <Text style={styles.moreText}>Feature 1</Text>
                            <Text style={styles.moreText}>Feature 2</Text>
                            <Text style={styles.moreText}>+2 More</Text>
                          </View>
                          <View style={styles.bottom2Wrapper}>
                            <View style={styles.moneyWrapper}>
                              <Image source={Images.starImg} />
                              <Text style={styles.moneyText}>
                                4.2
                              </Text>
                            </View>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.props.navigation.navigate(item.screenName)
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{ x: 0.1, y: 0.1 }}
                                end={{ x: 0.3, y: 1.9 }}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, { color: '#ffffff' }]}>
                                  Order Medicine
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    )}
                    keyExtractor={item => item.s_id}
                  />
                </View>

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={sponseredDoc}
                    renderItem={({ item }) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <View
                            style={[styles.docSpecsWrapper, { marginTop: 10 }]}>
                            <Image
                              style={styles.docdetailImg}
                              source={Images.doc_1}
                            />
                           
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                Glenn Stores
                              </Text>
                              <Text style={styles.docSubNameText}>
                               Address Goes Here
                              </Text>
                              <Text style={styles.docprofText}>
                                Phone Number Goes Here
                              </Text>
                              <Text style={styles.docExpText}>
                                Email Goes Here 
                              </Text>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>50% discount</Text>
                            <View style={styles.nodoctorWrapper}>
                             
                            </View>
                            <View style={styles.locationWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.doclocText}>South Delhi</Text>
                            </View>
                          </View>
                          <View style={styles.bottom1Wrapper}>
                            <Text style={styles.moreText}>Feature 1</Text>
                            <Text style={styles.moreText}>Feature 2</Text>
                            <Text style={styles.moreText}>+2 More</Text>
                          </View>
                          <View style={styles.bottom2Wrapper}>
                            <View style={styles.moneyWrapper}>
                              <Image source={Images.starImg} />
                              <Text style={styles.moneyText}>
                                4.2
                              </Text>
                            </View>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.props.navigation.navigate(item.screenName)
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{ x: 0.1, y: 0.1 }}
                                end={{ x: 0.3, y: 1.9 }}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, { color: '#ffffff' }]}>
                                  Order Medicine
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    )}
                    keyExtractor={item => item.s_id}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.filterBtnWrapper}>
          <TouchableOpacity
            style={styles.filterBtnCont}
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('DocFilteration')}>
            <Image style={styles.filterImg} source={Icons.filterIcon} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Pharmacy;
