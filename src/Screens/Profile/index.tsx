import React from 'react';
import { TouchableOpacity, Image} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {
  VStack,
  HStack,
  ZStack,
  Avatar,
  Button,
  Heading,
  Text,
  IconButton,
  View

} from 'native-base';

export function Profile({ navigation }: any) {

  const avatar = require('./../../assets/eu1.jpeg')

  return (
    <VStack
      flex={1}
      bg='#020202'
      padding={4}
      space={2}
    >

      {/*Banner and data */}


      <VStack
        flex={1}
        justifyContent='flex-end'
        alignItems='center'
        // borderWidth={2}
        space={2}
      >
          <VStack
            alignItems='center'
            space={2}
          >
            <Avatar
              size='xl'
              borderWidth={1}
              borderColor='#fff'
              source={{ uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}
            />
            <Heading color='#fff'>Luciano Fernandes</Heading>
            <Text color='#fff'>UI Designer</Text>

          </VStack>

        <HStack
          space={4}
          my={4}
        >

          <VStack
            alignItems='center'
            padding={2}
            borderRadius={3}
          >
            <Text
              fontWeight='900'
              fontSize={18}
              color='#fff'
            >
              1.2K
            </Text>
            <Text color='#f1f1f1'>Postagens</Text>
          </VStack>


          <VStack
            alignItems='center'
            padding={2}
            borderRadius={3}
          >
            <Text
              fontWeight='900'
              fontSize={18}
              color='#fff'
            >
              10.4M
            </Text>
            <Text color='#f1f1f1'>Seguidores</Text>
          </VStack>


          <VStack
            alignItems='center'
            padding={2}
            borderRadius={3}
          >
            <Text
              fontWeight='900'
              fontSize={18}
              color='#fff'
            >
              5.1K
            </Text>
            <Text color='#f1f1f1'>Seguindo</Text>
          </VStack>

        </HStack>
      </VStack>




      {/*Actions and gallery */}
      <VStack
        flex={1}
      // borderWidth={2}
      >
        <HStack
          space={2}
          p={2}
        >

          <TouchableOpacity
            style={
              {
                flex: 1,
                borderRadius: 12,
                backgroundColor: '#dfdfdf',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 3
              }
            }
          >
            <Text>Seguir</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={
              {
                flex: 1,
                borderRadius: 12,
                backgroundColor: '#dfdfdf',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 3,
              }

            }
          >
            <Text>Mensagem</Text>
          </TouchableOpacity>

          <IconButton
            borderRadius={12}
            bg='#dfdfdf'
            p={2}
            shadow={3}
            icon={<Ionicons name="camera-outline" size={20} color="black" />}

          ></IconButton>
        </HStack>

        <HStack
          w='100%'
          justifyContent='space-evenly'
        >
          <Button
            variant='ghost'
            _text={{
              color: '#dbdbdb'
            }}
          >
            Fotos

          </Button>

          <Button
            variant='ghost'
            _text={{
              color: '#dbdbdb'
            }}
          >
            Vídeos
          </Button>

          <Button
            variant='ghost'
            _text={{
              color: '#dbdbdb'
            }}
          >
            Popular

          </Button>

          <Button
            variant='ghost'
            _text={{
              color: '#dbdbdb'
            }}
          >
            Sobre
          </Button>

        </HStack>

        {/* <View
        flex={1}
        // borderWidth={2}
        ></View> */}
      </VStack>

    </VStack>
  );
}