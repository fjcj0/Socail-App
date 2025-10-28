import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const HeaderSender = () => {
    return (
        <View style={styles.containerHeaderSender}>
            <View style={styles.headerSenderLeft}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='arrow-left' size={20} color={'white'} />
                </TouchableOpacity>
                <Image source={{ uri: 'https://res.cloudinary.com/djovbiyia/image/upload/v1759851531/users/zdttgtte038xkndmqkzz.webp' }}
                    style={styles.imageStyle} />
            </View>
            <View style={styles.headerRightSender}>
                <Text style={styles.textNameStyle}>Omar Coding</Text>
                <Text style={styles.textStatusStyle}>Online</Text>
            </View>
        </View>
    );
}
export default HeaderSender;
const styles = StyleSheet.create({
    containerHeaderSender: {
        flexDirection: 'row',
        columnGap: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        zIndex: 10,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'black'
    },
    headerSenderLeft: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    headerRightSender: {
        flexDirection: 'column',
        rowGap: 5,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textNameStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    textStatusStyle: {
        color: 'white',
        opacity: 0.5,
        fontSize: 10,
    },
});