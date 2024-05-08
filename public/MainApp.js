import React from "react";
import Welcome from "./pages/auth/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./pages/auth/LoginPage";
import AuthPage from "./pages/auth/AuthPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { useGlobalContext } from "./contextapi/useGlobalContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./pages/Home/HomePage";
import DiscoverPage from "./pages/Home/DiscoverPage";
import WishListPage from "./pages/Home/WishListPage";
import AccountPage from "./pages/Home/AccountPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useWishListContext } from "./contextapi/useWishListContext";
import BuyPage from "./pages/Home/BuyPage";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  const { isLogin } = useGlobalContext();
  if (isLogin) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={HomePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="discover"
            component={DiscoverPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="wishlist"
            component={WishListPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="account"
            component={AccountPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="buy"
            component={BuyPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="register"
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="auth"
          component={AuthPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
