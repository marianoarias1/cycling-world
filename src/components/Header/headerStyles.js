import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const headerStyles = StyleSheet.create({
    container: {
      height: 50,
      width: "100%",
      backgroundColor: colors.secondaryColor,
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
    },
    buttonLogout:{
      width:30,
      height:30,
      backgroundColor:colors.activeColor,
      justifyContent:"center",
      alignItems:'center',
      position: "absolute",
      right: 10,
      top:0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderRadius: 5
    }
  });