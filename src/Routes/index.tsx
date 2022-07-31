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
          headerShown: false,
        }}
      >

        <Screen name="Login" component={Login}/>

        <Screen name="SingUp" component={SingUp}/>

        <Screen name="Profile" component={Profile}/>
        
      </Navigator>
    </NavigationContainer>

  );
}