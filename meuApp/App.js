import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import Login from './componentes/login';
import estilos from './assets/css/estilo.js'



export default function App() {
  return (
    <View style={estilos.container}>
      {console.log(estilos)}
      <h1>Criando um mercadinho</h1>

      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}


