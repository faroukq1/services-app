import { StatusBar } from "react-native";
import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <AppProvider>
      <MainApp />
      <Toast />
      <StatusBar style="auto" />
    </AppProvider>
  );
}
