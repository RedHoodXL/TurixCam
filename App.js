import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './screens/navigation';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import OnBoarding from './screens/onBoarding';
import { getItem } from './components/const/AsyncStorage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Navigation />
  );
}

function OnBoardingScreen() {
  return (
    <OnBoarding />
  );
}

function SplashScreen() {

  const [showOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    checkOnBoarding()
  }, [])

  const checkOnBoarding = async () => {
    let onBoarded = await getItem('onBoarded')
    if (onBoarded == 1) {

      setShowOnBoarding(false)
    } else {
      setShowOnBoarding(true)
    }
  }

  console.log('splashScreen');
  const { navigate } = useNavigation();

  setTimeout(() => {
    if (showOnBoarding) {
      return (
        navigate('OnBoarding')
      )
    }
    else {
      return (
        navigate('App')
      )
    }
  }, 6000);
  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={'cover'}
      source={require('./assets/splash.mp4')}
      isLooping={false}
      shouldPlay={true}
    />
  )
}

function AppStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="App" component={App} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppStack;
