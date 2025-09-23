import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View
            style={styles.containerBox}
        >
            <View
                style={styles.backBox}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.textBox}>
                        Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.underBackBox}>
                <Text style={styles.text}>
                    Register Here</Text>
                <Text style={styles.text2}>
                    Create an account so you can explore all of the existing jobs
                </Text>
            </View>

            <View style={styles.loginBox}>
                <View style={styles.imputBox}>
                    <Text style={styles.text3}>
                        Email</Text>
                </View>

                <View style={styles.imputBox}>
                    <Text style={styles.text3}>
                        Password</Text>
                </View>

                <View style={styles.imputBox}>
                    <Text style={styles.text3}>
                        Confirm password</Text>
                </View>

                <View style={styles.forgotBox}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.text4}>
                            Forgot Your Password? </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.accountBox}>
                <TouchableOpacity onPress={() => router.push('./login')}>
                    <Text style={styles.text5}>
                        Already have an account?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.textoButton}>
                        Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.socialBox}>
                <Text style={styles.registerText}>
                    Or continue with</Text>
                <View style= {styles.mediaBox}>
                    <TouchableOpacity style={styles.mediaButton}>
                        <Image
                            source={require("../../assets/images/google.png")}
                            style={styles.media}
                        />
                    </TouchableOpacity>
                                     <TouchableOpacity style={styles.mediaButton}>
                        <Image
                            source={require("../../assets/images/facebook.png")}
                            style={styles.media}
                        />
                    </TouchableOpacity>
                                     <TouchableOpacity style={styles.mediaButton}>
                        <Image
                            source={require("../../assets/images/apple.png")}
                            style={styles.media}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}


//Index dos styles
// Final box = container
// Final button = botão
// Outro = Texto 
const styles = StyleSheet.create({
    containerBox: { //Container da caixa principal
        marginBottom: 10,
        marginHorizontal: 20
    },
    textBox: { //Container Back
        marginHorizontal: 20,
        color: "#1F41BB",
        alignContent: 'flex-start',
        fontSize: 14,
        width: 34,
        height: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
    },

    backBox: {//conteudo da back box
        color: "#1F41BB",
        alignContent: 'flex-start',
        fontSize: 14,
        width: 34,
        height: 17,
        marginTop: 48,
        marginLeft: 8,
    },

    underBackBox: { //Estilização do container underBack
        height: 'auto',
        marginTop: 40,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'bold',
        gap: 20,
    },

    loginBox: {//Container para as boxes de login com user e senha
        justifyContent: 'center',
        width: '100%',
        marginTop: 40,
        gap: 20,
    },

    buttonBox: {//Estilização do Container Button
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imputBox: {//Container de email e senha de login
        paddingBlock: 20,
        borderRadius: 10,
        width: '100%',
        height: 64,
        backgroundColor: '#63636346'
    },

    forgotBox: {
        alignItems: 'flex-end',
        marginTop: 20,
        marginRight: -20,
        marginBottom: 16
    },

    accountBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 21,
    },

    socialBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    mediaButton: {
        backgroundColor: '#ECECEC',
        borderRadius: 10
    },
    
    mediaBox: {
        flexDirection:'row',
        gap: 16,
        borderRadius: 10
    },
    media: {
        backgroundColor: '#ECECEC',
        height:44,
        width:40,
        gap: 10
    },

    textoButton: {//Estilização de texto do botão Sign In
        color: '#FFFFFF',
        fontSize: 20
    },

    signInButton: {//Conteudo Container Button
        backgroundColor: '#1F41BB',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderRadius: 10,
    },

    registerText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14 ,
        fontWeight: 600,
    },

    text: {//Conteudo do container underBack
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "#1F418B",
        fontWeight: 700,
        fontSize: 30,
    },

    text2: {//Conteudo do container underBack
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 21,
    },

    text3: {//Conteudo das boxes de imput
        width: 96,
        height: 24,
        marginLeft: 20,
        fontSize: 10,
        fontWeight: 600
    },

    text4: {
        width: 167,
        height: 21,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 600
    },

    text5: {
        fontWeight: 900
    }

});
//continuar