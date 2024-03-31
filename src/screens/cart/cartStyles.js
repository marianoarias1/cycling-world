import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const cartStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: "100%",
        backgroundColor: colors.secondaryColor,
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerProducts:{
        flex:0,
        height: '100%',
        width: "100%",
        backgroundColor: colors.secondaryColor,
        justifyContent: "space-between",
        alignItems: "center",
    },
    notProducts:{
        textAlign: "center",
        color:  colors.textColor,
        fontSize: 20,
      }
});