import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text, Input, Card, Button, List, Avatar, TopNavigation, TopNavigationAction, Icon, Divider } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  CreateGroup: undefined;
  ManageGroup: { groupId: string };
};

type ManagerGroupsNavigationProp = StackNavigationProp<RootStackParamList>;

interface Group {
  id: string;
  name: string;
  members: number;
  avatar: string;
}

const groups: Group[] = [
  {
    id: '1',
    name: 'Фитнес группа',
    members: 12,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Группа йоги',
    members: 8,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Группа бега',
    members: 6,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

const CreateGroupIcon = (props: any) => (
  <Icon {...props} name='plus-outline' />
);

export const ManagerGroupsScreen = () => {
  const navigation = useNavigation<ManagerGroupsNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const renderCreateGroupAction = () => (
    <TopNavigationAction
      icon={CreateGroupIcon}
      onPress={() => navigation.navigate('CreateGroup')}
    />
  );

  const renderGroupItem = ({ item }: { item: Group }): React.ReactElement => (
    <Card
      style={styles.groupCard}
      onPress={() => navigation.navigate('ManageGroup', { groupId: item.id })}
    >
      <View style={styles.groupContent}>
        <Avatar source={{ uri: item.avatar }} style={styles.groupAvatar} />
        <View style={styles.groupInfo}>
          <Text category='h6'>{item.name}</Text>
          <Text category='s1' appearance='hint'>{item.members} участников</Text>
        </View>
        <Button
          size='small'
          status='basic'
          onPress={() => navigation.navigate('ManageGroup', { groupId: item.id })}
        >
          Управление
        </Button>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title='Мои группы'
        alignment='center'
        accessoryRight={renderCreateGroupAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Input
          placeholder='Поиск групп...'
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />

        <List
          data={groups}
          renderItem={renderGroupItem}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    marginBottom: 16,
  },
  listContent: {
    paddingVertical: 8,
  },
  groupCard: {
    marginVertical: 4,
  },
  groupContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAvatar: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  groupInfo: {
    flex: 1,
  },
  separator: {
    height: 8,
  },
}); 