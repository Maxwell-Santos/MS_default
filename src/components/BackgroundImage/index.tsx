import { Image } from 'react-native';

export function BackgroundImage() {

  const img = require('./../../assets/bgImage.jpg');

  return (
    <Image 
    source={img} 
    style={{width: '100%', height: '100%', resizeMode: 'cover'}}
    />
 )
}
