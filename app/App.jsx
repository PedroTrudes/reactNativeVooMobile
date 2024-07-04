import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Login from './components/Login.tsx'
import { TEMAS } from './estilos/temas'// trabalhando com arquivos de Style separadamente 

export default function App() {
    return(
            <View style={style.constainer}>
                <StatusBar />
                <Login />
            </View>
       
    )
}

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: TEMAS.colors.blue[500],
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBanner: {
        color: TEMAS.colors.white,
        fontSize: TEMAS.fontSizes.xl,
        fontWeight: TEMAS.fontWeights.h1
    }//testando os stilos que estão salvos em arquivos separados
})