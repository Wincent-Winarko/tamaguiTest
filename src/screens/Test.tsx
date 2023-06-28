import React, {useEffect, useState} from 'react';
import Button from '../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {
  AlertDialog,
  Form,
  H4,
  Input,
  Label,
  SizeTokens,
  Spinner,
  Text,
  TextArea,
  XStack,
  YStack,
  ZStack,
} from 'tamagui';
import CardComponent from '../components/Card/Card';
import {SafeAreaView, ScrollView, Switch} from 'react-native';

function InputDemo(props: {size: SizeTokens}) {
  return (
    <XStack alignItems="center" space="$2">
      <Input flex={1} size={props.size} placeholder={`Size ${props.size}...`} />
      <Button size={props.size}>Go</Button>
    </XStack>
  );
}
function TestScreen() {
  const navigation = useNavigation();
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'grey'}}>
        <XStack maxWidth={250} padding="$2" alignSelf="center" space>
          <YStack
            flex={1}
            space="$2"
            borderWidth={2}
            borderColor="$color"
            borderRadius="$4"
            padding="$2">
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
          </YStack>

          <XStack
            flex={1}
            space="$2"
            borderWidth={2}
            borderColor="$color"
            borderRadius="$4"
            padding="$2">
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
          </XStack>

          <ZStack maxWidth={50} maxHeight={85} width={100} flex={1}>
            <YStack fullscreen borderWidth={2} borderRadius="$4" padding="$2" />
            <YStack
              fullscreen
              y={10}
              x={10}
              borderWidth={2}
              borderRadius="$4"
              padding="$2"
            />
            <YStack
              fullscreen
              y={20}
              x={20}
              borderWidth={2}
              backgroundColor="$color"
              borderRadius="$4"
              padding="$2"
            />
          </ZStack>
        </XStack>
        <Form
          alignItems="center"
          minWidth={300}
          mt={36}
          space
          onSubmit={() => setStatus('submitting')}
          borderWidth={1}
          borderRadius="$4"
          backgroundColor="$background"
          borderColor="$borderColor"
          padding="$8">
          <H4>{status[0].toUpperCase() + status.slice(1)}</H4>

          <Form.Trigger asChild disabled={status !== 'off'}>
            <Button
              icon={status === 'submitting' ? () => <Spinner /> : undefined}>
              Submit
            </Button>
          </Form.Trigger>
        </Form>
        <YStack
          width={200}
          minHeight={250}
          overflow="hidden"
          space="$2"
          margin="$3"
          padding="$2">
          <InputDemo size="$2" />
          <InputDemo size="$3" />
          <InputDemo size="$4" />
          <TextArea placeholder="Enter your details..." />
        </YStack>
        <YStack padding="$3" minWidth={300} space="$4">
          <XStack alignItems="center" space="$4">
            <Label width={90} htmlFor="name">
              Name
            </Label>
            <Input flex={1} id="name" defaultValue="Nate Wienert" />
          </XStack>
        </YStack>
        <AlertDialog native>
          <AlertDialog.Trigger asChild>
            <Button>Show Alert</Button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay
              key="overlay"
              animation="quick"
              opacity={0.5}
              enterStyle={{opacity: 0}}
              exitStyle={{opacity: 0}}
            />
            <AlertDialog.Content
              bordered
              elevate
              key="content"
              animation={[
                'quick',
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{x: 0, y: -20, opacity: 0, scale: 0.9}}
              exitStyle={{x: 0, y: 10, opacity: 0, scale: 0.95}}
              x={0}
              scale={1}
              opacity={1}
              y={0}>
              <YStack space>
                <AlertDialog.Title>Accept</AlertDialog.Title>
                <AlertDialog.Description>
                  By pressing yes, you accept our terms and conditions.
                </AlertDialog.Description>

                <XStack space="$3" justifyContent="flex-end">
                  <AlertDialog.Cancel asChild>
                    <Button onPress={() => navigation.navigate('Home')}>
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <Button
                      theme="active"
                      onPress={() => navigation.navigate('Home')}>
                      Accept
                    </Button>
                  </AlertDialog.Action>
                </XStack>
              </YStack>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog>
        <Button onPress={() => navigation.navigate('Home')}>Next</Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TestScreen;
