import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/Routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000'}}>
      <StatusBar style='inverted' />

        <NativeBaseProvider>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <Routes />

          </TouchableWithoutFeedback>

        </NativeBaseProvider>
    
    </SafeAreaView>
  );
}