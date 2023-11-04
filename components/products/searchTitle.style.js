import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding: SIZES.small - 6,
        borderRadius: SIZES.small,
        backgroundColor: '#fff',
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite,
        marginHorizontal: SIZES.small
    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignContent: 'center'
    },
    productImg: {
        width: "100%",
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: "SemiBold",
        color: COLORS.primary
    },
    supplier: {
        fontSize: SIZES.small + 2,
        fontFamily: "Regular",
        color: COLORS.gray
    }
});

export default styles