import * as React from 'react';
import { StyleSheet } from 'react-native';

// --- Main screens ---

// --- Onboarding screens ---

// --- App ---

const App = () => (
  null
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function SignInScreen() {
  const navigation = useNavigation();
  return (
    <Button
      title="Go to Sign Up"
      onPress={() => navigation.navigate('SignUp')}
    />
  );
}

function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <Button
      title="Go to Main"
      onPress={() => navigation.navigate('Main')}
    />
  );
}

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

