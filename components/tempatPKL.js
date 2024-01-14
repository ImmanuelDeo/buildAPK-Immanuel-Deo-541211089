import { Text, SafeAreaView, StyleSheet, View, Image, Button,Alert, Pressable, ScrollView, Modal} from 'react-native';
import LikeDislikeButton from './Customrate'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
// import AssetExample from './components/AssetExample';

export default function tempatPKL({navigation}) {

  return(
    <ScrollView style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.title}>TEMPAT PKL SMK TELKOM PURWOKERTO</Text>
       <View style={styles.centeredView}>

      <Pressable style={styles.btnadd}
      onPress={() => {navigation.navigate('AddData')}}>
      <Text style={styles.logintext}>Tambah Data</Text>
      </Pressable>


      </View>
      <Text style={styles.title2}>Tempat Yang Sudah Terdaftar</Text>
    
      <View style={styles.bekgronpoto}>
      <Text style={styles.title3}>Jakarta</Text>
        <View style={styles.bekgrondalem}>
          <Text style={styles.subtitle3}>PT.Telkom Indonesia</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
              <Pressable style={styles.btnedit}>
                  <Text style={styles.logintext}>Edit</Text>
              </Pressable>
              <Pressable style={styles.btndel}>
                <Text style={styles.logintext}>Delete</Text>
              </Pressable>
          </View>
        </View>
      </View>


      <View style={styles.bekgronpoto}>
      <Text style={styles.title3}>Bandung</Text>
        <View style={styles.bekgrondalem}>
          <Text style={styles.subtitle3}>Telkom Akses Dago</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
              <Pressable style={styles.btnedit}>
                  <Text style={styles.logintext}>Edit</Text>
              </Pressable>
              <Pressable style={styles.btndel}>
                <Text style={styles.logintext}>Delete</Text>
              </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.bekgronpoto}>
      <Text style={styles.title3}>Semarang</Text>
        <View style={styles.bekgrondalem}>
          <Text style={styles.subtitle3}>Telkom Pahlawan</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
              <Pressable style={styles.btnedit}>
                  <Text style={styles.logintext}>Edit</Text>
              </Pressable>
              <Pressable style={styles.btndel}>
                <Text style={styles.logintext}>Delete</Text>
              </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.bekgronpoto}>
      <Text style={styles.title3}>Purwokerto</Text>
        <View style={styles.bekgrondalem}>
          <Text style={styles.subtitle3}>Telkom Akses Pandjaitan</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
              <Pressable style={styles.btnedit}>
                  <Text style={styles.logintext}>Edit</Text>
              </Pressable>
              <Pressable style={styles.btndel}>
                <Text style={styles.logintext}>Delete</Text>
              </Pressable>
          </View>
        </View>
      </View>

      <View>
      <Text style={styles.line}>______________________________________</Text>
      </View>

      <View>
      <Text style={styles.title4}>Apakah Informasi ini Bermanfaat?</Text>
      </View>
      <LikeDislikeButton />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line:{
    color: 'grey',
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 30,
    fontFamily: 'montserrat'
  },
  title:{
    color: 'black',
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'montserrat',
  
  },
  title2:{
    color: 'black',
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
    marginTop: 20,
    marginBottom: 8,
    fontFamily: 'montserrat'
  },
  title3:{
    color: 'white',
    fontWeight:'bold',
    textAlign: 'auto',
    justifyContent: 'center',
    fontSize: 15,
    marginLeft: 11,
    marginTop: 8,
    fontFamily: 'montserrat'
  },
  title4:{
    color: 'black',
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 30,
    fontFamily: 'montserrat'
  },
  subtitle3: {
    color: '#EEEEEE',
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    marginLeft: 11,
    marginTop: 8,
    marginBottom: 10,
    fontFamily: 'montserrat'
  },

  // paragraph: {
  //   marginBottom: 10,
  //   color: 'white',
  //   fontWeight:'bold',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   fontSize: 11,
  //   fontFamily: 'montserrat'
  // },
  // avatar: {
  //   width: 130,
  //   height: 130,
  //   marginBottom: 10,
  //   borderRadius: 1000,
  // },
  // portoweb1: {
  //   width: 250,
  //   height: 160,
  //   marginTop: 10,
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   borderRadius: 8,
  // },

  bekgronpoto:{
    backgroundColor: '#B6252A',
    height: 160,
    width: 270,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    marginBottom: 30,
  },
  bekgrondalem:{
    paddingRight: 7,
    backgroundColor: '#ED1E28',
    height: 85,
    width: 230,
    marginTop: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    marginBottom: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  logintext: {
    fontWeight: 600,
    color: '#fff'
  },
  btnadd: {
    width: 110,
    height:35,
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#ED1E28'
  },
   btnedit: {
    width: 50,
    height:35,
    flexDirection: 'row',
    marginBottom: 6,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#B6252A'
  },
   btndel: {
    width: 60,
    height:35,
    marginBottom: 6,
    marginRight: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#B6252A'
  },

});
