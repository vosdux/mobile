import { createStackNavigator } from "@react-navigation/stack";
import { GroupsScreen } from "../ui";
import { GroupScreen } from "../../gorup";
import { ProfileScreen } from "../../profile";

const { Navigator, Screen } = createStackNavigator();

export const GroupsNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, presentation: 'modal', }}>
      <Screen name='Groups' component={GroupsScreen} />
      <Screen name='Group' component={GroupScreen} />
      <Screen name='Profile' component={ProfileScreen} />
    </Navigator>
  );
};