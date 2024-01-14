import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, TextInput, Pressable} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
     <Image style={styles.logo}
    source={require('../assets/logotelkom.png')}
    />
    <Text style={styles.title}>Halo Kamu!</Text>
    <Text style={styles.paragraph}> Login untuk melihat pilihan tempat PKL mu!
    </Text>
    <TextInput
        style={styles.input}
        placeholder= 'Username'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        placeholder= 'Password'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <Text style={styles.forgetpass} onPress={() => {navigation.navigate('Lupapass')}}> lupa password?</Text>
      
      <Pressable style={styles.btnlogin}
      onPress={() => {navigation.navigate('TempatPKL')}}>
      <Text style={styles.logintext}>LOGIN</Text>
      </Pressable>
      <Text style={styles.atau}>Belum punya akun? <Text style={{color: 'blue'}} onPress={() => {navigation.navigate('Register')}}>Register</Text></Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: 'white'
    },
  logo: {
    height: 87,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: -5
  },
  title: {
    marginTop: 16,
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  paragraph: {
   color: 'black',
   fontSize: 13,
   textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  forgetpass: {
    fontSize: 10,
    textAlign: 'end',
    marginBottom: 30,
    color: 'blue'
  },
  atau: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  btnlogin: {
    height:35,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#ED1E28'
  },

  logintext: {
    fontWeight: 600,
    color: '#fff'
  },
  
});