import React from 'react';
import {MyButton} from './Button';

export default {
  title: 'React Native Button',
  component: MyButton,
};

export const Basic = () => (
  <MyButton onPress={() => console.log('test')} text="hello world" />
);
