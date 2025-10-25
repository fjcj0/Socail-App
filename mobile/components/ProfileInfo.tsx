import { View, StyleSheet, Image, Text, Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import { info } from '@/constants/data';
import ValueProfile from './ValueProfile';
import { Ionicons } from '@expo/vector-icons';
const ProfileInfo = () => {
    return (
        <View style={styles.containerInfo}>
            <View style={styles.containerHeaderInfo}>
                <TouchableOpacity style={styles.containerHeaderInfoLeft}>
                    <Image
                        source={{ uri: 'https://res.cloudinary.com/djovbiyia/image/upload/v1759851531/users/zdttgtte038xkndmqkzz.webp' }}
                        style={styles.imageHeaderInfoLeft}
                    />
                    <View style={styles.addButtonStyle}>
                        <Ionicons name='add-circle' size={25}
                            style={styles.iconStyle} />
                    </View>
                </TouchableOpacity>
                <View style={styles.containerHeaderInfoRight}>
                    {info.map((i, index) => (
                        <ValueProfile
                            key={index}
                            title={i.title}
                            value={i.value}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.containerName}>
                <Text style={styles.nameStyle}>
                    OmarCoding
                </Text>
                <Text style={styles.bioStyle}>
                    {'\u269B'} React Native Developer | {'\uD83D\uDCBB'} Coding enthusiast
                </Text>
            </View>
        </View>
    );
}
export default ProfileInfo;
const styles = StyleSheet.create({
    containerInfo: {
        flexDirection: 'column',
        rowGap: 15,
        borderBottomWidth: 1,
        paddingVertical: 25,
        borderColor: 'grey',
    },
    containerHeaderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    containerHeaderInfoLeft: {
        position: 'relative',
    },
    imageHeaderInfoLeft: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    containerHeaderInfoRight: {
        flexDirection: 'row',
        columnGap: 20,
        flex: 1,
        justifyContent: 'space-around',
        marginLeft: 20,
    },
    containerName: {
        flexDirection: 'column',
        rowGap: 10,
        paddingHorizontal: 15,
    },
    nameStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bioStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    },
    addButtonStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconStyle: {
        color: 'black',
    }
});