import React from "react";
import Welcome from "./pages/auth/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./pages/auth/LoginPage";
import AuthPage from "./pages/auth/AuthPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { useGlobalContext } from "./contextapi/useGlobalContext";
import HomePage from "./pages/Home/HomePage";
import DiscoverPage from "./pages/Home/DiscoverPage";
import WishListPage from "./pages/Home/WishListPage";
import AccountPage from "./pages/Home/AccountPage";
import BuyPage from "./pages/Home/BuyPage";
import Dashboard from "./pages/Home/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddService from "./component/AddService";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={HomePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="buy"
        component={BuyPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="wishlist"
        component={WishListPage}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  const { isLogin } = useGlobalContext();
  if (isLogin) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "discover") {
                iconName = focused ? "search" : "search-outline";
              } else if (route.name === "add") {
                iconName = focused ? "add-circle" : "add-circle-outline";
              } else if (route.name === "account") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={30} color="white" />;
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#5C88C4",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={PrivateStack}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="discover"
            component={DiscoverPage}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="add"
            component={AddService}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="account"
            component={AccountPage}
          />
        </Tab.Navigator>
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
