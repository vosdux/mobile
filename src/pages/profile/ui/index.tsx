import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text, Avatar, Button, Card, Divider, TopNavigationAction, TopNavigation } from '@ui-kitten/components';
import { useAuth } from '../../../context/auth.context';
import { ExitIcon } from '../../../assets/icons/exit';

export const ProfileScreen = () => {
  const { logout, user } = useAuth();

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
        alignment='center'
        accessoryRight={renderLogoutAction}
      />
      <Layout style={styles.container}>
        <ScrollView>
          {/* Profile Header */}
        <View style={styles.header}>
          <Avatar
            style={styles.avatar}
            source={{ uri: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60' }}
          />
          <Text category='h4' style={styles.name}>
            {user?.name || 'Евгений Колесников'}
          </Text>
        </View>

        {/* Stats Section */}
        <Card style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text category='h6'>Подопечных</Text>
              <Text category='h4'>156</Text>
            </View>
            <View style={styles.statItem}>
              <Text category='h6'>Группы</Text>
              <Text category='h4'>8</Text>
            </View>
          </View>
        </Card>

        {/* Settings Section */}
        <Card style={styles.settingsCard}>
          <Text category='h6' style={styles.sectionTitle}>Настройки</Text>
          <Button
            appearance='ghost'
            status='basic'
            style={styles.settingButton}
          >
            Настройки аккаунта
          </Button>
        </Card>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  name: {
    marginBottom: 8,
  },
  role: {
    color: '#8F9BB3',
  },
  statsCard: {
    margin: 16,
    marginTop: 0,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  settingsCard: {
    margin: 16,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  settingButton: {
    marginBottom: 8,
    justifyContent: 'flex-start',
  },
  logoutButton: {
    margin: 16,
    marginTop: 8,
  },
}); 