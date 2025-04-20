import { List, Layout, Text, ListItem, Avatar, Divider, OverflowMenu, MenuItem, Button, Card } from "@ui-kitten/components"
import { StyleSheet, View } from "react-native";
import { GoalText } from "../../components/goal-text";
// import { HomeIcon } from "../../assets/icons/home";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

interface IListItem {
  fullName: string;
  avatar: string;
  count: number;
  goal: number;
  you?: boolean;
}

type Props = {
  data: IListItem[];
  title: string;
  reverse?: boolean;
}

type RootStackParamList = {
  Home: undefined;
  Profile: { id: string };
};

type GroupTabNavigationProp = StackNavigationProp<RootStackParamList>;

export const GroupTab = ({ data, title, reverse }: Props) => {
  const navigation = useNavigation<GroupTabNavigationProp>();

  const renderItem = ({ item }: { item: IListItem }): React.ReactElement => (
    <ListItem
      title={(props) => <View style={styles.titleContainer}>
        <Text {...props}>
          {item.fullName}
        </Text>
        {/* {item.you && <HomeIcon  />} */}
      </View>}
      accessoryLeft={() => <Avatar source={{ uri: item.avatar }} />}
      accessoryRight={() => <GoalText reverse={reverse} count={item.count} goal={item.goal} />}
      onPress={() => {
        if (!item.you) { 
          navigation.navigate('Profile', { id: '2' });
        }
      }}
    />
  );

  const renderMenu = (item: IListItem): React.ReactElement => (
    <OverflowMenu
        anchor={renderItem}
      >
        <MenuItem title='Users' />
        <MenuItem title='Orders' />
        <MenuItem title='Transactions' />
      </OverflowMenu>
  );

  return (
    <Layout> 
      <Text style={styles.tabTitle}>{title}</Text>
      <List renderItem={renderItem} data={data} ItemSeparatorComponent={() => <Divider />} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  tabTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsCard: {
    margin: 16,
    marginTop: 0,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  periodButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  }
});