import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './productCartView.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://i.ibb.co/WzVmZCx/fn1.jpg" }} style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Suplier</Text>
                    <Text style={styles.price} numberOfLines={1}>$99.6</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default ProductCardView;
