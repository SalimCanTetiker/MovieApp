import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
      },
    logo: {
        height: 350,
        width: 350,
        marginHorizontal: 20,
        resizeMode: 'contain',
    },
    register_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
      },
      register_title: {
        fontSize: 15,
      },
      register_button: {
        fontSize: 17,
        fontWeight: 'bold',
      },
})