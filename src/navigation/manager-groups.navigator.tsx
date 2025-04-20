import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ManagerGroupsScreen } from '../pages/manager-groups/ui';
import { CreateGroupScreen } from '../pages/create-group/ui';
import { GroupScreen } from '../pages/gorup';
import { ProfileScreen } from '../pages/profile';
const Stack = createStackNavigator();

export const ManagerGroupsNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='ManagerGroups' component={ManagerGroupsScreen} />
    <Stack.Screen 
      name='CreateGroup' 
      component={CreateGroupScreen}
      options={{
        presentation: 'modal',
        cardStyle: { backgroundColor: 'transparent' },
      }}
    />
    <Stack.Screen 
      name='ManageGroup' 
      component={(props: any) => <GroupScreen isManager={true} {...props} />}
    />
    <Stack.Screen 
      name='Profile' 
      component={(props: any) => <ProfileScreen isManager={true} {...props} />}
    />
  </Stack.Navigator>
); 