import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
    loadingConatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    wrapperContainer: {
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: SIZES.xxLarge + 30
    },
    container: {
        alignItems: 'center',
        gap: SIZES.small - 6
    },
    separator: {
        height: 16
    }
});

export default styles
