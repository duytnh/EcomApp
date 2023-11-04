import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './productCardView';
import styles from './productRow.style';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
    const { data, isLoading, error } = useFetch()
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong!</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ProductCardView item={item} />}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.small - 6 }}
                />
            )}
        </View>
    );
}

export default ProductRow;
