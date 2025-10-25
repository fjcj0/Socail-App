import { Image, ImageProps, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
type OAuthStrategyProps = 'oauth_google' | 'oauth_github' | 'oauth_apple';
const Button = ({ text, icon, strategy }: { text: string, icon: ImageProps, strategy: OAuthStrategyProps }) => {
    const { startSSOFlow } = useSSO();
    const router = useRouter();
    const onPress = async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy
            });
            if (setActive && createdSessionId) {
                await setActive({ session: createdSessionId });
                router.replace('/(tabs)');
            }
        } catch (error) {
            console.log(error instanceof Error ? error.message : error);
        }
    }
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Image source={icon} style={styles.iconStyle} />
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}
export default Button;
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        columnGap: 10,
        width: 300,
        height: 60,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    iconStyle: {
        width: 30,
        height: 30,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15
    }
});