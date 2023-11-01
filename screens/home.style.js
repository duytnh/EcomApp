import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: SIZES.large,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
        fontFamily: 'Regular',
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        left: 12,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999
    },
    cartNumber: {
        fontFamily: 'Regular',
        fontSize: 10,
        fontWeight: 600,
        color: COLORS.lightWhite
    }
})

export default styles