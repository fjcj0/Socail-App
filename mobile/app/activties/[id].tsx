import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import { activities } from '@/constants/data';
import Activity from '@/components/activity';
const Activties = () => {
    return (
        <View>
            <BackButton />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerActivites}
            >
                {activities.map((activity, index) => (
                    <Activity
                        key={index}
                        name={activity.name}
                        post={activity.post}
                        like={activity.like}
                        comment={activity.comment}
                        profilePicture={activity.profilePicture}
                        date={activity.date} />
                ))}
            </ScrollView>
        </View>
    );
}
export default Activties;
const styles = StyleSheet.create({
    containerActivites: {
        rowGap: 20,
    }
});