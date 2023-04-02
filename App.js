import { StatusBar } from 'expo-status-bar';
import { MainScreen } from './components/MainScreen/MainScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
