import { View, Text, StyleSheet, ImageProps, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const Person = ({ name, image, joined_in }: { name: string, image: ImageProps, joined_in: string }) => {
    const handleSendRequest = () => {
        console.log('Send friend request to:', name);
    };
    return (
        <TouchableOpacity style={styles.containerPerson}>
            <View style={styles.containerPicture}>
                <Image
                    style={styles.pictureStyle}
                    source={image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.nameTextStyle}>
                    {name}
                </Text>
                <Text style={styles.dateTextStyle}>
                    Joined In: {joined_in}
                </Text>
            </View>
            <TouchableOpacity
                style={styles.friendRequestButton}
                onPress={handleSendRequest}
            >
                <Ionicons name="person-add" size={15} color="white" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
export default Person;
const styles = StyleSheet.create({
    containerPerson: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    containerPicture: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#5e47de',
        overflow: 'hidden',
    },
    pictureStyle: {
        width: '100%',
        height: '100%',
    },
    containerInfo: {
        flexDirection: 'column',
        rowGap: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
    },
    nameTextStyle: {
        color: 'white',
        fontWeight: 'bold'
    },
    dateTextStyle: {
        color: 'white',
        opacity: 0.5,
        fontSize: 10,
    },
    friendRequestButton: {
        width: 28,
        height: 28,
        borderRadius: 20,
        backgroundColor: '#5e47de',
        alignItems: 'center',
        justifyContent: 'center',
    },
});