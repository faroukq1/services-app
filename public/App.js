import { StatusBar } from "react-native";
import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";

export default function App() {
  return (
    <AppProvider>
      <MainApp />
      <StatusBar style="auto" />
    </AppProvider>
  );
}
