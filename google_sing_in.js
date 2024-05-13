import { Image, Text, StyleSheet, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from 'react';
import Navigation from "./Navigation";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from "@react-native-google-signin/google-signin";
  import "react-native-gesture-handler";


export function LoginWithGoogle(){

    const [error, setError] = useState();
    const [userInfo, setUserInfo] = useState();
    const navigation = useNavigation();
    
    const configureGoogleSignIn = () => {
      GoogleSignin.configure({
        webClientId:
          "1053001979109-b7m2ukdp4uj0fairfrgvluc52ea5iu3s.apps.googleusercontent.com",
        androidClientId:
          "1053001979109-045q3vs1qq5t8pe08p21p4ql5jmaslvg.apps.googleusercontent.com",
        iosClientId:
          "1053001979109-pptraati4mgbqm82ptfpmo9rsdegjvm9.apps.googleusercontent.com",
      });
    };

    useEffect(() => {
      configureGoogleSignIn();
    });

    const signIn = async () => {
      console.log("Iniciando sesion");
  
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        setUserInfo(userInfo);
        console.log("Inicio de sesion exitoso");
        navigation.navigate('Home');
        setError();
      } catch (e) {
        setError(e);
        console.log(setError)
      }
    };
  
    const logout = () => {
      setUserInfo(undefined);
      GoogleSignin.revokeAccess();
      GoogleSignin.signOut();
    };

    return(
        <View>
            <TouchableOpacity
                onPress={signIn} 
            >
                <Image source={require("./btn.png")} style={{width: 200, height: 40, borderColor: "#bfbfbf", borderRadius: 30}} />
          </TouchableOpacity>
        </View>
    )

  }