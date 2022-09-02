/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Metrics from '../helpers/Metrics';
import Colors from '../Theme/Colors';
// import Icon from 'react-native-vector-icons/SimpleLineIcons';

function Header(props) {
  return (
    <SafeAreaView style={[styles.statusBar]}>
      <View style={styles.container}>
        {/* LEFT BUTTON */}
        <TouchableOpacity
          //   onPress={props.onPress}
          style={[
            {
              alignItems: 'flex-start',
              justifyContent: 'center',
              position: 'absolute',
              left: 0,
              padding: 15,
            },
          ]}>
          <Text>Icon</Text>
          {/* <Icon style={styles.iconstyle} name="arrow-left" size={25} /> */}
        </TouchableOpacity>
        {/* CENTER BUTTON */}
        <View
          style={[
            styles.content,
            {
              alignItems: 'center',
              /* alignItems: 'center', */
              /* justifyContent: 'center', */
              position: 'relative',
            },
          ]}>
          <Image
            source={{
              uri: `https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg`,
            }}
            style={{
              width: 100,
              height: '100%',
              resizeMode: 'contain',
              marginLeft: Metrics.screenWidth * 0.2,
            }}
          />
        </View>
        {/* RIGHT BUTTON */}

        <View
          style={{
            flex: 0.2,
            height: 80,
            justifyContent: 'center',
            marginRight: Metrics.screenWidth * 0.05,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                //props.navigation.navigate('Profile');
                console.log('Props de navegación ', props);
              }}>
              <Image
                source={{
                  uri: `https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg`,
                }}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'cover',
                  marginRight: Metrics.screenWidth * 0.05,
                  borderRadius: 90,
                  marginBottom: 5,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              height: 17,
              width: 17,
              left: 1,
              top: 10,
              borderRadius: 90,
            }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.light,
    position: 'relative',
  },
  statusBar: {
    ...Platform.select({
      ios: {
        height: Metrics.screenHeight * 0.1, //130 - 24
      },
      android: {
        height: Metrics.screenHeight * 0.1, // 135
      },
    }),
    paddingTop: 25,
    backgroundColor: Colors.light,
  },
  content: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'stretch',
    // alignContent: 'stretch'
  },
  title: {
    // ...Fonts.fontTabBar,
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 16,
  },
  iconstyle: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    borderRadius: 30,
    marginLeft: 10,
  },
});
export default Header;
