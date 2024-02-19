import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const productItemStyles = StyleSheet.create({
    text: {
      fontSize: 18,
      color: colors.textColor,
      textAlign:'center'
    },
    image:{
      width:130,
      height:130,
    },
    cardStyles:{
      flex:0,
      width:'100%',
      height:250,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: colors.secondaryColor,
      marginVertical:20,
      borderRadius:10
    }
  });