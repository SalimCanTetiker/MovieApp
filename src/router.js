import React, { useEffect, useState } from 'react'
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';

import Login from './pages/Auth/Login/Login';
import Sign from './pages/Auth/Sign/Sign';

import Detail from './pages/Detail/Detail';
import Loading from './components/Loading/Loading';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name='Home' component={HomeStack} options={{tabBarIcon: () => (<Icon name='magnify' size={30}/>)}}/>
    <Tab.Screen name='Search' component={Search} options={{tabBarIcon: () => (<Icon name='magnify' size={30}/>)}}/>
    <Tab.Screen name='Favorite' component={Favorite} options={{tabBarIcon: () => (<Icon name='heart' size={30}/>)}} />
    <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon: () => (<Icon name='account-circle-outline' size={30}/>)}}/>
  </Tab.Navigator>
  )
};

const HomeStack = () => {
  return(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Homeeee' component={Home}/>
    <Stack.Screen name='Detail' component={Detail}/>
  </Stack.Navigator>
  )
}
const AuthStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  )
}

const Router = () => { 
  const [userSession, setUserSession] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
      setLoading(false);
    });
  },[]);
  if (loading) {
    return <Loading source={require('./assets/loading.json')} />
  }


  return(
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false}}>
  {!userSession ? (
     <Stack.Screen name='Auth' component={AuthStack} /> 
     ) : ( 
     <Stack.Screen name='Tab' component={TabStack} /> 
  )}
</Stack.Navigator>
</NavigationContainer>
  )
}
export default Router;