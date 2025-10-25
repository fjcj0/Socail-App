import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
const GradientCheck = () => {
    return (
        <View style={styles.checkContainer}>
            <Svg height="30" width="30" viewBox="0 0 24 24">
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <Stop offset="0%" stopColor="#5e47de" />
                        <Stop offset="25%" stopColor="#5e47de" />
                        <Stop offset="50%" stopColor="#5e47de" />
                        <Stop offset="75%" stopColor="#5e47de" />
                        <Stop offset="100%" stopColor="#5e47de" />
                    </LinearGradient>
                </Defs>
                <Circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="url(#grad)"
                    strokeWidth="2"
                    fill="black"
                />
                <SvgText
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="bold"
                    fill="url(#grad)"
                >
                    ✓
                </SvgText>
            </Svg>
        </View>
    );
};
const Welcome = () => {
    return (
        <View>
            <View style={styles.messageContainerStyle}>
                <GradientCheck />
                <Text style={styles.textMessageStyle}>
                    {"You've seen the latest posts from accounts you follow."}
                </Text>
            </View>
            <View style={styles.containerSuggests}>
                <Text style={styles.suggestedText}>
                    Suggested for you
                </Text>

                <Text style={styles.olderPostsText}>
                    Older Posts
                </Text>
            </View>
        </View>
    );
};
export default Welcome;
const styles = StyleSheet.create({
    messageContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    checkContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMessageStyle: {
        color: 'white',
        opacity: 0.5,
        flexShrink: 1,
    },
    containerSuggests: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 5,
    },
    suggestedText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    olderPostsText: {
        color: '#5e47de',
        fontWeight: 'bold',
        fontSize: 20,
    },
});