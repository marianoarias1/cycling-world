import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const headerStyles = StyleSheet.create({
    container: {
      height: 100,
      width: "100%",
      backgroundColor: colors.secondaryColor,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
    },
  });