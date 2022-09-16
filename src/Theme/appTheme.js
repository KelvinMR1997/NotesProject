import {StatusBar, StyleSheet} from 'react-native';
export const tableStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  header: {
    fontSize: 32,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 8,
    color: 'black',
  },
  noteText: {
    // textAlign: 'start',
    fontSize: 20,
    color: 'black',
  },
});
