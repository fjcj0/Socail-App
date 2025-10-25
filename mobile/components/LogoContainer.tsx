import { Image, View, ImageSourcePropType } from 'react-native';
import React from 'react';
const LogoContainer = ({ image }: { image: ImageSourcePropType }) => {
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: 80,
            zIndex: 10,
            backgroundColor: 'black'
        }}>
            {
                image &&
                <Image
                    source={image}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode='cover'
                />
            }
        </View>
    );
}
export default LogoContainer;