import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "./pages/auth/Welcome";

export default function App() {
  return (
    <View>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({});
