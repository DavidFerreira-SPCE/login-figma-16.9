import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View
      style={styles.container}
    >
      <Image
        source={require("../assets/images/welcome.image.svg")}
        style={styles.userImage} />

      <Text style={styles.Texto}>
        Discover your dream job here.</Text>
      <Text style={styles.Texto2}>
        Explore all the existing job roles based on your interest and study major</Text>


      <View 
      style={styles.buttonContainer}
      >
        <TouchableOpacity style={styles.button1} onPress={() => router.push('./login')}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => router.push('./register')}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 16
  },
  userImage: {
    width: 350,
    height: 400,
    marginTop: 20,
  },

  Texto: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "#1F418B",
    fontWeight: '600',
    fontSize: 20,
  },
  Texto2: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 20,
  },
  login:{
     color: '#FFFFFF', 
     fontSize: 22 
  },
  register:{
     color: '#000000ff', 
     fontSize: 22
  },
  button1: {
    backgroundColor: '#1F41BB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 60,
    borderRadius: 10,
    fontSize: 600

  },
  button2: {
    backgroundColor: '#e0d9d9f6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 60,
    borderRadius: 10,
    fontSize: 600
  }
});
//continuar