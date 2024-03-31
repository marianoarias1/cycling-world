import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const locationSelectorStyles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
      padding: 10,
      gap: 15,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.secondaryColor,
      borderRadius: 10,
      width: "90%",
      height: "90%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    dataContainer: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        height: "90%",
      },
    noLocationContainer: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    button: {
      width: "80%",
      backgroundColor: colors.activeColor,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    text: {
      fontFamily: "InterRegular",
      fontSize: 16,
      color: "white",
    },
  });