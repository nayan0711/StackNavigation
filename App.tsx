import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, StyleSheet, Button, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is a Home Screen</Text>
      
    </SafeAreaView>
  );
}
function SignUp(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is a SignUp Screen</Text>
      
    </SafeAreaView>
  );
}
function LoginScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} ></StatusBar>
      <Text>This is a Login Screen</Text>
      
      <Button title='Go to Home Screen' onPress={() => navigation.navigate('Home' as never)} />
      <Button title='SignUp' onPress={() => navigation.navigate('SignUp' as never)} />
    </SafeAreaView>
  );
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
