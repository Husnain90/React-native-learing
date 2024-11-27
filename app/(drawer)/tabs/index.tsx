import { Link } from "expo-router";
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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/(drawer)/tabs/about" style={styles.linkButton}>
        Go to about 
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  linkButton: {
    textDecorationLine: "underline",
    textDecorationColor: "blue",
    color: "blue",
  },
});
