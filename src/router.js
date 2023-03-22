import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import Rdvok from './screens/Rdvok';
import AppointmentConfirm from './screens/AppointmentConfirm';

const Stack = createStackNavigator();

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RDV"
              component={AppointmentScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AppointmentScreen"
              component={AppointmentScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Rdvok"
              component={Rdvok}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AppointmentConfirm"
              component={AppointmentConfirm}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
