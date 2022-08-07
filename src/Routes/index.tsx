import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens/Login";
import { Profile } from "../Screens/Profile";
import { SingUp } from "../Screens/SingUp";

export function Routes() {

  const {Navigator, Screen} = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
         screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      >

        <Screen name="Login" component={Login} options={{headerShown: false}}/>

        <Screen name="SingUp" component={SingUp} options={{headerTintColor: '#fff', headerTitle: ''}}/>

        <Screen name="Profile" component={Profile} options={{headerTintColor: '#fff', headerTitle: ''}}/>
        
      </Navigator>
    </NavigationContainer>

  );
}