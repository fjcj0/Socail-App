import { View, ImageProps, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
const UserPost = ({ image, videoUrl, isVideo, onEdit, onRemove }: {
    image?: ImageProps;
    videoUrl?: string;
    isVideo?: boolean;
    onEdit?: () => void;
    onRemove?: () => void;
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<Video>(null);
    const togglePlayPause = async () => {
        if (isVideo && videoRef.current) {
            if (isPlaying) {
                await videoRef.current.pauseAsync();
            } else {
                await videoRef.current.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const handlePress = async () => {
        if (isVideo && !showVideo) {
            setShowVideo(true);
            if (videoRef.current) {
                await videoRef.current.playAsync();
                setIsPlaying(true);
            }
        } else if (isVideo && showVideo) {
            togglePlayPause();
        }
    };
    const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
        if (status.isLoaded) {
            setIsPlaying(status.isPlaying);
        }
    };
    return (
        <View style={styles.postStyle}>
            {isVideo && videoUrl ? (
                <TouchableOpacity onPress={handlePress} style={styles.videoContainer} activeOpacity={0.9}>
                    {showVideo ? (
                        <>
                            <Video
                                ref={videoRef}
                                source={{ uri: videoUrl }}
                                style={styles.videoStyle}
                                resizeMode={"cover" as any}
                                isLooping
                                onPlaybackStatusUpdate={onPlaybackStatusUpdate}
                                shouldPlay={isPlaying}
                            />
                            {!isPlaying && (
                                <View style={styles.playButtonOverlay}>
                                    <MaterialCommunityIcons name="play-circle" size={50} color="white" />
                                </View>
                            )}
                        </>
                    ) : (
                        <View style={styles.videoThumbnailContainer}>
                            {image && (
                                <Image
                                    source={image}
                                    style={styles.imageStyle}
                                />
                            )}
                            <View style={styles.videoPlayButton}>
                                <MaterialCommunityIcons name="play-circle" size={40} color="white" />
                            </View>
                        </View>
                    )}
                    <View style={styles.videoIndicator}>
                        <MaterialCommunityIcons name="play" size={16} color="white" />
                    </View>
                </TouchableOpacity>
            ) : (
                <Image
                    source={image}
                    style={styles.imageStyle}
                />
            )}

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
    videoContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    videoThumbnailContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    videoStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    playButtonOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 8,
    },
    videoPlayButton: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 8,
    },
    videoIndicator: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 4,
        padding: 4,
    },
    buttonEditStyle: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        padding: 5,
        zIndex: 10,
    },
    buttonRemoveStyle: {
        position: 'absolute',
        left: 5,
        top: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        padding: 5,
        zIndex: 10,
    },
    textEdit: {
        color: 'white'
    },
    textRemove: {
        color: 'white'
    },
});