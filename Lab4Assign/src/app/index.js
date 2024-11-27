import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button, Checkbox } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { Link, useRouter } from 'expo-router';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={[loginStyle.container, { flex: 1 }]}>
        <View style={{...loginStyle.section, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/logo4.png')} style={loginStyle.logo} />
            <Text style={loginStyle.title}>Login to know me, my love.</Text>
        </View>
        <View style={{...loginStyle.section}}>
           <TextInput
                mode="outlined" 
                outlineColor="#BDBDBD"
                activeOutlineColor="#FAB12F"
                textColor="#333333"
                placeholderTextColor="#888888"
                value={email}
                onChangeText={text => setEmail(text)}
                label={'Username'}
                placeholder='Username'
                style={loginStyle.textInput}
           />
           <TextInput
                mode="outlined" 
                outlineColor="#BDBDBD"
                activeOutlineColor="#FAB12F"
                textColor="#333333"
                placeholderTextColor="#888888"
                value={password}
                onChangeText={text => setPassword(text)}
                label={'Password'}
                placeholder='Password'
                style={loginStyle.textInput}
                secureTextEntry={!isShowPassword}
                right={<TextInput.Icon onPress={() => setIsShowPassword(!isShowPassword)} icon={isShowPassword ? "eye": "eye-off"} />}
           />
           <View style={loginStyle.row}>
                <Checkbox uncheckedColor="#FAB12F" color="#FAB12F" />
                <Text style={loginStyle.checkboxLabel}>Remember me</Text>
           </View>
        </View>         
        <View style={{...loginStyle.section}}>
            <View style={{ marginLeft: 40, alignContent: "center" }}>
                <MyButton
                    text="Login"
                    mode="contained"
                    buttonColor="#FA812F"
                    textColor="#FFFFFF"
                    style={[loginStyle.button]}
                    action={() => router.replace('dashboard')}
                />
            </View>

            <View style={{ marginLeft: 40, alignContent: "center" }}>
                <MyButton
                    text="Register"
                    mode="outlined"
                    textColor="#000000"
                    style={[
                    loginStyle.button,
                    { borderWidth: 2, borderColor: '#FA812F' },
                    ]}
                    action={() => router.push('register')}
                />
            </View>
            

            <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'center', alignItems:'center', width: '100%'}}>
                <Button 
                    onPress={() => router.push('recover')} 
                    mode='text'
                    textColor="#FA812F" 
                    style={{ width: '100%'}}>
                        Forgot Password?
                </Button>
            </View>            
        </View>
    </SafeAreaView>
  )
}

export default Login


const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF3E2',
        padding: 20,
    },
    section: {
        flex:1,
        width: '100%',
        padding: 20,
        marginTop: 30, 
    },
    logo:{
        width: 260,
        height: 120,
        marginTop: 45,
    },
    textInput:{
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FAB12F',
        marginTop: 15,
    },
    button: {
        width: '80%',
        marginTop: 10,
      },
    checkboxLabel: {
        marginLeft: 8,
        color: '#333333',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
})