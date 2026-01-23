/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar,useColorScheme } from 'react-native';
import Login from './Login';
import Home from './Home';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  // const safeAreaInsets = useSafeAreaInsets();
  const Stack = createNativeStackNavigator();
  return (
      <Login />
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Home" component={Home} />
      //   </Stack.Navigator>
      // </NavigationContainer>
  );
}

export default App;
