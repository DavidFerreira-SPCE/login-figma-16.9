import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  return (
    <View
      style={styles.containerBox}
    >
      <View
        style={styles.textBox}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>
            Back to Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.underBackBox}>
        <Text style={styles.text}>
          Hello!</Text>
        <Text style={styles.text2}>
          This is my first React Native app!
        </Text>
      </View>

    </View>
  );
}


//Index dos styles
// Final box = container
// Final button = botão
// Outro = Texto 
const styles = StyleSheet.create({
    containerBox: { //Container da caixa principal
        flex: 1,
        marginHorizontal: 20,
    },
    textBox: { //Container Back
        
        flexDirection:'row',
        color: "#1F41BB",
        fontSize: 12,
        width: 34,
        height: 17,
        marginTop: 24,
        marginLeft: 8,
    },


    underBackBox: { //Estilização do container underBack
        height: 131,
        marginTop: 77,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'bold',
        gap: 20,
    },

    loginBox: {//Container para as boxes de login com user e senha
        justifyContent: 'center',
        width: '100%',
        marginTop: 40,
        gap: 20,
    },

    buttonBox: {//Estilização do Container Button
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 16
    },

    imputBox: {//Container de email e senha de login
        paddingBlock: 20,
        borderRadius: 10,
        width: '100%',
        height: 64,
        backgroundColor: '#63636346'
    },

    forgotBox: {
        alignItems: 'flex-end',
        marginTop: 20,
        marginRight: -20,
        marginBottom: 16
    },

    accountBox:{
        alignItems:'center',
        justifyContent: 'center',
        width: 'auto',
        height: 21,
    },

    textoButton: {//Estilização de texto do botão Sign In
        color: '#FFFFFF',
        fontSize: 20
    },

    signInButton: {//Conteudo Container Button
        backgroundColor: '#1F41BB',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderRadius: 10,
    },

    text: {//Conteudo do container underBack
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "#1F418B",
        fontWeight: 700,
        fontSize: 30,
    },

    text2: {//Conteudo do container underBack
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 21,
    },

    text3: {//Conteudo das boxes de imput
        width: 96,
        height: 24,
        marginLeft: 20,
        fontSize: 10,
        fontWeight: 600
    },

    text4: {
        width: 167,
        height: 21,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 600
    },

    text5:{
        fontWeight: 900
    }
});
//continuar