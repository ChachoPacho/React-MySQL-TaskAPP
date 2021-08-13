import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={ HomeScreen } 
          options={({ navigation }) => ({
            title: "Inicio",
            headerRight: () => (
              <TouchableOpacity style={ styles.buttonCreate } onPress={() => { navigation.navigate('TaskScreen') }}>
                <Text style={{ color: '#ffffff', fontSize: 15 }} >Añadir</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen 
          name="TaskScreen"
          component={ TaskFormScreen } 
          options={{
            title: "Tareas"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  buttonCreate: { 
    backgroundColor: '#10ac84', 
    marginRight: 5, 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    borderRadius: 5 
  }
})

export default App;