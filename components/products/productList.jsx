import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './productList.style';
import useFetch from '../../hook/useFetch';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './productCardView';

const ProductList = () => {
    const { data, isLoading, error } = useFetch();
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
            </View>
        );
    }
    return (
        <View style={styles.wrapperContainer}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => <ProductCardView item={item} />}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}

export default ProductList;
