import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import HeaderHome from '@/components/HeaderHome';
import { posts, stories } from '@/constants/data';
import Story from '@/components/Story';
import Welcome from '@/components/Welcome';
import Post from '@/components/Post';
const HomeScreen = () => {
    return (
        <View style={styles.containerHome}>
            <HeaderHome />
            <ScrollView
                style={styles.containerBody}
                showsVerticalScrollIndicator={false}>
                <ScrollView
                    style={styles.storiesContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContentContainer}>
                    <Story
                        storyId={100}
                        profilePicture={'https://res.cloudinary.com/djovbiyia/image/upload/v1759851531/users/zdttgtte038xkndmqkzz.webp'}
                        isUser={true}
                    />
                    {stories.map((story, index) => (
                        <Story
                            key={story.storyId}
                            storyId={story.storyId}
                            profilePicture={story.profilePicture}
                            isUser={false} />
                    ))}
                </ScrollView>
                <Welcome />
                <View style={styles.postsContainer}>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            name={post.name}
                            likes={post.likes}
                            postPicture={post.postPicture}
                            picture={post.picture}
                            time={post.time} description={post.description} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerBody: {
        marginBottom: 10,
    },
    storiesContainer: {
        paddingVertical: 10,
    },
    storiesContentContainer: {
        paddingHorizontal: 10,
        columnGap: 16,
    },
    postsContainer: {
        rowGap: 10,
        marginTop: 5
    }
});