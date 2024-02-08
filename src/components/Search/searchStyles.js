import { StyleSheet } from "react-native";


export const searchStyles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      paddingTop: 10,
    },
    input: {
      borderRadius: 8,
      padding: 10,
      borderWidth: 1,
      width: "80%",
      fontSize: 20,
    },
  });