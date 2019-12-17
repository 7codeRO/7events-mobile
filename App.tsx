import React from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import 'react-native-gesture-handler'
import { Root } from "native-base";
export default function App() {
  return (
      <Root>
        <RootNavigation />
      </Root>
  );
}
