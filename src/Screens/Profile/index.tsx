import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Profile({navigation}: any ) {
  return (
    <View style={styles.container}>

      <Text>Olá</Text>
      
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
       />
      <Button
        title="SingUp"
        onPress={() => navigation.navigate('SingUp')}
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