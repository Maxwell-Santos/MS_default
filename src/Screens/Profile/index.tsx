import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { BackgroundImage } from '../../components/BackgroundImage';
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

import {
  ScrollView,
  View,
  VStack,
  HStack,
  ZStack,
  Button,
  Heading,
  Text,
  IconButton,
  Box,

} from 'native-base';
import { AvatarImg } from './styles';

export function Profile({ navigation }: any) {

  const avatar = require('../../assets/eu1.jpeg')

  return (
    <ScrollView
      bg={'#020202'}
      w='100%'
      _contentContainerStyle={{
        bg: '#020202',
        alignItems: 'center',

      }}
    >
      <VStack
        flex={1}
        space={2}

      >

        {/*Banner and data */}
        <ZStack
          flex={1}
          minH='400px'
          justifyContent='flex-end'
          >

          <BackgroundImage />
          <LinearGradient 
            colors={['transparent', '#000']}
            style={{width: '100%', height: '80%'}}
            />

          <VStack
          w='100%'
          h='100%'
          alignItems='center'
          justifyContent='flex-end'
          >
            
            <VStack
              alignItems='center' 
            >
              <AvatarImg
                source={avatar}
              />
              <Heading color='#fff'>Maxwell A. dos Santos</Heading>
              <Text color='#fff'>Front-end Developer</Text>

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
        </ZStack>


        {/*Actions and gallery */}
        <VStack
          flex={1}
        >
          <HStack
            space={2}
            p={2}
          >

            <TouchableOpacity
              style={
                {
                  flex: 1,
                  borderRadius: 8,
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
                  borderRadius: 8,
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
            <TouchableOpacity style={{ padding: 4 }}>
              <Text color={'#dbdbdb'}>
                Fotos
              </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 4 }}>
              <Text color={'#dbdbdb'}>
                Vídeos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 4 }}>
              <Text color={'#dbdbdb'}>
                Popular
              </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 4 }}>
              <Text color={'#dbdbdb'}>
                Sobre
              </Text>
            </TouchableOpacity>

          </HStack>

          <View
          flex={1}
          w='100%'
          alignItems='center'
          flexDirection="row"
          flexWrap={'wrap'}
          >
            <Box bg='#cccccc' w={200} h={200} borderRadius={4} m={2}></Box>
            <Box bg='#cccccc' w={150} h={200} borderRadius={4} m={2}></Box>
            <Box bg='#cccccc' w={150} h={200} borderRadius={4} m={2}></Box>
            <Box bg='#cccccc' w={200} h={200} borderRadius={4} m={2}></Box>
            <Box bg='#cccccc' w={200} h={200} borderRadius={4} m={2}></Box>
          </View>

        </VStack>

      </VStack>
    </ScrollView>
  );
}