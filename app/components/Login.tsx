import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { TEMAS } from '../estilos/temas';
import Logo from '../../assets/images/Logo.png'

export default function Login() {
    const [text, onChangeText] = React.useState('Teste')
    const [number, onChangeNumber] = React.useState('');

    return(
        <View style={styles.containerLogin}>
            <Image source={Logo} alt='Logo da coll'/>

            <Text style={styles.textFormLogin}>
                Faça Login em sua conta
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Teste'
                cursorColor={'#339CFF'}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    containerLogin: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        padding: 15,
    },
    textFormLogin: {
        fontSize: TEMAS.fontSizes.xl,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 5,
    }
})
