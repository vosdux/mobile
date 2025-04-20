import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../ui";
import { GoalScreen } from "../../goal";
import { ProfileScreen } from "../../profile";

const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <Screen name='HomeScreen' component={HomeScreen} />
      <Screen name='Steps' component={GoalScreen} />
      <Screen name='Profile' component={ProfileScreen} />
    </Navigator>
  );
};