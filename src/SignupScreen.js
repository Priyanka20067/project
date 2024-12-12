import{BackHandler, stylesheet,text,TextInput,view} from 'react-native'
import react from'react'
import frontawesome from 'react-native-vector-icons/frontawesome'
import frontawesome from "react-native-vector-icons/fontisto"
import { useNavigation } from '@react-navigation/native'
const SignupScreen = () =>{
    const navigation = useNavigation()



    const handleregister= () =>{
      navigation.navigate("Signin")

    }
    return(
    <View style={styles.container}>
        <View style={styles.topImagecontainer}>
            <Image source={require('../assets/image/Niramaya.png')} 
            style={styles.topimage}
            />
        </View>
        <View style={styles.NIRAMAYAcontainer}>
            <Text style={styles.NIRAMAYA}>NIRAMAYA</Text>
        </View>
        <Text style={styles.signIntext}> create a account </Text>
        <View styles={styles.inputcontainer}>
            <Frontawesome 
            name={"user"}
            size={30} 
            color={"black"}
            style={styles.inputcontainer}/>
            <TextInput style={styles.TextInput} placeholder="username"/>
        </View>
        <View style={styles.inputcontainer}> 
           <Text style={styles.forgotpassword}>forgot your password</Text>
        </View>
        <View style={styles.inputcontainer}>
            <Frontisto
            name={"lock"}
            size={24}
            color={"white"}
            style={styles.inputicon}/>
            <TextInput style={styles.TextInput}
            placeholder="password"/>
            securetextentry
        </View> 
   
        <View style ={style.signinbuttoncontainer}>
            <Text style={signin} sign in ></Text>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                Sign in with Facebook
                </Text>
            </LinearGradient>
            <Touchableopacity on press={handleregister}>
                <Text style={styles.footertext}>
                or create account using social media
                </Text>
            </Touchableopacity>
        <View style={styles.inputcontainer}>
                <Fontisto
                name={"Mail"}
                size={24}
                color={"white"}
                style={styles.inputicon}
                />
            <Text style={styles.forgotpassword}>"E-mail"</Text>
            </View>
        <View style={styles.inputcontainer}>
            <Fontisto
                name={"mobile-alt"}
                size={24}
                color={"white"}
                style={styles.inputicon}
                />
            </View>
            <View>
                <Text style={styles.forgotpassword}>mobile number</Text>
                <linearGradient
                color={["pink","purpel"]}
                style={styles.linearGradient}>
                </linearGradient>
                <Antdesign name={"arrowright"} size={24} color={"white"}/>
            </View>
            <View style= {styles.footercontainer}>
        
                <Touchableopacity on press={handleregister}>
                    <Text style={styles.footertext}>
                    or create account using social media
                    </Text>
                </Touchableopacity>

            </View>

        </View>
    </View>

)};
const styles = stylesheet.create({
    container:{
        backgroundcolor:'white',
        flex:1,
    },
    topImagecontainer:{
        height:50,
    },
    topimage:{
        width:'100%',
      height:150,  
    },
    NIRAMAYAcontainer:{
        borderwidth:1,
    },
    NIRAMAYAtext:{
    textalign:'center',
    frontsize:70,
    frontweight:'700',
    color:'black',
   },
   createAccountText:{
    textalign:'center',
    frontsize: 40,
    color:'black',
    frontweight:'400',

   },
   inputcontainer:{
    backgroundcolor:'white',
    flexdirection:'row',
    borderradius:20,
    marginhorizontal:40,
    elevation:10,
    marginvertical:20,
    alignterms:'center',
    height:50,
        marginleft:12,
   },
    inputicon:{
        marginleft:15,
        marginright:5,
    },
    TextInput:{
        flex:1,

    },
    forgotpasswordtext:{
        color:'white',
        textalign:'right',
        width:'80%',
        frontsize:20,
    },
    signinbuttoncontainer:{
    flexdirection:'row',
    margintop:120,
    width:'90%',
    justifycontent:'flex-end',
    },
    signin:{
        color:'black',
        frontsize:25,
        frontweight:'bold',
    },
    linearGradient : {
        height:34,
        width:56,
        borderradius:17,
        alignterms:'center',
        justifycontent:'center',
        marginhorizontal:10,
    },
    footertext : {
        color:'black',
        textalign:'center',
        frontsize:16,
    },
    leftvectorcontainer:{
        position:'absolute',
        bottom:0,
        left:0,
    },
    leftvectorimage:{
        height:350,
        width:0,
    },


});
export default SignupScreen;
 