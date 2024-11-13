import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import  CadastroUsuarios from './componentes/login.js';


export default function App() {
  return (
      <View style={styles.container}>
        <Text>Criando um mercadinho</Text>
        <CadastroUsuarios/>
        <Button
          title='Clique aqui para acessar'
          onPress={()=> {
            alert('eai otarios')
          }}
        />
        <StatusBar style="auto" />
      </View>
  );
}



const styles = StyleSheet.create({
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
  }
});

