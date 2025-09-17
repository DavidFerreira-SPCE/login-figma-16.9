import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View
      style={styles.container}
    >
      <View>
      <Text style={styles.topBox}>
        Back</Text>
      </View>

    <View style={styles.underBack}>
      <Text style={styles.Texto}>
        Login Here</Text>
      <Text style={styles.Texto2}>
        Welcome back, You've been missed!
      </Text>
    </View>
    

      <View style= {styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => router.back()}>
          <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
        </TouchableOpacity>

       
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { //Container da caixa principal
    flex: 1,
    marginHorizontal: 20,
  },
  topBox:{ //Container Back
    alignContent: 'flex-start',
    fontFamily: 'bold',
    fontSize: 14,
    width: 34,
    height: 17,
    marginTop: 48,
    marginLeft: 8,
  },
  
  underBack : { //Estilização do container underBack
  height: 131,
  marginTop: 97,
  marginLeft: 44,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily:'bold',
  gap: 20,
  },

  Texto: {//Conteudo do container underBack
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "#1F418B",
    fontWeight: 700,
    fontSize: 30,
  },
  Texto2: {//Conteudo do container underBack
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    fontWeight: 600,
    fontSize: 21,
  },

  loginBox:{//Container para as boxes de login
    justifyContent:'center',
    alignItems:'center',
    width: 357,
    height: 369,
    top: 302,
    left: 31,
    gap: 30,
  },

  buttonContainer:{//Estilização do Container Button
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 16
  },

  button1: {//Conteudo Container Button
    backgroundColor: '#1F41BB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 60,
    borderRadius: 10,
  }

},
);
//continuar