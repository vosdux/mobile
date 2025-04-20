import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@ui-kitten/components';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { HomeNavigator } from '../pages/home/navigator';
import { GroupsNavigator } from '../pages/groups/navigator';
import { PeopleIcon } from '../assets/icons/people';
import { PersonIcon } from '../assets/icons/person';
import { LoginScreen } from '../pages/auth/ui';
import { useAuth } from '../context/auth.context';
import { ProfileScreen } from '../pages/profile/ui';
import { ManagerGroupsNavigator } from '../navigation/manager-groups.navigator';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabBarTrainer = ({ navigation, state }: BottomTabBarProps) => {
  const routeState = navigation.getState();
  const currentRoute = routeState.routes[routeState.index];
  
  const isHide = currentRoute.state?.index !== undefined && currentRoute.state.index > 0;

  return (
    <BottomNavigation
      style={{ display: isHide ? 'none' : 'flex' }}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Группы' icon={PeopleIcon} />
      <BottomNavigationTab title='Профиль' icon={PersonIcon} />
    </BottomNavigation>
  );
};

export const BottomTabsNavigatorTrainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Groups') {
            iconName = 'people-outline';
          } else if (route.name === 'Home') {
            iconName = 'person-outline';
          } else if (route.name === 'CreateGroup') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} width={size} height={size} fill={color} />;
        },
        tabBarActiveTintColor: '#3366FF',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBar={props => <BottomTabBarTrainer {...props} />}
    >
      <Tab.Screen 
        name="Groups" 
        component={ManagerGroupsNavigator} 
        options={{ headerShown: false }}
      /> 
      <Tab.Screen 
        name="Home" 
        component={ProfileScreen} 
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}; 

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {
  const routeState = navigation.getState();
  const currentRoute = routeState.routes[routeState.index];
  
  const isHide = currentRoute.state?.index !== undefined && currentRoute.state.index > 0;

  return (
    <BottomNavigation
      style={{ display: isHide ? 'none' : 'flex' }}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Профиль' icon={PersonIcon} />
      <BottomNavigationTab title='Группы' icon={PeopleIcon} />
    </BottomNavigation>
  );
};

const MainTabs = () => (
  <TabNavigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={props => <BottomTabBar {...props} />}>
    <TabScreen name='Home' component={HomeNavigator} />
    <TabScreen name='Groups' component={GroupsNavigator} />
  </TabNavigator>
);

export const AppNavigator = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <NavigationContainer>
      <StackNavigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
          <StackScreen name='Auth' component={LoginScreen} />
        ) : user?.type === 'type1' ? (
          <StackScreen name='Home' component={MainTabs} />
        ) : (
          <StackScreen name='BottomTabs' component={BottomTabsNavigatorTrainer} />
        )}
      </StackNavigator>
    </NavigationContainer>
  );
};
