import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:5
    },
    card:{
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
    image: {
        width: 240,
        height: 240,
        borderRadius: 10,
        objectFit:'contain'
    },
    textContainer:{
        width:'100%',
        height:'50%',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: colors.secondaryColor,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        paddingTop:40,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7

    },
    title:{
        fontFamily: 'InterBold',
        fontSize: 25,
        textAlign:'center',
        color: colors.textColor
    },
    descContainer:{
        maxHeight: 80,
    },
    desc:{
        fontFamily:'InterRegular',
        fontSize:15,
        textAlign:'center',
        color: colors.textColor
    },
    price:{
        fontFamily:'InterBold',
        fontSize:15,
        textAlign:'center',
        color: colors.textColor,
        marginVertical:20
    },
    button:{
        width:150,
        height:40,
        backgroundColor:colors.activeColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    buyNow:{
        fontFamily:'InterBold',
        fontSize:15,
        color: colors.textColor,
    },
    imageGalleryContainer:{
        margin:10,
    }
})