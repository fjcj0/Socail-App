import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
const Story = ({ profilePicture, storyId, isUser }: { profilePicture: string, storyId: number, isUser: boolean }) => {
    return (
        <View style={styles.containerStory}>
            <TouchableOpacity style={styles.wrapper}>
                <Svg height="80" width="80" viewBox="0 0 80 80" style={styles.gradientRing}>
                    <Defs>
                        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor={!isUser ? '#5e47de' : '#333'} />
                            <Stop offset="25%" stopColor={!isUser ? '#5e47de' : '#333'} />
                            <Stop offset="50%" stopColor={!isUser ? '#5e47de' : '#333'} />
                            <Stop offset="75%" stopColor={!isUser ? '#5e47de' : '#333'} />
                            <Stop offset="100%" stopColor={!isUser ? '#5e47de' : '#333'} />
                        </LinearGradient>
                    </Defs>
                    <Circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="url(#grad)"
                        strokeWidth="3"
                        fill="none"
                    />
                </Svg>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{ uri: profilePicture }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                {isUser && (
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}
export default Story;
const styles = StyleSheet.create({
    containerStory: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    wrapper: {
        position: 'relative',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientRing: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
    },
    imageWrapper: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        zIndex: 1,
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 25,
        height: 25,
        borderRadius: 12,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        zIndex: 2,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});