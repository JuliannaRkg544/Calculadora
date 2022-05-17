import { StyleSheet } from "react-native"


export default StyleSheet.create({
    container: {
     display: "flex",
      backgroundColor: '#fff',
      height: "auto",
      flex: 1,
      justifyContent: "space-around"
    },
    result:{
      alignItems: 'end',
      justifyContent: 'end',
      minHeight: 200,
      backgroundColor: "#ddd",
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      padding: 10
    },

    textButton:{
      fontSize: 20
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 80, 
      minHeight: 80,
      borderWidth: 1,
      borderColor: "#c4c4c4",
      borderRadius: 50,
      margin: 5,
      backgroundColor: "#ddd"
      
    }
    
  })