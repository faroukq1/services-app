import React from "react";
import Welcome from "./pages/auth/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./pages/auth/LoginPage";
import AuthPage from "./pages/auth/AuthPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { useGlobalContext } from "./contextapi/useGlobalContext";
import { Text, View } from "react-native";
const Stack = createNativeStackNavigator();

const MainApp = () => {
  const { isLogin } = useGlobalContext();
  if (isLogin) {
    return (
      <View>
        <Text>welcom you logged in</Text>
      </View>
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
