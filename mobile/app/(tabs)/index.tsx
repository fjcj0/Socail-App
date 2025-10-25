import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import HeaderHome from '@/components/HeaderHome';
const HomeScreen = () => {
    return (
        <View style={styles.containerHome}>
            <HeaderHome />
        </View>
    );
}
export default HomeScreen;
const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: 'black',
    }
});