import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, TextInput, Pressable} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function AddData({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Silahkan Ajukan Tempat PKL Mu!</Text>
    <TextInput
        style={styles.input}
        placeholder= 'Nama Perusahaan'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        placeholder= 'Lokasi'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        placeholder= 'Koordinator'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        placeholder= 'Sistem Kerja'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        placeholder= 'Jurusan'
        placeholderTextColor= 'grey'
        // onChangeText={onChangeText}
      />
      <Pressable style={styles.btndaftar}>
      <Text style={styles.daftartext}>TAMBAH</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: 'white'
    },
  title: {
    marginTop: 16,
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    height: 40,
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  btndaftar: {
    height:35,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 16,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#ED1E28'
  },
  daftartext: {
    fontWeight: 600,
    color: '#fff'
  }
  
});