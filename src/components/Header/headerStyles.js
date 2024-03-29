import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const headerStyles = StyleSheet.create({
    container: {
      height: 40,
      width: "100%",
      backgroundColor: colors.secondaryColor,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
    },
  });