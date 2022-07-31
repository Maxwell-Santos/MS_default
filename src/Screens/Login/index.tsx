import React from 'react';

import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
  View,
  VStack,
  ZStack

} from 'native-base';


export function Login({ navigation }: any) {
  return (

    <View
      flex={1}
      // bg='#445566'
      justifyContent='flex-end'
    >
        <Image 
        source={{uri:"https://source.unsplash.com/random"}}
        resizeMode='stretch'
        flex={1}
        alt='imagem aleatória'
        />

      <Box
        w='100%'
        h='70%'
        bg='#ffffff'
        p={10}
        px={6}
        borderRadius='3xl'
        roundedBottom='none'
        borderTopWidth={2}
        borderLeftWidth={2}
        borderRightWidth={2}
        borderColor='#fff'
        color='#000'

        _text={{
          color: '#fff'
        }}
      >

        <Heading fontSize='2xl'>
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
                  fontSize: 'lg'
                }}
              >
                Email
              </FormControl.Label>
              <Input
                type='text'
                variant='rounded'
                placeholder='Email'

              />
            </VStack>


            <VStack
              w='full'
            >
              <FormControl.Label
                textAlign='left'
                w='full'
                _text={{
                  fontSize: 'lg'
                }}
              >
                Senha
              </FormControl.Label>
              <Input
                type='password'
                variant='rounded'
                placeholder='Senha'

              />
              <Link _text={{fontSize: 'xs'}} justifyContent='flex-end' isUnderlined={false}>
                Esqueceu a senha?
              </Link>
            </VStack>

            <Button
              borderRadius='full'
              w='full'
              py={2}
              mt={5}
              _text={{
                fontSize:'md'
              }}
            >
              Login
            </Button>

            <FormControl.HelperText
              mt={0}
              flexDirection='row'
            >
              Ainda não possui uma conta? 
              <Link 
                _text={{fontSize: 'xs', color: '#1d19e9', fontWeight: 'bold'}} 
                isUnderlined={false} 
                ml={1}
                onPress={() => navigation.navigate('SingUp')}
              >
                Cadastre-se
              </Link>
            </FormControl.HelperText>

          </VStack>
        </FormControl>

      </Box>
    </View>
  );
}