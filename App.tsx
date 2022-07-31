import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './src/Routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <StatusBar style="auto" translucent={true} />
          <Routes />
        </NativeBaseProvider>
    </SafeAreaView>
  );
}