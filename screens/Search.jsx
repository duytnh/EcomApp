import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './search.style';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => { }}
                        placeholder='Enter input search...'
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Feather name='search' size={24} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default Search;
