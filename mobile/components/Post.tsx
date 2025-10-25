import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Post = ({
    name,
    picture,
    postPicture,
    likes,
    time,
    description = "",
}: {
    name: string;
    picture: any;
    postPicture: any;
    likes: number;
    time: string;
    description?: string;
}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const MAX_DESCRIPTION_LENGTH = 100;
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    const displayDescription = () => {
        if (!description) return null;

        if (description.length <= MAX_DESCRIPTION_LENGTH || showFullDescription) {
            return description;
        }
        return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
    };
    const shouldShowMoreButton = description && description.length > MAX_DESCRIPTION_LENGTH;
    return (
        <View style={styles.postContainer}>
            <View style={styles.containerHeaderPost}>
                <View style={styles.leftSlideHeaderPost}>
                    <Image source={picture} style={styles.imageLeftHeader} />
                    <Text style={styles.textLeftHeader}>{name}</Text>
                </View>
                <View style={styles.rightSlideHeaderPost}>
                    <TouchableOpacity>
                        <Text style={styles.textIconDots}>...</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.pictureViewPost}>
                <Image source={postPicture} style={styles.postImage} resizeMode="contain" />
            </View>
            <View style={styles.footerContainerPost}>
                <View style={styles.leftSlideFooterPost}>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialCommunityIcons name="heart-outline" size={28} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        {likes}
                    </Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialCommunityIcons name="chat-outline" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialCommunityIcons name="send-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.rightSlideFooterPost}>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialCommunityIcons name="bookmark-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            {description && (
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        <Text style={styles.nameText}>{name} </Text>
                        {displayDescription()}
                    </Text>
                    {shouldShowMoreButton && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={styles.showMoreText}>
                                {showFullDescription ? 'Show less' : 'Show more'}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
            </View>
        </View>
    );
};
export default Post;
const styles = StyleSheet.create({
    postContainer: {
        marginVertical: 20,
        flexDirection: 'column',
    },
    containerHeaderPost: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    leftSlideHeaderPost: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    imageLeftHeader: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textLeftHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    rightSlideHeaderPost: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIconDots: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
    pictureViewPost: {
        width: '100%',
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    footerContainerPost: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    leftSlideFooterPost: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 2,
    },
    rightSlideFooterPost: {

    },
    iconButton: {
        padding: 5,
    },
    likesText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    descriptionContainer: {
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    descriptionText: {
        color: 'white',
        fontSize: 14,
        lineHeight: 18,
    },
    nameText: {
        fontWeight: 'bold',
        color: 'white',
    },
    showMoreText: {
        color: '#888',
        fontSize: 12,
        marginTop: 2,
        fontWeight: '500',
    },
    timeContainer: {
        marginTop: 5,
        paddingHorizontal: 10,
    },
    timeText: {
        color: '#555',
        fontSize: 12,
    },
});