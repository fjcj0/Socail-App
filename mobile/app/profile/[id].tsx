import { View, Text, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
import React, { useRef } from 'react';
import BackButton from '@/components/BackButton';
import PersonProfile from '@/components/PersonProfile';
import { userPosts, userVideos } from '@/constants/data';
import UserPost from '@/components/UserPost';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Profile = () => {
    const scrollX1 = useRef(new Animated.Value(0)).current;
    const scrollX2 = useRef(new Animated.Value(0)).current;
    return (
        <View>
            <BackButton />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollProfileContainer}>
                <PersonProfile />
                <View
                >
                    <View>
                        <Animated.ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.postsUserStyle}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX1 } } }],
                                { useNativeDriver: true }
                            )}
                            scrollEventThrottle={16}
                        >
                            {userPosts.map((userPost, index) => (
                                <AnimatedUserPost
                                    key={`image-${index}`}
                                    image={userPost.postPicture}
                                    index={index}
                                    scrollX={scrollX1}
                                    isVideo={false}
                                />
                            ))}
                        </Animated.ScrollView>
                    </View>
                    <View>
                        <Animated.ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.postsUserStyle}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
                                { useNativeDriver: true }
                            )}
                            scrollEventThrottle={16}
                        >
                            {userVideos.map((videoUrl, index) => (
                                <AnimatedUserPost
                                    key={`video-${index}`}
                                    videoUrl={videoUrl}
                                    index={index}
                                    scrollX={scrollX2}
                                    isVideo={true}
                                />
                            ))}
                        </Animated.ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const AnimatedUserPost = ({ image, videoUrl, index, scrollX, isVideo }: {
    image?: any;
    videoUrl?: string;
    index: number;
    scrollX: Animated.Value;
    isVideo: boolean;
}) => {
    const postWidth = 200;
    const postHeight = 250;
    const spacing = 20;
    const inputRange = [
        (index - 1) * (postWidth + spacing),
        index * (postWidth + spacing),
        (index + 1) * (postWidth + spacing),
    ];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
        extrapolate: 'clamp',
    });
    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.6, 1, 0.6],
        extrapolate: 'clamp',
    });
    return (
        <Animated.View style={[
            styles.animatedPostStyle,
            {
                transform: [{ scale }],
                opacity: opacity,
            }
        ]}>
            <UserPost
                image={image}
                videoUrl={videoUrl}
                isVideo={isVideo}
            />
        </Animated.View>
    );
}
export default Profile;
const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'column',
    },
    scrollProfileContainer: {

    }, postsUserStyle: {
        columnGap: 20,
        marginVertical: 10,
        paddingHorizontal: (Dimensions.get('window').width - 200) / 2,
    },
    animatedPostStyle: {
        width: 200,
        height: 250,
    }
});