import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return(
        <View style={style.constainer}>
            <Text style={style.textDefault}>Pedro trudes</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDefault: {
        color:  'red'
    }
})