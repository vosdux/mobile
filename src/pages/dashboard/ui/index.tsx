import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export const DashboardScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text category='h1'>Dashboard</Text>
      <View style={styles.content}>
        <Text>Welcome to your dashboard!</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 