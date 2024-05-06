import { StatusBar } from "react-native";
import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";
import Toast from "react-native-toast-message";
import { AppHomeProvider } from "./contextapi/useHomeContext";
import { AppDiscoverProvider } from "./contextapi/useDiscoverContext";
import { AppWishListProvider } from "./contextapi/useWishListContext";
export default function App() {
  return (
    <AppProvider>
      <AppHomeProvider>
        <AppDiscoverProvider>
          <AppWishListProvider>
            <MainApp />
          </AppWishListProvider>
        </AppDiscoverProvider>
        <Toast />
        <StatusBar style="auto" />
      </AppHomeProvider>
    </AppProvider>
  );
}
