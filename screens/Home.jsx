import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { Welcome, Carousel, Headings, ProductRow } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {

    const [userData, setUserData] = useState(null);
    const [userLogin, setUserLogin] = useState(false);

    useEffect(() => {
        checkExistingUser();
    }, [])

    const checkExistingUser = async () => {
        const id = await AsyncStorage.getItem('id');
        const userId = `user${JSON.parse(id)}`;
        try {
            const currentUser = await AsyncStorage.getItem(userId);
            if (currentUser !== null) {
                const parseData = JSON.parse(currentUser);
                setUserData(parseData)
                setUserLogin(true)
            }
        } catch (error) {
            console.log("Error the data: ", error);
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />
                    <Text style={styles.location}>{userData ? userData.location : "Ho Chi Minh - Binh Thanh"}</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>9</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name='shopping-bag' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome />
                <Carousel />
                <Headings />
                <ProductRow />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
