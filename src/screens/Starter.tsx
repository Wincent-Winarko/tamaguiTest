import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Heading,
  Paragraph,
  Text,
  View,
  XStack,
} from 'tamagui';
import {ButtonDemo} from '../components/ButtonDemo/ButtonDemo';
import {CheckboxDemo} from '../components/CheckboxDemo/CheckBoxDemo';
import {ScrollViewDemo} from '../components/ScrollViewDemo/ScrollViewDemo';
import CardComponent from '../components/Card/Card';
import {useNavigation} from '@react-navigation/native';

function Starter() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <H1 color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading 1
        </H1>
        <H2 color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading 2
        </H2>
        <H3 color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading 3
        </H3>
        <H4 color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading 4
        </H4>
        <H5 color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading 5
        </H5>
        <H6 color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading 6
        </H6>
        <Heading color={'$background'} margin="$2" lineHeight={'$xxl'}>
          Heading
        </Heading>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <XStack backgroundColor="$red" w="$2" h="$1" />
          <CardComponent
            title="Get Help"
            description="Feeling unwell? Get help or retake the assessment."
            variant="light">
            <Button onPress={() => navigation.navigate('Home')}>
              Press Me
            </Button>
          </CardComponent>
          <ButtonDemo />
          <CheckboxDemo />
          <ScrollViewDemo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Starter;
