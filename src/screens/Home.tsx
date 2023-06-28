import React from 'react';
import Button from '../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'tamagui';
import CardComponent from '../components/Card/Card';
import {SafeAreaView, ScrollView} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <Button onPress={() => navigation.navigate('Test')}>Start</Button>
        <Text>Not Storybook!</Text>
        <CardComponent
          title="Get Help"
          description="Feeling unwell? Get help or retake the assessment.">
          <Button onPress={() => navigation.navigate('Settings')}>
            Press Me
          </Button>
        </CardComponent>
        <CardComponent
          title="Get Help"
          description="Feeling unwell? Get help or retake the assessment."
          variant="light">
          <Button onPress={() => navigation.navigate('Start')}>Press Me</Button>
        </CardComponent>
        <CardComponent
          title="Get Help"
          description="Feeling unwell? Get help or retake the assessment."
          variant="white">
          <Button onPress={() => navigation.navigate('Settings')}>
            Press Me
          </Button>
        </CardComponent>
        <CardComponent
          title="Get Help"
          description="Feeling unwell? Get help or retake the assessment."
          highlight>
          <Button onPress={() => navigation.navigate('Start')}>Press Me</Button>
        </CardComponent>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
