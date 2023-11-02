import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { Welcome, Carousel, Headings } from '../components';
import ProductRow from '../components/products/productRow';


const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />
                    <Text style={styles.location}>Binh Thanh - Ho Chi Minh</Text>
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
