import React, { useRef } from 'react';
import { Redirect, Tabs } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Animated } from 'react-native';
const TabsLayout = () => {
    const { isSignedIn } = useAuth();
    const scaleAnims = useRef([
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1),
        new Animated.Value(1)
    ]).current;
    if (!isSignedIn) {
        return <Redirect href={"/(auth)/sign-in"} />
    }
    const handleTabPress = (index: number) => {
        scaleAnims.forEach(anim => anim.setValue(1));
        Animated.sequence([
            Animated.spring(scaleAnims[index], {
                toValue: 1,
                useNativeDriver: true,
                speed: 20,
            }),
            Animated.spring(scaleAnims[index], {
                toValue: 0.85,
                useNativeDriver: true,
                speed: 20,
            })
        ]).start();
    };
    interface AnimatedTabIconProps {
        index: number;
        focused: boolean;
        color: string;
        iconName: any;
        outlineIconName: any;
    }
    const AnimatedTabIcon = ({ index, focused, color, iconName, outlineIconName }: AnimatedTabIconProps) => {
        return (
            <Animated.View
                style={{
                    backgroundColor: focused ? '#5e47de' : 'transparent',
                    width: 38,
                    height: 38,
                    borderWidth: focused ? 0.5 : 0,
                    borderColor: focused ? 'white' : 'transparent',
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 3,
                    transform: [{ scale: scaleAnims[index] }]
                }}
            >
                <Ionicons
                    name={focused ? iconName : outlineIconName}
                    size={21}
                    color={color}
                />
            </Animated.View>
        );
    };
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'black',
                    marginHorizontal: 90,
                    marginBottom: 50,
                    borderWidth: 0.5,
                    height: 60,
                    flexDirection: 'row',
                    borderRadius: 100,
                    borderTopWidth: 0.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AnimatedTabIcon
                            index={0}
                            focused={focused}
                            color={color}
                            iconName="home"
                            outlineIconName="home-outline"
                        />
                    ),
                }}
                listeners={{
                    tabPress: () => handleTabPress(0),
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AnimatedTabIcon
                            index={1}
                            focused={focused}
                            color={color}
                            iconName="search"
                            outlineIconName="search-outline"
                        />
                    ),
                }}
                listeners={{
                    tabPress: () => handleTabPress(1),
                }}
            />
            <Tabs.Screen
                name='add'
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AnimatedTabIcon
                            index={2}
                            focused={focused}
                            color={color}
                            iconName="add-circle"
                            outlineIconName="add-circle-outline"
                        />
                    ),
                }}
                listeners={{
                    tabPress: () => handleTabPress(2),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AnimatedTabIcon
                            index={3}
                            focused={focused}
                            color={color}
                            iconName="person"
                            outlineIconName="person-outline"
                        />
                    ),
                }}
                listeners={{
                    tabPress: () => handleTabPress(3),
                }}
            />
        </Tabs>
    );
}
export default TabsLayout;