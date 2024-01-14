import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './components/login';
import RegisterScreen from './components/register';
import Tempatpkl from './components/tempatPKL';
import Lupapass from './components/lupa_pass';
import AddData from './components/AddData';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ED1E28',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name='Login' component={LoginScreen} 
        options={{ title:  'Halaman Login' }}/>
        <Stack.Screen name='Register' component={RegisterScreen} 
        options={{ title: 'Halaman Register' }}/>
        <Stack.Screen name='TempatPKL' component={Tempatpkl} 
        options={{ title:  'Halaman Tempat PKL',
        headerStyle: {
            backgroundColor: '#ED1E28',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
          }}/>
          <Stack.Screen name='Lupapass' component={Lupapass} 
        options={{ title:  'Halaman Lupa password',
        headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
        }}/>
        <Stack.Screen name='AddData' component={AddData} 
        options={{ title:  'Halaman Tambah Data' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;