import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';

const BackBtn = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.back}>
            <Ionicons name='chevron-back-circle' size={30} color={COLORS.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    back: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: SIZES.large - 8
    }
})

export default BackBtn;
