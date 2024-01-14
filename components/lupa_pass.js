import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, TextInput, Pressable} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function lupapass({navigation}) {
  return (
    <View style={styles.container}>
     <Image style={styles.logo}
    source={require('../assets/LockVector.jpg')}
    />
    <Text style={styles.title}>Masukkan Email</Text>
    <Text style={styles.paragraph}>Tulis email untuk memulihkan password!
    </Text>
    <TextInput
        style={styles.input}
        placeholder= 'Email'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <Pressable style={styles.btnlogin}>
      <Text style={styles.logintext}>SEND</Text>
      </Pressable>
      <Text style={styles.atau}>Ingat password? <Text style={{color: 'blue'}} onPress={() => {navigation.navigate('Login')}}>Login di sini</Text></Text>
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
  atau: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  btnlogin: {
    height:35,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 16,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'black'
  },

  logintext: {
    fontWeight: 600,
    color: '#fff'
  },
});