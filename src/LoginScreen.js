import{BackHandler, stylesheet,Text,TextInput,View,Image} from 'react-native'
import react from'react'
import frontawesome from 'react-native-vector-icons/frontawesome'
import fontisto from "react-native-vector-icons/fontisto"
const LoginScreen = () => {
    return(
   <View style={styles.container}>
        <View style={styles.topImagecontainer}>
            <Image source={require('../assets/image/Niramaya.png')} 
            style={styles.topimage}
            />
        </View>
        <View style={styles.NIRAMAYAcontainer}>
            <Text style={styles.NIRAMAYAtext}>NIRAMAYA</Text>
        </View>
        <View>
            <Text style={styles.signIntext}> sign in to your account </Text>
        </View>
        <View styles={styles.inputcontainer}>
            <Frontawesome name={"user"}
            size={30} 
            color={"black"}
            style={styles.inputcontainer}/>
            <TextInput style={styles.TextInput} placeholder="Email"/>
        </View>
        <View style={styles.inputcontainer}>
           <Text style={styles.forgotPassword}>forgot your password</Text>
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
            <View style ={styles.signinbuttoncontainer}>
                <Text style={signin} sign in ></Text>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>      
                </LinearGradient>
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
    NIRAMAYAtext: {
    textalign:'center',
    fontsize:70,
    fontWeight:700,
    color:'black',
    },
    signIntext : {
      textalign:'center',
      frontsize: 20,
      color:'black',
    
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
    inputicon :{
        marginleft:15,
        marginright:5,
     },
     TextInput : {
        flex:1,
    
    },
    forgotPasswordtext :  {
        color:'white',
        textalign:'right',
        width:'80%',
        frontsize:20,
    },
    
    signin: {
    color:'black',
    frontsize:30,
    frontweight:'bold',
    },


});

export default LoginScreen;