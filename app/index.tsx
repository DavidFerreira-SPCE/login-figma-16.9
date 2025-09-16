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
      <Text style={styles.Texto}>
        Discover your dream job here.
      </Text>
      <Text style={styles.Texto2}>
        Explore all the existing job roles based on your interest and study major</Text>
    </View>

  );
}
const styles = StyleSheet.create({
  Texto: {
    alignItems: 'center',
    gap: 8
  },
  Texto2: {
    
    marginLeft: 8

  }
},
);
