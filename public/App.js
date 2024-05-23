import { StatusBar } from "react-native";
import MainApp from "./MainApp";
import { AppProvider } from "./contextapi/useGlobalContext";
import Toast from "react-native-toast-message";
import { AppHomeProvider } from "./contextapi/useHomeContext";
import { AppDiscoverProvider } from "./contextapi/useDiscoverContext";
import { AppWishListProvider } from "./contextapi/useWishListContext";
import { OrdersProvider } from "./contextapi/useOrdersContext";
export default function App() {
  return (
    <AppProvider>
      <AppHomeProvider>
        <AppDiscoverProvider>
          <AppWishListProvider>
            <OrdersProvider>
              <MainApp />
            </OrdersProvider>
          </AppWishListProvider>
        </AppDiscoverProvider>
        <Toast />
        <StatusBar style="auto" />
      </AppHomeProvider>
    </AppProvider>
  );
}
