import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import BackButton from '@/components/BackButton';
import Input from '@/components/Input';
import { people } from '@/constants/data';
import Follower from '@/components/Followers';
const Messages = () => {
    const [person, setPerson] = useState('');
    return (
        <View>
            <BackButton />
            <ScrollView
                showsVerticalScrollIndicator={false} contentContainerStyle={{
                    rowGap: 15

                }}>
                <Input value={person} setValue={setPerson} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10, }}>
                    Messages
                </Text>
                {people.map((p, index) => (
                    <Follower
                        key={index}
                        name={p.name}
                        image={p.picture}
                        joined_in={p.joined_in} />
                ))}
            </ScrollView>
        </View>
    );
}
export default Messages;