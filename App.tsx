import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { OutlinedText } from "./components/OutlineText";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!?</Text>
      <View
        style={{
          borderWidth: 2,
          borderColor: "green",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <OutlinedText
          text={"Test of outlined text"}
          fillColor={"#0ee4d2"}
          strokeColor={"#1125d6"}
          fontSize={20}
          strokeWidth={2}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
