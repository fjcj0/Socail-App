import { View, ImageProps, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const UserPost = ({ image, onEdit, onRemove }: {
    image: ImageProps;
    onEdit?: () => void;
    onRemove?: () => void;
}) => {
    return (
        <View style={styles.postStyle}>
            <Image
                source={image}
                style={styles.imageStyle}
            />
            <TouchableOpacity style={styles.buttonEditStyle} onPress={onEdit}>
                <MaterialCommunityIcons name='image-edit' size={20} style={styles.textEdit} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRemoveStyle} onPress={onRemove}>
                <MaterialCommunityIcons name='close' size={20} style={styles.textRemove} />
            </TouchableOpacity>
        </View>
    );
}
export default UserPost;
const styles = StyleSheet.create({
    postStyle: {
        width: 200,
        height: 250,
        position: 'relative',
    },
    buttonEditStyle: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        padding: 5,
    },
    buttonRemoveStyle: {
        position: 'absolute',
        left: 5,
        top: 5,
        borderRadius: 15,
        padding: 5,
    },
    textEdit: {
        color: 'white'
    },
    textRemove: {
        color: 'white'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    }
});