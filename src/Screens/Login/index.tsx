import React, { useState } from 'react';
import { BackgroundImage } from '../../components/BackgroundImage';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { ButtonLogin } from './styles'
import { useTheme } from 'styled-components/native';


import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  View,
  Text,
  VStack,
  ZStack,
  Icon,
  KeyboardAvoidingView

} from 'native-base';

export function Login({ navigation }: any) {

  const [show, setShow] = useState(false);
  const theme = useTheme();

  return (

    <View
      flex={1}
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

            <Heading fontSize='3xl' color={theme.titleColor}>
              Login
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
                    Email
                  </FormControl.Label>
                  <Input
                    type='text'
                    variant='rounded'
                    placeholder='Seu email'
                    fontSize='sm'
                    color={theme.inputColor}
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

                    InputRightElement={
                      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                        size={5} mr="5" color="muted.400"
                        onPress={() => setShow(!show)} />
                    }
                    fontSize='sm'
                    placeholder="Sua senha"
                    color={theme.inputColor}
                  />

                  <View justifyContent='flex-end'>
                    <Button variant='link' justifyContent='flex-end'>
                      <Text fontSize='xs' w='full' color='#fff'>Esqueceu a senha?</Text>
                    </Button>
                  </View>
                </VStack>

                <ButtonLogin
                style={{elevation: 3}}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text
                  style={{color: '#fff', fontSize: 18}}
                  >LOGIN</Text>
                </ButtonLogin>

                <View
                  mt={0}
                  flexDirection='row'
                >
                  <Text
                    color='#fff'
                  >Ainda não possui uma conta?</Text>

                  <Button
                    variant='ghost'
                    p={0}
                    px={1}
                    onPress={() => navigation.navigate('SingUp')}
                  >
                    <Text fontWeight='bold' color='#ec3131'> Cadastre-se </Text>
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