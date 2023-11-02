import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginHorizontal: SIZES.small,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: SIZES.xLarge - 2,
        fontFamily: "SemiBold"
    }
});

export default styles