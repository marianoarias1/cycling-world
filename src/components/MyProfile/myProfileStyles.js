import { StyleSheet } from "react-native";
import {colors} from "../../global/colors"

export const myProfileStyles = StyleSheet.create({
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
      width: "80%",
      height: "80%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    image: {
      width: "90%",
      height: "50%",
      borderRadius: 10

    },
    button: {
        backgroundColor: colors.activeColor,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '80%',
        marginVertical: 10,
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
      fontSize: 18,
      color: colors.textColor,
    },
  });