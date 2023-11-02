import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './ProductDetails.style';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {

    const [count, setCount] = useState(1)

    const increament = () => {
        count < 10 ? setCount(count + 1) : Alert.alert("Warning!", "Maximum is ten product")
    }
    const decreament = () => {
        count > 1 ? setCount(count - 1) : Alert.alert("Warning!", "Minimum is one product")
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name='heart' size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: "https://i.ibb.co/WzVmZCx/fn1.jpg" }} style={styles.image} />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>ProductName</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$99.9</Text>
                    </View>
                </View>
                <View style={styles.rattingRow}>
                    <View style={styles.ratting}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Ionicons key={index} name='star' size={24} color="gold" />
                        ))}
                        <Text style={styles.rattingText}>(4.9)</Text>
                    </View>
                    <View style={styles.ratting}>
                        <TouchableOpacity onPress={() => decreament()}>
                            <SimpleLineIcons name='minus' size={18} />
                        </TouchableOpacity>
                        <Text style={styles.rattingText}> {count} </Text>
                        <TouchableOpacity onPress={() => increament()}>
                            <SimpleLineIcons name='plus' size={18} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
                <View style={{ marginBottom: SIZES.small }}>
                    <View style={styles.location}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name='location-outline' size={20} />
                            <Text> Binh Thanh - HCM </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                            <Text> Free Delivery </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.addCart}>
                        <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ProductDetails;
