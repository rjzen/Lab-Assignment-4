import React from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={regStyle.container}>
          <View style={{ ...regStyle.section, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/logo4.png')} style={regStyle.logo} />
          </View>
          <View style={{ ...regStyle.section }}>
            <TextInput
              label="Full name"
              placeholder="Full name"
              mode="outlined"
              outlineColor="#BDBDBD"
              activeOutlineColor="#FAB12F"
              textColor="#333333"
              placeholderTextColor="#888888"
              style={regStyle.textInput}
            />
            <TextInput
              label="Email"
              placeholder="Email"
              mode="outlined"
              outlineColor="#BDBDBD"
              activeOutlineColor="#FAB12F"
              textColor="#333333"
              placeholderTextColor="#888888"
              style={regStyle.textInput}
            />
            <TextInput
              label="Password"
              placeholder="Password"
              mode="outlined"
              secureTextEntry
              outlineColor="#B3A0E5"
              activeOutlineColor="#FA812F"
              textColor="#333333"
              placeholderTextColor="#888888"
              style={regStyle.textInput}
            />
          </View>
          <View style={{ ...regStyle.section, marginTop: 40 }}>
            <View style={{ margin: 5 }}>
              <MyButton
                text="Register"
                action={() => console.log('register')}
                mode="contained"
                style={regStyle.button}
                buttonColor="#FA812F"
              />
            </View>
            <View style={{ margin: 5 }}>
              <MyButton
                text="Login"
                action={() => router.back()}
                textColor="#000000"
                mode="outlined"
                style={[
                  regStyle.button,
                  { borderWidth: 2, borderColor: '#FA812F' }, // Custom border for outlined button
                ]}
              />
            </View>
            <Text style={regStyle.linkText} onPress={() => router.back()}>
              Already have an account? Login
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 260,
    height: 120,
    marginTop: 45,
  },
  textInput: {
    marginBottom: 10,
  },
  button: {

  },
  linkText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#FAB12F',
  },
});
