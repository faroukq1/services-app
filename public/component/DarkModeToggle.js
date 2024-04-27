import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useGlobalContext } from "../contextapi/useGlobalContext";

const DarkModeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.container}>
      <Text style={styles.label}>Theme Controller</Text>
      <View style={[styles.toggleButton, isDarkTheme ? styles.active : null]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleButton: {
    width: 40,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
  },
  active: {
    backgroundColor: "blue",
  },
  label: {
    color: "#999999",
  },
});

export default DarkModeToggle;
