import Button from '@/components/Button';
import LogoContainer from '@/components/LogoContainer';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const logo = require(`../../assets/images/logo.png`);
const image = require(`../../assets/images/Secure login-amico.png`);
const github = require(`../../assets/icons/github.png`);
const google = require(`../../assets/icons/google.png`);
const apple = require(`../../assets/icons/apple-logo.png`);
export default function SignInScreen() {
    return (
        <View style={styles.containerSignIn}>
            <LogoContainer image={logo} />
            <View style={styles.containerInput}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            source={image}
                            style={styles.image}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            opacity: 0.6,
                            flexDirection: 'column',
                            fontWeight: 200,
                            fontSize: 14
                        }}>
                            {"Don't miss everything stay with us always"}
                        </Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <Button
                            text={'Continue Using Google'}
                            icon={google}
                            strategy='oauth_google' />
                        <Button
                            text={'Continue Using Github'}
                            icon={github}
                            strategy='oauth_github' />
                        <Button
                            text={'Continue Using Apple'}
                            icon={apple}
                            strategy='oauth_apple' />
                    </View>
                    <View style={{
                        marginTop: 15,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            opacity: 0.6,
                            flexDirection: 'column',
                            fontWeight: 200,

                        }}>
                            By continuing, you agree terms and
                        </Text>
                        <Text style={{
                            color: 'white',
                            opacity: 0.6,
                            flexDirection: 'column',
                            fontWeight: 200,

                        }}>Privacy Policy</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    containerSignIn: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerInput: {
        flex: 1,
    },
    scrollContent: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    containerButtons: {
        flexDirection: 'column',
        rowGap: 20,
        marginTop: 20,
    }
});