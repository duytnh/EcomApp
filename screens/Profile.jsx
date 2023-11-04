import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './profile.style';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
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
            } else {
                navigation.navigate('Login')
            }
        } catch (error) {
            console.log("Error the data: ", error);
        }
    }

    const userLogout = async () => {
        const id = await AsyncStorage.getItem('id');
        const userId = `user${JSON.parse(id)}`;
        try {
            await AsyncStorage.multiRemove([userId, 'id']);
            navigation.replace('Bottom Navigation')
        } catch (error) {
            console.log("Error the lgout: ", error);
        }
    }

    const logout = () => {
        Alert.alert(
            "Logout",
            "Are you sure to Logout?",
            [
                { text: 'Cancel', onPress: () => console.log('cancel logout') },
                { text: 'OK', onPress: () => userLogout() },
            ]
        )
    }

    const clearCache = () => {
        Alert.alert(
            "Logout",
            "Are you want to Clear data on device?",
            [
                { text: 'Cancel', onPress: () => console.log('cancel clear') },
                { text: 'Accept', onPress: () => console.log('accept clear') },
            ]
        )
    }

    const deleteAccount = () => {
        Alert.alert(
            "Delete Account",
            "Are you sure to Delete this Account?",
            [
                { text: 'Cancel', onPress: () => console.log('cancel delete') },
                { text: 'Accept', onPress: () => console.log('accept delete') },
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={{ width: "100%" }}>
                    <Image source={require('../assets/images/space.jpg')} style={styles.cover} />
                </View>
                <View style={styles.profileContainer}>
                    <Image source={require('../assets/images/profile.jpeg')} style={styles.profile} />
                    <Text style={styles.name}>
                        {userLogin === true ? 'text' : "Please login to your account"}
                    </Text>
                    {
                        userLogin === false ? (
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <View style={styles.loginBtn}>
                                    <Text style={styles.menuText}>L O G I N</Text>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.loginBtn}>
                                <Text style={styles.menuText}>ok@gmail.com</Text>
                            </View>
                        )
                    }

                    {
                        userLogin === false ? (
                            <View></View>
                        ) : (
                            <View style={styles.menuWrapper}>
                                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                                    <View style={styles.menuItem(0.2)}>
                                        <MaterialCommunityIcons name='heart-outline' size={24} color={COLORS.primary} />
                                        <Text style={styles.menuText}>Favorites</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                                    <View style={styles.menuItem(0.2)}>
                                        <MaterialCommunityIcons name='truck-delivery-outline' size={24} color={COLORS.primary} />
                                        <Text style={styles.menuText}>Orders</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                    <View style={styles.menuItem(0.2)}>
                                        <SimpleLineIcons name='bag' size={24} color={COLORS.primary} />
                                        <Text style={styles.menuText}>Cart</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => clearCache()}>
                                    <View style={styles.menuItem(0.2)}>
                                        <MaterialCommunityIcons name='cached' size={24} color={COLORS.primary} />
                                        <Text style={styles.menuText}>Clear cache</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteAccount()}>
                                    <View style={styles.menuItem(0.2)}>
                                        <AntDesign name='deleteuser' size={24} color={COLORS.primary} />
                                        <Text style={styles.menuText}>Delete Account</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => logout()}>
                                    <View style={styles.menuItem(0.2)}>
                                        <AntDesign name='logout' size={24} color={COLORS.primary} />
                                        <Text style={styles.menuText}>Logout</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }

                </View>
            </View>
        </View>
    );
}


export default Profile;
