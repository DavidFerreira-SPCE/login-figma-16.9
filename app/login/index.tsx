

import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  return (
    <View
      style={styles.containerBox}
    >
      <View 
      style={styles.backBox}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.textBox}>
          Back</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.underBackBox}>
        <Text style={styles.texto}>
          Login Here</Text>
        <Text style={styles.texto2}>
          Welcome back, You've been missed!
        </Text>
      </View>

      <View style={styles.loginBox}>

        <View style={styles.imputBox}>
          <Text>
            Email</Text>
        </View>

        <View style={styles.imputBox}>
          <Text>
            Password</Text>
        </View>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.textoButton}>
            Sign In</Text>
        </TouchableOpacity>


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
    color:"#1F41BB",
    alignContent: 'flex-start',
    fontSize: 14,
    width: 34,
    height: 17,
    marginTop: 48,
    marginLeft: 8,
  },

  backBox:{
    color:"#1F41BB",
    alignContent: 'flex-start',
    fontSize: 14,
    width: 34,
    height: 17,
    marginTop: 48,
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
    alignItems: 'center',
    marginTop: 35,
    gap: 30,
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
  
  texto: {//Conteudo do container underBack
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "#1F418B",
    fontWeight: 700,
    fontSize: 30,
  },

  texto2: {//Conteudo do container underBack
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 21,
  },

},
);
//continuar