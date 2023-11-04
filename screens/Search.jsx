import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './search.style';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import SearchTitle from '../components/products/searchTitle';
import axios from 'axios';

const Search = () => {
    const [searchKey, setSearchkey] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://192.168.1.18:3000/api/products/search/${searchKey}`)
            if (searchKey.length === 0) {
                setSearchResults([])
            } else {
                setSearchResults(response.data)
            }
        } catch (error) {
            console.log("fail search", error);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchKey}
                        onChangeText={setSearchkey}
                        placeholder='Enter input search...'
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleSearch()}>
                        <Feather name='search' size={24} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {searchResults.length == 0 || searchKey.length == 0 ? (
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/images/Pose23.png')} style={styles.searchImage} />
                </View>
            ) : (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <SearchTitle item={item} />}
                />
            )}
        </SafeAreaView>
    );
}


export default Search;
