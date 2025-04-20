import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { List, Text, Card, Avatar, TopNavigation } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageOverlay } from '../../../components/image-overlay';
import { data } from '../mock';

type RootStackParamList = {
  Group: undefined;
  // ... other screens
};

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const GroupsScreen = () => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const onItemPress = () => {
    navigation.navigate('Group');
  };

  const renderItemHeader = (info: ListRenderItemInfo<any>): React.ReactElement => (
    <ImageOverlay
      style={styles.itemHeader}
      source={info.item.image}>
      <Text
        style={styles.itemTitle}
        category='h2'
        status='control'>
        {info.item.title}
      </Text>
      <View style={styles.itemDescriptionContainer}>
        <Text
          style={styles.itemDescription}
          category='s1'
          status='control'>
          {info.item.description}
        </Text>
      </View>
    </ImageOverlay>
  );

  const renderItem = (info: ListRenderItemInfo<any>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}
      onPress={onItemPress}>
      <View style={styles.itemFooter}>
        <Avatar source={info.item.author.photo} />
        <View style={styles.itemAuthoringContainer}>
          <Text
            category='s2'>
            {info.item.author.fullName}
          </Text>
        </View>
        <View style={styles.peopleContainer}>
          <Text appearance='hint'>{info.item.peoples} человек</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Мои Группы' />
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
  },
  itemDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  itemDescription: {
    marginHorizontal: 16,
  },
  itemFooter: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  itemAuthoringContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});