import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const cartItemStyles = StyleSheet.create({
    container: {
      height: 'auto',
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: 'row',
      backgroundColor: colors.bgColor
    },
    cardText:{
        width: 'fill-content',
        height: '100%',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    text: {
      textAlign: "center",
      color: 'black',
      fontSize: 16,
    },
    cardImage:{
        width: 'fit-content'
    },
    cartImage:{
        width: 80, 
        height:80
    }
})