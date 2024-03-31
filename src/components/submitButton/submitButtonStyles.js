import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const submitButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.activeColor,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%',
        marginVertical: 10
    },
    text: {
        color: colors.textColor,
        fontFamily: 'InterRegular',
        fontSize: 20
    },
});