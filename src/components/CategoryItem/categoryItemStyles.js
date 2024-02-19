import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const categoryItemstyles = StyleSheet.create({
    text: {
      fontSize: 25,
      color: colors.textColor,
    },
    categoryButton:{
      width:40,
      height:40,
      backgroundColor: colors.secondaryColor,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.8
    }
  });