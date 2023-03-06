import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { StatusBar } from "expo-status-bar";
import UserProfile from "./screens/UserProfile";
import CartScreen from "./screens/CartScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={FoodDetailScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="User"
          component={UserProfile}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
