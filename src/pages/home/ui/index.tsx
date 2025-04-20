import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ProfileParameterCard } from '../../../components/profile-card';
import { WeightIcon } from '../../../assets/icons/weight';
import { HeartIcon } from '../../../assets/icons/heart';
import { BurnIcon } from '../../../assets/icons/burn';
import { ShoeIcon } from '../../../assets/icons/shoe';
import { SleepIcon } from '../../../assets/icons/sleep';
import { McdonaldsIcon } from '../../../assets/icons/mcdonalds';
import { ExitIcon } from '../../../assets/icons/exit';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../../context/auth.context';

type RootStackParamList = {
  Steps: undefined;
  Profile: { id: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { logout } = useAuth();

  const renderLogoutAction = () => (
    <TopNavigationAction
      icon={(props) => <ExitIcon {...props} />}
      onPress={logout}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation 
        title='Профиль'
        accessoryRight={renderLogoutAction}
      />
      <Divider />
      <Layout
        style={styles.container}
        level='2'>
        <Layout
          style={styles.header}
          level='1'>
          <View style={styles.profileContainer}>
            <Avatar
              style={styles.profileAvatar}
              size='large'
              source={{ uri: "https://cdn.usegalileo.ai/sdxl10/d14edf49-7242-40b9-9e3e-f358e7d1297b.png" }}
            />
            <View style={styles.profileDetailsContainer}>
              <Text category='h4'>
                Владислав Рассолов
              </Text>
              <Text
                appearance='hint'
                category='s1'>
                25 лет
              </Text>
              <Text
                appearance='hint'
                category='s1'>
                tg: rastahill
              </Text>
            </View>
          </View>
          {/* <Button
            style={styles.followButton}>
            Написать
          </Button> */}
          <Text
            style={styles.profileDescription}
            appearance='hint'>
            Я много жрал макдоналдс и теперь худею
          </Text>
        </Layout>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Шаги'
            value={'14'}
            icon={ShoeIcon}
            onPress={() => navigation.navigate('Steps')}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Вес'
            value={`${143} кг`}
            icon={WeightIcon}
          />
        </View>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Пульс ср.'
            value={'14'}
            icon={HeartIcon}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Колорий потрачено'
            value={'70'}
            icon={BurnIcon}
          />
        </View>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Сон'
            value={`${3} ч`}
            icon={SleepIcon}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Макдак'
            value={`${5} раз`}
            icon={McdonaldsIcon}
          />
        </View>
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
  followButton: {
    marginTop: 24,
  },
  profileDescription: {
    marginTop: 24,
    marginBottom: 8,
  },
  profileParametersSection: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 8,
  },
});