import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { StatusBar } from 'react-native';
import { Cart } from './screens';

const Stack = createNativeStackNavigator();
export default function App() {

  const [fontsLoaded] = useFonts({
    'Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
