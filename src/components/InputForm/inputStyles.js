import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const inputStyles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      },
      subtitle: {
        width: "90%",
        fontSize: 18,
        fontFamily: "InterRegular",
        color: colors.textColor
      },
      error: {
        fontSize: 16,
        color: "red",
        fontFamily: "InterRegular",
        fontStyle: "italic",
      },
      input: {
        width: "90%",
        borderWidth: 0,
        borderWidth: 1,
        borderColor: colors.bgColor,
        borderRadius:5,
        padding: 8,
        fontFamily: "InterRegular",
        fontSize: 16,
        color:colors.textColor
      },
});