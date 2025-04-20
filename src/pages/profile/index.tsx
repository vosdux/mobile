import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Divider, Layout, Text, TopNavigation, TopNavigationAction, Button, Modal } from '@ui-kitten/components';
import { ProfileParameterCard } from '../../components/profile-card';
import { WeightIcon } from '../../assets/icons/weight';
import { HeartIcon } from '../../assets/icons/heart';
import { BurnIcon } from '../../assets/icons/burn';
import { ShoeIcon } from '../../assets/icons/shoe';
import { SleepIcon } from '../../assets/icons/sleep';
import { McdonaldsIcon } from '../../assets/icons/mcdonalds';
import { ArrowLeftIcon } from '../../assets/icons/arrow-left';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';



// Mock data - replace with your actual data fetching logic
const mockProfiles: Record<string, ProfileData> = {
  '1': {
    id: '1',
    name: 'Владислав Рассолов',
    age: 25,
    telegram: 'rastahill',
    description: 'Я много жрал макдоналдс и теперь худею',
    avatar: 'https://cdn.usegalileo.ai/sdxl10/d14edf49-7242-40b9-9e3e-f358e7d1297b.png',
    stats: {
      steps: 14,
      weight: 143,
      heartRate: 14,
      calories: 70,
      sleep: 3,
      mcdonalds: 5,
    },
  },
  '2': {
    id: '2',
    name: 'Иван Иванов',
    age: 25,
    telegram: 'ivan_ivanov',
    description: 'Я не такой толстый как Владислав',
    avatar: 'https://i.pravatar.cc/300',
    stats: {
      steps: 12000,
      weight: 84,
      heartRate: 60,
      calories: 2000,
      sleep: 7,
      mcdonalds: 0,
    },
  },
  // Add more profiles as needed
};


type RootStackParamList = {
  Steps: undefined;
  Profile: { id: string };
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface ProfileData {
  id: string;
  name: string;
  age: number;
  telegram: string;
  description: string;
  avatar: string;
  stats: {
    steps: number;
    weight: number;
    heartRate: number;
    calories: number;
    sleep: number;
    mcdonalds: number;
  };
}

export const ProfileScreen = ({ isManager = false }: { isManager?: boolean }) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  
  const profile = mockProfiles[id];

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={<ArrowLeftIcon />}
      onPress={navigation.goBack}
    />
  );

  const handleDelete = () => {
    // TODO: Implement delete functionality
    setDeleteModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation 
        title='Профиль' 
        alignment='center' 
        accessoryLeft={renderDrawerAction}
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
              source={{ uri: profile.avatar }}
            />
            <View style={styles.profileDetailsContainer}>
              <Text category='h4'>
                {profile.name}
              </Text>
              <Text
                appearance='hint'
                category='s1'>
                {profile.age} лет
              </Text>
              <Text
                appearance='hint'
                category='s1'>
                tg: {profile.telegram}
              </Text>
            </View>
          </View>
          <Text
            style={styles.profileDescription}
            appearance='hint'>
            {profile.description}
          </Text>

          {isManager && (
            <Button
              status='danger'
              style={styles.profileButton}
              onPress={() => setDeleteModalVisible(true)}
            >
              Удалить из группы
            </Button>
          )}
        </Layout>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Шаги'
            value={`${profile.stats.steps}`}
            icon={ShoeIcon}
            onPress={() => navigation.navigate('Steps')}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Вес'
            value={`${profile.stats.weight} кг`}
            icon={WeightIcon}
          />
        </View>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Пульс ср.'
            value={`${profile.stats.heartRate}`}
            icon={HeartIcon}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Колорий потрачено'
            value={`${profile.stats.calories}`}
            icon={BurnIcon}
          />
        </View>
        <View style={styles.profileParametersSection}>
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Сон'
            value={`${profile.stats.sleep} ч`}
            icon={SleepIcon}
          />
          <ProfileParameterCard
            style={styles.profileParameter}
            hint='Макдак'
            value={`${profile.stats.mcdonalds} раз`}
            icon={McdonaldsIcon}
          />
        </View>

        <Modal
          visible={deleteModalVisible}
          backdropStyle={styles.modalBackdrop}
          onBackdropPress={() => setDeleteModalVisible(false)}
        >
          <Layout style={styles.modalContainer}>
            <Text category='h6' style={styles.modalTitle}>Удалить участника?</Text>
            <Text style={styles.modalText}>
              Вы уверены, что хотите удалить {profile.name} из группы?
            </Text>
            <View style={styles.modalButtons}>
              <Button
                appearance='ghost'
                status='basic'
                onPress={() => setDeleteModalVisible(false)}
                style={styles.modalButton}
              >
                Отмена
              </Button>
              <Button
                status='danger'
                onPress={handleDelete}
                style={styles.modalButton}
              >
                Удалить
              </Button>
            </View>
          </Layout>
        </Modal>
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
  profileButton: {
    marginHorizontal: 8,
    marginTop: 16,
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 16,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 8,
  },
}); 