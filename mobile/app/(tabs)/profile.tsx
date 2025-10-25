import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ProfileInfo from '@/components/ProfileInfo';
import UserPost from '@/components/UserPost';
import { userPosts } from '@/constants/data';
const ProfileScreen = () => {
    return (
        <View style={styles.containerProfile}>
            <ProfileInfo />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={
                        styles.postsUserStyle
                    }>
                    {userPosts.map((userPost, index) => (
                        <UserPost key={index}
                            image={userPost.postPicture} />
                    ))}
                </ScrollView>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={
                        styles.postsUserStyle
                    }>
                    {userPosts.map((userPost, index) => (
                        <UserPost key={index}
                            image={userPost.postPicture} />
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;
const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        backgroundColor: 'black',
    },
    postsUserStyle: {
        columnGap: 20,
        marginVertical: 40,
    }
});