import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants';

const Button = ({ title, onPress, isValid, loader }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.primary)}>
            {loader === false ? (<Text style={styles.btnTxt}>{title}</Text>) : (<ActivityIndicator />)}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: 'Bold',
        color: COLORS.white,
        fontSize: 18
    },
    btnStyle: (backgroundColor) => ({
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    })
})

export default Button;
