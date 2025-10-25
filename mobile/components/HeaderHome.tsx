import { View, StyleSheet, Image, ImageProps, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const logo: ImageProps = require('../assets/images/logo.png');
const HeaderHome = () => {
    return (
        <View style={styles.containerHeaderHome}>
            <View style={styles.containerLogo}>
                <Image
                    source={logo}
                    style={styles.logoStyle}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity>
                    <Ionicons name='heart-outline' size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='paper-plane-outline' size={26} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HeaderHome;
const styles = StyleSheet.create({
    containerHeaderHome: {
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#262626',
        backgroundColor: 'black',
    },
    containerLogo: {
        height: 50,
        justifyContent: 'center',
    },
    logoStyle: {
        width: 150,
        height: 150,
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 15,
        paddingRight: 10,
    },
});