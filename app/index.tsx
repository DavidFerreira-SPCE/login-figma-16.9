import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/welcome.image.svg")}
        style={styles.userImage} />
      
      <View>
      <Text style={styles.Texto}>
        Discover your dream job here.</Text>
      <Text style={styles.Texto2}>
        Explore all the existing job roles based on your interest and study major</Text>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  Texto: {

    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    color: "#1F418B",
    fontWeight: '400',
    fontSize: 32,
    paddingLeft: 27,
    width: 343,
    height: 166,
    top: -46,
  },
  Texto2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight:'300',
    fontSize: 20,
    paddingLeft: 31.2,
    width: 323,
    height: 156,
    bottom: 120,
  },
  userImage: {
     width: 385,
     height: 422
  },
},
);
