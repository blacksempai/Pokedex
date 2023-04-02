import { StatusBar } from 'expo-status-bar';
import { MainScreen } from './components/MainScreen/MainScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Pokemon } from './components/Pokemon/Pokemon';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    Pokemon: require('./assets/fonts/Pokemon.ttf')
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" 
        component={MainScreen} 
        options={{title: 'Pokedex', headerStyle: styles.header, headerTitleStyle: styles.text}}/>

        <Stack.Screen name="Pokemon" component={Pokemon}/>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: '#FF0032',
      paddingTop: 40,
      height: 100,
      alignItems: 'flex-start'
  },
  text: {
      fontSize: 35,
      paddingLeft: 20,
      paddingBottom: 5,
      color: '#fff',
      fontFamily: 'Pokemon'
  }
});
