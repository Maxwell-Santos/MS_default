import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { BackgroundImage } from '../../components/BackgroundImage';
import { Alert } from 'react-native';

import { ButtonSingUp } from './styles';
import { useTheme } from 'styled-components/native';
import auth from '@react-native-firebase/auth';


import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  View,
  Text,
  Image,
  VStack,
  ZStack,
  KeyboardAvoidingView,
  Icon,

} from 'native-base';


export function SingUp({ navigation }: any) {
  const [show, setShow] = useState(false);
  const [clear, setClear] = useState(false);

  // const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 function handleNewAccount(){
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert('Conta', 'usuário cadastrado com sucesso')
    
    })
    .catch((error) => console.log(error))
  }

  return (

    <View
      flex={1}
    // bg='#445566'
    >
      <ZStack
        size='full'
        justifyContent='flex-end'
      >
        <BackgroundImage />


        <KeyboardAvoidingView
          flex={1}
          w='full'
        >

          <Box
            w='100%'
            bg='#000000b7'
            p={10}
            px={6}
            pb={20}
            borderRadius='3xl'
            roundedBottom='none'
            color='#fff'

            _text={{
              color: '#fff'
            }}
          >

            <Heading fontSize='3xl' color='#fff'>
              Cadastrar
            </Heading>

            <FormControl>

              <VStack
                alignItems='center'
                space={3}
                mt={2}

              >

                <VStack
                  w='full'
                >
                  <FormControl.Label
                    textAlign='left'
                    w='full'
                    _text={{
                      fontSize: 'lg',
                      color: '#fff'
                    }}
                  >
                    Nome
                  </FormControl.Label>
                  <Input
                    type='text'
                    variant='rounded'
                    placeholder='Seu nome'
                    fontSize='sm'
                    color='#fff'
                  />
                </VStack>

                <VStack
                  w='full'
                >
                  <FormControl.Label
                    textAlign='left'
                    w='full'
                    _text={{
                      fontSize: 'lg',
                      color: '#fff'
                    }}
                  >
                    Email
                  </FormControl.Label>
                  <Input
                    type='text'
                    variant='rounded'
                    placeholder='Seu melhor email'
                    fontSize='sm'
                    color='#fff'
                    onChangeText={setEmail}

                  />
                </VStack>


                <VStack
                  w='full'
                >
                  <FormControl.Label
                    textAlign='left'
                    w='full'
                    _text={{
                      fontSize: 'lg',
                      color: '#fff'
                    }}
                  >
                    Senha
                  </FormControl.Label>
                  <Input
                    variant='rounded'
                    type={show ? "text" : "password"}
                    color='#fff'
                    onChangeText={setPassword}

                    InputRightElement={
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                        size={5} mr="5" color="muted.400"
                        onPress={() => setShow(!show)} />
                    }

                    fontSize='sm'
                    placeholder="Digite uma senha"
                  />


                </VStack>

                <ButtonSingUp
                style={{elevation: 3}}
                onPress={handleNewAccount}
                >
                  <Text
                  style={{color: '#fff', fontSize: 18}}
                  >
                    CONTINUE
                  </Text>
                </ButtonSingUp>

                <View
                  mt={0}
                  flexDirection='row'
                >
                  <Text color='#fff'>Já possui uma conta?</Text>

                  <Button
                    variant='ghost'
                    p={0}
                    px={1}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text fontWeight='bold' color='#c01f1f'> Login </Text>
                  </Button>
                </View>
              </VStack>
            </FormControl>

          </Box>
        </KeyboardAvoidingView>
      </ZStack>

    </View>


  );
}