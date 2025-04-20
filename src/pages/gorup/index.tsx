import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Divider, Layout, Text, TopNavigation, TopNavigationAction, ViewPager, Button } from '@ui-kitten/components';
import { ArrowLeftIcon } from '../../assets/icons/arrow-left';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { groupMock, groupTabs } from './mock';
import { GroupTab } from './tab';

interface IGroupScreenProps {
  isManager?: boolean;
}

export const GroupScreen = ({ isManager = false }: IGroupScreenProps) => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={<ArrowLeftIcon />}
      onPress={navigation.goBack}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Группа' alignment='center' accessoryLeft={renderDrawerAction} />
      <Divider />
      <Layout
        style={styles.container}
        level='2'>
        <Layout
          style={styles.header}
          level='1'>
          {!isManager && <View style={styles.profileContainer}>
            <Avatar
              style={styles.profileAvatar}
              size='large'
              source={groupMock.photo}
            />
            <View style={styles.profileDetailsContainer}>
              <Text category='s1'>
                {groupMock.fullName}
              </Text>
              <Text
                appearance='hint'
                category='s1'>
                Тренер
              </Text>
            </View>
          </View>}
          <Text
            style={styles.gorupTitle}
            category='h6'
          >
            {groupMock.title}
          </Text>
          <Text
            style={styles.descriptionText}
            appearance='hint'>
            {groupMock.description}
          </Text>
          {isManager && <Button style={styles.addUserButton} onPress={() => {}}>Добавить пользователя</Button>}
        </Layout>
        <Divider />
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
        >
          {groupTabs.map((tab) => (
            <GroupTab key={tab.title} title={tab.title} data={tab.data} reverse={tab.reverse} />
          ))}
        </ViewPager>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  gorupTitle: {
    marginTop: 24,
  },
  descriptionText: {
    marginTop: 24,
    marginBottom: 8,
  },
  profileParametersContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    marginHorizontal: 8,
  },
  profileSectionsDivider: {
    width: 1,
    height: '100%',
    marginHorizontal: 8,
  },
  profileSocialsSection: {
    marginHorizontal: 16,
  },
  profileSocialContainer: {
    flex: 1,
  },
  profileParametersSection: {
    flex: 1,
    marginHorizontal: 16,
  },
  profileParameter: {
    marginBottom: 16,
  },
  list: {
    marginTop: 24,
  },
  addUserButton: {
    marginHorizontal: 16,
    marginTop: 24,
  },
});
