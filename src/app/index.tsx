import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from '../../theme.json'; // <-- Import app theme
import { AppNavigator } from './navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AuthProvider } from '../context/auth.context';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ApplicationProvider>
  </>
);