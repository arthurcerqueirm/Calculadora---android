import { StyleSheet, Text, View } from 'react-native';

export default  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ScrollView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    separacao:{
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'row'
    },
    form:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    }
  });
  