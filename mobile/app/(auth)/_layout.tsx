import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
export default function AuthRoutesLayout() {
    const { isSignedIn } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    if (isLoading) {
        return (
            <Loader />
        );
    }
    if (isSignedIn) {
        return <Redirect href={"/(tabs)"} />;
    }
    return (
        <Stack screenOptions={{ headerShown: false }} />
    );
}