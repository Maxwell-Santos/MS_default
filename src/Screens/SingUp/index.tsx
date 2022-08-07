import React, { useState } from 'react';
import { BackgroundImage } from '../../components/BackgroundImage';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'

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
  Icon

} from 'native-base';


export function SingUp({ navigation }: any) {
  const [show, setShow] = useState(false);

  const [clear, setClear] = useState(false)

  return (

    <View
      flex={1}
    // bg='#445566'
    >
      <ZStack
        size='full'
        justifyContent='flex-end'
      >
        <BackgroundImage/>


        <KeyboardAvoidingView
          flex={1}
          w='full'
        >

          <Box
             w='100%'
             // h='70%'
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
                      color:'#fff'
                    }}
                  >
                    Nome
                  </FormControl.Label>
                  <Input
                    type='text'
                    variant='rounded'
                    placeholder='Seu nome'
                    fontSize='sm'

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
                      color:'#fff'
                    }}
                  >
                    Email
                  </FormControl.Label>
                  <Input
                    type='text'
                    variant='rounded'
                    placeholder='Seu melhor email'
                    fontSize='sm'

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
                      color:'#fff'
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
                    placeholder="Digite uma senha"
                  />


                </VStack>

                <Button
                  borderRadius='full'
                  bgColor={'#c01f1f'}
                  w='full'
                  py={3}
                  mt='15%'
                  mb={0}
                  _text={{
                    fontSize: 'lg',
                    color:'#fff'
                  }}
                  shadow={3}
                >
                  Continue
                </Button>

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
                    <Text fontWeight='bold' color='#fff'> Login </Text>
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