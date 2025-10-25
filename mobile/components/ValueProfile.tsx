import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
const ValueProfile = ({ title, value }: { title: string, value: number }) => {
    return (
        <View style={styles.containerValueProfile}>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>{value}</Text>
        </View>
    )
}
export default ValueProfile;
const styles = StyleSheet.create({
    containerValueProfile: {
        flexDirection: 'column',
        rowGap: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
});