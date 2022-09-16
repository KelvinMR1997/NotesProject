import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {tableStyles} from '../Theme/appTheme';

export const Home = props => {
  const data = [
    {
      title: 'Main dishes',
      data: 'Pizza Bla bla blab bla Risotto',
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  // eslint-disable-next-line react/prop-types
  const goTo = props.navigation.navigate;
  // eslint-disable-next-line react/prop-types
  const NoteTitle = ({title, touchAction}) => {
    return (
      <TouchableOpacity onPress={() => touchAction()} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const Notes = () => (
    <SafeAreaView style={styles.container}>
      {data.map((e, i) => {
        return (
          <NoteTitle
            touchAction={() => goTo('Note', e)}
            key={`Note${i}`}
            title={e.title}
          />
        );
      })}
    </SafeAreaView>
  );
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: 'onPress',
      // backgroundColor: 'red',
      borderColor: '#cfd9df',
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
    },
    title: {
      textAlign: 'center',
      color: 'red',
      fontSize: 24,
    },
  });
  return <View style={tableStyles.globalMargin}>{Notes()}</View>;
};
