import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../../context/auth.context';

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement actual login logic
    if (email === 'vlad666@mail.ru') {
      login({
        id: '1',
        type: 'type1',
      });
    } else {
      login({
        id: '2',
        type: 'type2',
      });
    }
    // navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container} level='1'>
        <View style={styles.headerContainer}>
          <Text category='h1'>TrainerApp</Text>
          <Text category='s1' appearance='hint'>Войдите в свой аккаунт</Text>
        </View>

        <View style={styles.formContainer}>
          <Input
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <Input
            style={styles.input}
            placeholder='Пароль'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            style={styles.button}
            onPress={handleLogin}>
            Войти
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
}); 