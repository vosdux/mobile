import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text, Input, Button, Card, TopNavigation, TopNavigationAction, Icon, Avatar, Divider } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

const UploadIcon = (props: any) => (
  <Icon {...props} name='upload' />
);

export const CreateGroupScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    memberLimit: '',
    avatar: '',
  });

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    navigation.goBack();
  };

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const handleAvatarUpload = () => {
    // TODO: Implement image picker functionality
    // For now, we'll just set a placeholder
    setFormData({ ...formData, avatar: 'https://i.pravatar.cc/150?img=1' });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
            title='Создание группы'
            alignment='center'
            accessoryLeft={renderBackAction}
          />
          <Divider />
      <Layout style={styles.container}>
        <ScrollView>
          

          <Card style={styles.formCard}>
            <View style={styles.avatarContainer}>
              <Avatar
                source={formData.avatar ? { uri: formData.avatar } : undefined}
                style={styles.avatar}
              />
              <Button
                appearance='ghost'
                status='basic'
                accessoryLeft={UploadIcon}
                onPress={handleAvatarUpload}
                style={styles.uploadButton}
              >
                Загрузить аватар
              </Button>
            </View>

            <Input
              label='Название группы'
              placeholder='Введите название группы'
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              style={styles.input}
            />

            <Input
              label='Описание'
              placeholder='Введите описание группы'
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              multiline
              textStyle={styles.textArea}
              style={styles.input}
            />

          </Card>

          <View style={styles.buttonContainer}>
            <Button
              status='primary'
              style={styles.button}
              onPress={handleSubmit}
            >
              Создать группу
            </Button>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formCard: {
    marginBottom: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  uploadButton: {
    marginTop: 8,
  },
  input: {
    marginBottom: 16,
  },
  textArea: {
    minHeight: 64,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
}); 