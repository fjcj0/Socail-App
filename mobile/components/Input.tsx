import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
const Input = ({ value, setValue }: { value: any, setValue: any }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleClear = () => {
        setValue('');
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <View style={styles.inputStyleView}>
            <TextInput
                style={[
                    styles.inputStyle,
                    isFocused && styles.inputStyleFocused
                ]}
                placeholder='Search'
                placeholderTextColor={'#666'}
                value={value}
                onChangeText={setValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <View style={styles.iconContainerLeft}>
                <Ionicons name='search' size={20} color={isFocused ? '#5e47de' : 'white'} />
            </View>
            {value &&
                <TouchableOpacity
                    style={styles.iconContainerRight}
                    onPress={handleClear}
                >
                    <Ionicons name='close-circle' size={20} color={isFocused ? '#5e47de' : 'white'} />
                </TouchableOpacity>
            }
        </View>
    );
}
export default Input;
const styles = StyleSheet.create({
    inputStyleView: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    inputStyle: {
        width: '100%',
        height: 40,
        borderRadius: 15,
        backgroundColor: '#131515',
        paddingHorizontal: 35,
        paddingVertical: 10,
        color: 'white',
        borderWidth: 1,
        borderColor: '#131515',
    },
    inputStyleFocused: {
        borderColor: '#5e47de',
        borderWidth: 1,
    },
    iconContainerLeft: {
        position: 'absolute',
        left: 17
    },
    iconContainerRight: {
        position: 'absolute',
        right: 17
    },
});