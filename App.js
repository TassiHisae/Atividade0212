import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubjectList from './Pages/Subject/SubjectList';
import SubjectDetails from './Pages/Subject/SubjectDetails';
import Home from './Pages/Home/Home';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
        <Stack.Screen name="Matérias" component={SubjectList} options={styles} />
        <Stack.Screen name="Detalhes" component={SubjectDetails} options={({ route }) => {
          const subjectName = `${route.params.subject.name}`;
          return ({
            title: subjectName,
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerBackTitleStyle: styles.headerBackTitleStyle
          });
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  headerStyle: {
    backgroundColor: "purple",
  },

  headerTitleStyle: {
    fontSize: 20,
    color: '#ffff',
  },
  headerBackTitleStyle: {
    color: '#ffff'
  }
}
