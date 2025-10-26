import { View, Text, ImageProps, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Activity = ({ comment, like, post, date, profilePicture, name }
    : {
        comment?: boolean,
        like?: boolean,
        post: ImageProps,
        date: string,
        profilePicture: ImageProps,
        name: string,
    }
) => {
    return (
        <TouchableOpacity style={styles.containerActivity}>
            <View style={styles.containerActivityLeft}>
                <View style={styles.containerProfilePicture}>
                    <Image
                        source={profilePicture} style={styles.imageProfilePicture} />
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name={comment ? 'comment' : 'heart'} size={12}
                            color={'white'} style={styles.iconStyle} />
                    </View>
                </View>
                <View style={styles.infoActivityContainer}>
                    <Text style={styles.namePersonStyle}>
                        {comment &&
                            `Commented by ${name}`
                        }
                        {
                            like &&

                            `Liked by ${name}`
                        }
                    </Text>
                    <Text style={styles.dateStyleText}>
                        {date}
                    </Text>
                </View>
            </View>
            <View>
                <Image style={styles.imageRightContainerActivity}
                    source={post} />
            </View>
        </TouchableOpacity>
    );
}
export default Activity;
const styles = StyleSheet.create({
    containerActivity: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    containerActivityLeft: {
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerProfilePicture: {
        position: 'relative',
    },
    imageProfilePicture: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 22,
        height: 22,
        backgroundColor: '#5e47de',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {

    },
    infoActivityContainer: {
        flexDirection: 'column',
        rowGap: 5,
    },
    namePersonStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    dateStyleText: {
        fontSize: 10,
        color: 'white',
        opacity: 0.5,
    },
    rightContainerActivity: {

    },
    imageRightContainerActivity: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
});