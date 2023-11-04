import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 172,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer: {
        flex: 1,
        width: 160,
        marginLeft: SIZES.small / 2,
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small,
        overflow: "hidden"
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: SIZES.small
    },
    details: {
        padding: SIZES.small,
    },
    title: {
        fontFamily: 'Bold',
        fontSize: SIZES.large - 2,
        marginBottom: 2
    },
    supplier: {
        fontFamily: "Regular",
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontSize: SIZES.medium,
        fontFamily: "Bold"
    },
    addBtn: {
        position: "absolute",
        bottom: SIZES.small,
        right: SIZES.small
    }
});

export default styles