import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const ProfileScreen = () => {
    return (
        <View style={styles.containerProfile}>
            <Text>profile</Text>
        </View>
    )
}
export default ProfileScreen;
const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        backgroundColor: 'black',
    }
});