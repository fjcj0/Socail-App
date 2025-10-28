import { View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
interface InputMessageProps {
    onSendMessage: (message: string) => void;
}
const InputMessage = ({ onSendMessage }: InputMessageProps) => {
    const [value, setValue] = useState('');
    const handleSend = () => {
        if (value.trim()) {
            onSendMessage(value);
            setValue('');
        }
    };
    const handleAddImage = () => {
        Alert.alert('Add Content', 'Image functionality removed - text only mode');
    };
    const handleCamera = () => {
        Alert.alert('Camera', 'Camera functionality would go here');
    };
    const handleMic = () => {
        Alert.alert('Voice Message', 'Voice recording functionality would go here');
    };
    return (
        <View style={styles.containerInput}>
            <View style={styles.inputContainer}>
                <View style={styles.viewInput}>
                    <TextInput
                        placeholder='Message...'
                        style={styles.inputStyle}
                        placeholderTextColor={'#8e8e8e'}
                        onChangeText={(text) => setValue(text)}
                        value={value}
                        multiline={true}
                        maxLength={1000}
                    />
                    <View style={styles.inputIcons}>
                        <TouchableOpacity style={styles.iconButton} onPress={handleAddImage}>
                            <Ionicons name="add-circle-outline" size={24} color="#5e47de" />
                        </TouchableOpacity>
                        {value === '' && (
                            <>
                                <TouchableOpacity style={styles.iconButton} onPress={handleCamera}>
                                    <Ionicons name="camera-outline" size={24} color="#5e47de" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton} onPress={handleMic}>
                                    <Ionicons name="mic-outline" size={24} color="#5e47de" />
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    style={[
                        styles.sendButton,
                        value === '' && styles.sendButtonDisabled
                    ]}
                    onPress={handleSend}
                    disabled={value === ''}
                >
                    <Ionicons
                        name="send"
                        size={20}
                        color={value === '' ? '#8e8e8e' : 'white'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default InputMessage;
const styles = StyleSheet.create({
    containerInput: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        paddingBottom: 20,
        paddingHorizontal: 10,
        zIndex: 10,
        paddingTop: 10,
        backgroundColor: '#0a0a0a',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
    },
    viewInput: {
        flex: 1,
        position: 'relative',
        marginRight: 10,
    },
    inputStyle: {
        width: '100%',
        minHeight: 45,
        maxHeight: 100,
        backgroundColor: '#131515',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 25,
        color: 'white',
        fontSize: 16,
        paddingRight: 100,
        textAlignVertical: 'center',
    },
    inputIcons: {
        position: 'absolute',
        right: 10,
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        paddingHorizontal: 4,
    },
    sendButton: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#5e47de',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
    },
    sendButtonDisabled: {
        backgroundColor: '#131515',
    },
});