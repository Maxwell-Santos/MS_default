import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function SingUp({navigation}: any) {
  return (
    <View style={styles.container}>

      <Text>olá</Text>

      
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
       />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
       />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  }
})