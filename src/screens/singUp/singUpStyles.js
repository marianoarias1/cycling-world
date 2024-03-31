import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const singUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bgColor
    },
    cardContainer: {
        width: "90%",
        height: "70%",
        backgroundColor: colors.secondaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

    },
    textStyles: {
        fontFamily: "InterRegular",
        color: colors.textColor,
        fontSize: 20
    }
});