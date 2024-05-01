import { StatusBar } from "react-native";
import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";
import Toast from "react-native-toast-message";
import { AppHomeProvider } from "./contextapi/useHomeContext";
export default function App() {
  return (
    <AppProvider>
      <AppHomeProvider>
        <MainApp />
        <Toast />
        <StatusBar style="auto" />
      </AppHomeProvider>
    </AppProvider>
  );
}
