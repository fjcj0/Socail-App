import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import HeaderSender from '@/components/HeaderSender';
import InputMessage from '@/components/InputMessage';
interface Message {
    id: number;
    text: string;
    time: string;
    isMe: boolean;
}
const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hey there! How's it going?",
            time: "10:30 AM",
            isMe: false,
        },
        {
            id: 2,
            text: "I'm good! Just working on some code. What about you?",
            time: "10:31 AM",
            isMe: true,
        },
        {
            id: 3,
            text: "Same here! Working on that React Native project.",
            time: "10:32 AM",
            isMe: false,
        },
        {
            id: 4,
            text: "Nice! Let me know if you need any help with it.",
            time: "10:33 AM",
            isMe: true,
        },
        {
            id: 5,
            text: "Thanks! I'll definitely reach out if I get stuck.",
            time: "10:34 AM",
            isMe: false,
        },
        {
            id: 6,
            text: "Perfect! How's the progress so far?",
            time: "10:35 AM",
            isMe: true,
        },
        {
            id: 7,
            text: "It's going well. Just finished the UI components.",
            time: "10:36 AM",
            isMe: false,
        },
        {
            id: 8,
            text: "That's great to hear! UI is always the fun part.",
            time: "10:37 AM",
            isMe: true,
        },
        {
            id: 9,
            text: "Yeah, I enjoy designing the interface.",
            time: "10:38 AM",
            isMe: false,
        },
        {
            id: 10,
            text: "What's next on your todo list?",
            time: "10:39 AM",
            isMe: true,
        },
        {
            id: 11,
            text: "I need to work on the backend integration.",
            time: "10:40 AM",
            isMe: false,
        },
        {
            id: 12,
            text: "That can be tricky. Need any help with APIs?",
            time: "10:41 AM",
            isMe: true,
        },
        {
            id: 13,
            text: "Maybe later. I want to try it myself first.",
            time: "10:42 AM",
            isMe: false,
        },
        {
            id: 14,
            text: "Sounds good! You'll learn a lot that way.",
            time: "10:43 AM",
            isMe: true,
        },
        {
            id: 15,
            text: "Exactly! Hands-on experience is the best teacher.",
            time: "10:44 AM",
            isMe: false,
        },
        {
            id: 16,
            text: "Let me know when you want to pair program.",
            time: "10:45 AM",
            isMe: true,
        },
        {
            id: 17,
            text: "Will do! Maybe tomorrow afternoon?",
            time: "10:46 AM",
            isMe: false,
        },
        {
            id: 18,
            text: "Tomorrow works perfectly for me!",
            time: "10:47 AM",
            isMe: true,
        },
        {
            id: 19,
            text: "Great! Let's schedule for 2 PM then.",
            time: "10:48 AM",
            isMe: false,
        },
        {
            id: 20,
            text: "Perfect! I'll set up the meeting room.",
            time: "10:49 AM",
            isMe: true,
        },
        {
            id: 21,
            text: "Thanks! Looking forward to it.",
            time: "10:50 AM",
            isMe: false,
        },
        {
            id: 22,
            text: "Me too! It'll be productive.",
            time: "10:51 AM",
            isMe: true,
        },
        {
            id: 23,
            text: "Definitely. We can tackle the authentication.",
            time: "10:52 AM",
            isMe: false,
        },
        {
            id: 24,
            text: "Good plan. I have some ideas for that.",
            time: "10:53 AM",
            isMe: true,
        },
        {
            id: 25,
            text: "Awesome! See you tomorrow then.",
            time: "10:54 AM",
            isMe: false,
        },
        {
            id: 26,
            text: "See you! Have a great rest of your day.",
            time: "10:55 AM",
            isMe: true,
        },
        {
            id: 27,
            text: "You too! Talk to you tomorrow.",
            time: "10:56 AM",
            isMe: false,
        },
        {
            id: 28,
            text: "Bye for now! 👋",
            time: "10:57 AM",
            isMe: true,
        },
        {
            id: 29,
            text: "Goodbye! 👋",
            time: "10:58 AM",
            isMe: false,
        },
        {
            id: 30,
            text: "This has been a great conversation!",
            time: "10:59 AM",
            isMe: true,
        }
    ]);

    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const handleSendMessage = (newMessage: string) => {
        if (newMessage.trim()) {
            const newMsg: Message = {
                id: messages.length + 1,
                text: newMessage,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isMe: true,
            };
            setMessages(prev => [...prev, newMsg]);
        }
    };
    return (
        <View style={styles.chatContainer}>
            <HeaderSender />
            <ScrollView
                ref={scrollViewRef}
                style={styles.messagesContainer}
                contentContainerStyle={styles.messagesContent}
                showsVerticalScrollIndicator={false}
            >
                {messages.map((message) => (
                    <View
                        key={message.id}
                        style={[
                            styles.messageContainer,
                            message.isMe ? styles.myMessageContainer : styles.theirMessageContainer
                        ]}
                    >
                        {!message.isMe && (
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/djovbiyia/image/upload/v1759851531/users/zdttgtte038xkndmqkzz.webp' }}
                                style={styles.profileImage}
                            />
                        )}
                        <View
                            style={[
                                styles.messageBubble,
                                message.isMe ? styles.myMessage : styles.theirMessage
                            ]}
                        >
                            <Text style={[
                                styles.messageText,
                                message.isMe ? styles.myMessageText : styles.theirMessageText
                            ]}>
                                {message.text}
                            </Text>
                            <Text style={[
                                styles.timeText,
                                message.isMe ? styles.myTimeText : styles.theirTimeText
                            ]}>
                                {message.time}
                            </Text>
                        </View>
                        {message.isMe && (
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/djovbiyia/image/upload/v1759851531/users/zdttgtte038xkndmqkzz.webp' }}
                                style={styles.profileImage}
                            />
                        )}
                    </View>
                ))}
            </ScrollView>
            <InputMessage onSendMessage={handleSendMessage} />
        </View>
    );
}
export default Chat;
const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    messagesContainer: {
        flex: 1,
        marginBottom: 80,
        marginTop: 70,
    },
    messagesContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'flex-end',
    },
    myMessageContainer: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    theirMessageContainer: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    messageBubble: {
        maxWidth: '50%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 18,
        marginHorizontal: 8,
    },
    myMessage: {
        backgroundColor: '#5e47de',
        borderBottomRightRadius: 5,
    },
    theirMessage: {
        backgroundColor: '#262626',
        borderBottomLeftRadius: 5,
    },
    profileImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginBottom: 5,
    },
    messageText: {
        fontSize: 16,
        lineHeight: 20,
    },
    myMessageText: {
        color: 'white',
    },
    theirMessageText: {
        color: 'white',
    },
    timeText: {
        fontSize: 10,
        marginTop: 4,
        opacity: 0.7,
    },
    myTimeText: {
        color: 'white',
        textAlign: 'right',
    },
    theirTimeText: {
        color: 'white',
        textAlign: 'left',
    },
});