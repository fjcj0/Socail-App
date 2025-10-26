import { View, Text, StyleSheet, ImageProps, Image, TouchableOpacity } from 'react-native';
import React from 'react';
const Follower = ({ name, image, joined_in }: { name: string, image: ImageProps, joined_in: string }) => {
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
        </TouchableOpacity>
    );
}
export default Follower;
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