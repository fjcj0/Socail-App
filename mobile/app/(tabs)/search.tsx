import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/Input';
import { people } from '@/constants/data';
import Person from '@/components/Person';
const SearchScreen = () => {
    const [value, setValue] = useState('');
    return (
        <View style={styles.containerSearch}>
            <View style={styles.containerInput}>
                <Input
                    value={value}
                    setValue={setValue}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.peopleContainer}>
                {people.map((person, index) => (
                    <Person
                        key={index}
                        name={person.name}
                        image={person.picture}
                        joined_in={person.joined_in} />
                ))}
            </ScrollView>
        </View>
    );
}
export default SearchScreen;
const styles = StyleSheet.create({
    containerSearch: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerInput: {
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        paddingVertical: 10,
    },
    peopleContainer: {
        rowGap: 15,
        paddingHorizontal: 10,
        marginVertical: 15,
    }
});