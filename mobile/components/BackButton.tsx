import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const BackButton = () => {
    const router = useRouter();
    return (
        <View style={styles.backContainer}>
            <Pressable onPress={() => {
                router.push('/(tabs)');
            }}>
                <MaterialCommunityIcons name='arrow-left' size={20} color={'white'} />
            </Pressable>
        </View>
    );
}
export default BackButton;
const styles = StyleSheet.create({
    backContainer: {
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        paddingHorizontal: 10,
        paddingBottom: 20
    },

});