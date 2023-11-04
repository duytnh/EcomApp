import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    cover: {
        height: SIZES.height / 3,
        width: SIZES.width - 60,
        resizeMode: 'contain',
        marginBottom: SIZES.xxLarge
    },
    title: {
        fontFamily: "Regular",
        fontSize: SIZES.medium,
        color: COLORS.primary,
        alignItems: 'center',
        marginBottom: SIZES.xLarge
    },
    wrapper: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'Regular',
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'right'
    },
    inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    }),
    iconStyle: {
        marginRight: 10
    },
    errorMessage: {
        color: COLORS.red,
        fontFamily: 'Regular',
        fontSize: SIZES.xSmall,
        marginTop: 5,
        marginLeft: 5
    },
    txtInput: {
        flex: 1,
        fontFamily: 'Regular',
        fontSize: 13
    },
    noAccount: {
        fontFamily: 'Regular',
        fontSize: SIZES.medium - 2,
        textAlign: 'center',
        color: COLORS.gray
    },
    register: {
        color: COLORS.primary
    }
})

export default styles