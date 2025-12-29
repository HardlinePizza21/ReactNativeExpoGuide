import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen(){
    return(
        <>
            <Stack.Screen options={{title:'!Opps, not found'}}/>
            <View style={styles.container}>
                <Link href='/' style={styles.button}>Go back to home</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#25292e',
        justifyContent:'center',
        alignItems:'center',

    },
    button:{
        backgroundColor: '#6495ed',
        color: 'white',
        padding: 10,
        borderRadius: 10,
    }
})