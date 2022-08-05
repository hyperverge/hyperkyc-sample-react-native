import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsPage from './components/ResultsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        {/* The HyperKYC flow is being integrated in the HomePage */}
        <Stack.Screen name="Home" component={HomePage}/>

        {/* This page displays the results recieved from the SDK workflow */}
        <Stack.Screen name="Results" component={ResultsPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});

