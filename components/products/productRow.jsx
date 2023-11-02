import React from 'react';
import { View, FlatList } from 'react-native';
import { SIZES } from '../../constants';
import ProductCardView from './productCardView';
import styles from './productRow.style';

const ProductRow = () => {
    const datas = [1, 2, 3, 4];
    return (
        <View style={styles.container}>
            <FlatList
                data={datas}
                renderItem={({ item }) => <ProductCardView />}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.small - 26 }}
            />
        </View>
    );
}

export default ProductRow;
