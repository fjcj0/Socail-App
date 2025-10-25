import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const AddScreen = () => {
    const [isButtonFocused, setIsButtonFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
    const [description, setDescription] = useState('');
    const handleButtonPress = () => {
        Alert.alert('Upload', 'Upload picture functionality would go here');
    };
    const handleButtonPressIn = () => {
        setIsButtonFocused(true);
    };
    const handleButtonPressOut = () => {
        setIsButtonFocused(false);
    };
    const handleSubmit = () => {
        if (!description.trim()) {
            Alert.alert('Error', 'Please add a description');
            return;
        }
        Alert.alert('Success', `Picture uploaded with description: ${description}`);
        setDescription('');
        Keyboard.dismiss();
    };
    const handleSubmitEditing = () => {
        if (description.trim()) {
            handleSubmit();
        } else {
            Keyboard.dismiss();
        }
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.containerAdd}>
                        <TouchableOpacity
                            style={[
                                styles.buttonStyle,
                                isButtonFocused && styles.buttonFocused
                            ]}
                            onPress={handleButtonPress}
                            onPressIn={handleButtonPressIn}
                            onPressOut={handleButtonPressOut}
                            activeOpacity={0.7}
                        >
                            <MaterialCommunityIcons
                                name='image-plus'
                                size={30}
                                color={isButtonFocused ? '#5e47de' : 'white'}
                            />
                            <Text style={[
                                styles.textStyle,
                                isButtonFocused && styles.textFocused
                            ]}>
                                Upload Picture Or Video
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={[
                                    styles.descriptionInput,
                                    isDescriptionFocused && styles.descriptionInputFocused
                                ]}
                                placeholder="Add description..."
                                placeholderTextColor="#666"
                                value={description}
                                onChangeText={setDescription}
                                onFocus={() => setIsDescriptionFocused(true)}
                                onBlur={() => setIsDescriptionFocused(false)}
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                maxLength={200}
                                blurOnSubmit={false}
                                returnKeyType="done"
                                onSubmitEditing={handleSubmitEditing}
                            />
                            <Text style={styles.charCount}>
                                {description.length}/200
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={[
                                styles.submitButton,
                                (!description.trim()) && styles.submitButtonDisabled
                            ]}
                            onPress={handleSubmit}
                            disabled={!description.trim()}
                        >
                            <Text style={styles.submitButtonText}>
                                Upload Post
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
export default AddScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    containerAdd: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    buttonStyle: {
        width: '100%',
        height: 250,
        borderColor: 'white',
        borderWidth: 2,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 10,
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: '#1a1a1a',
    },
    buttonFocused: {
        borderColor: '#5e47de',
        borderWidth: 3,
        backgroundColor: '#1a1a2a',
        shadowColor: '#5e47de',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textFocused: {
        color: '#5e47de',
    },
    inputContainer: {
        width: '100%',
        position: 'relative',
    },
    descriptionInput: {
        width: '100%',
        minHeight: 120,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 15,
        paddingVertical: 12,
        paddingBottom: 25,
        color: 'white',
        fontSize: 14,
        textAlignVertical: 'top',
    },
    descriptionInputFocused: {
        borderColor: '#5e47de',
        borderWidth: 2,
        backgroundColor: '#1a1a2a',
    },
    charCount: {
        position: 'absolute',
        bottom: 8,
        right: 12,
        color: '#666',
        fontSize: 12,
    },
    submitButton: {
        width: 130,
        height: 50,
        backgroundColor: '#5e47de',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#5e47de',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
        alignSelf: 'flex-start'
    },
    submitButtonDisabled: {
        backgroundColor: '#333',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 2,
        alignSelf: 'flex-start',
        width: 130
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});