import React from 'react';
import {Circle, ScrollView, Square, XStack} from 'tamagui';

export function ScrollViewDemo() {
  return (
    <ScrollView
      // maxHeight={250}
      width="75%"
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4">
      <XStack flexWrap="wrap" alignItems="center" justifyContent="center">
        <Square margin="$4" size={120} backgroundColor="red" />
        <Circle margin="$4" size={120} backgroundColor="orange" />
        <Square margin="$4" size={120} backgroundColor="yellow" />
        <Circle margin="$4" size={120} backgroundColor="green" />
        <Square margin="$4" size={120} backgroundColor="blue" />
        <Circle margin="$4" size={120} backgroundColor="purple" />
        <Square margin="$4" size={120} backgroundColor="pink" />
        <Circle margin="$4" size={120} backgroundColor="red" />
      </XStack>
    </ScrollView>
  );
}
