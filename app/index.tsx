import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../assets/images/welcome.image.svg")}
        style={styles.userImage} />

      <Text style={styles.mainText}>
        Discover your dream job here.</Text>
      <Text style={styles.mainText2}>
        Explore all the existing job roles based on your interest and study major</Text>


      <View style={styles.ContainerButton}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('./login')}>
          <Text style={styles.loginText}>
            Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => router.push('./register')}>
          <Text style={styles.registerText}>
            Register</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
};





const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    gap: 20,
  },

    ContainerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 16
  },
  userImage: {
    width: 350,
    height: 400,
    marginTop: 'auto',
  },

  mainText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "#1F418B",
    fontWeight: '600',
    fontSize: 20,
  },
  mainText2: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 20,
  },
  loginText:{
     color: '#FFFFFF', 
     fontSize: 22 
  },
  registerText:{
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
    fontSize: 600,
    marginTop: 20,
    marginBottom:'auto'
  },
  button2: {
    backgroundColor: '#e0d9d9f6',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 60,
    borderRadius: 10,
    fontSize: 600,
    marginTop: 20,
    marginBottom:'auto'
  }
});
//continuar