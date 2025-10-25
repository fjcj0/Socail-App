import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Input = ({ value, setValue }: { value: any, setValue: any }) => {
    const handleClear = () => {
        setValue('');
    };
    return (
        <View style={styles.inputStyleView}>
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                placeholderTextColor={'#333'}
                value={value}
                onChangeText={setValue}
            />
            <View style={styles.iconContainerLeft}>
                <Ionicons name='search' size={20} color={'white'} />
            </View>
            {value &&
                <TouchableOpacity
                    style={styles.iconContainerRight}
                    onPress={handleClear}
                >
                    <Ionicons name='close-circle' size={20} color={'white'} />
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