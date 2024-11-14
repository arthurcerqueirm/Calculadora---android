import { Button } from "react-native-web";
import estilos from '../assets/css/estilo.js'
import { SafeAreaView } from "react-native";


export default function Login(){
    
    async function fazendoLogin(formData){
        var usuario = await FormData.get("usuario");
        const senha = await FormData.get("senha")
        
    }
    return (
        <>
            <form action={fazendoLogin} style={estilos.form}>
                <label htmlFor="usuario">Usuário:</label>
                <input type="text" name="usuario" placeholder="noobmaster" />
                <label htmlFor="senha">Senha:</label>
                <input type="text" name="senha" placeholder="noobmaster" />
                <button type="submit">Login</button>
                <link rel="icon" href="favicon.ico" />
            </form>
            <Button
          title='Clique aqui para acessar'
          onPress={()=> {
            alert(usuario)
          }}
        />
        </>
    );
}
