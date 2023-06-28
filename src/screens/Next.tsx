import {Check, ChevronDown, ChevronUp, X} from 'lucide-react-native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  Dialog,
  Adapt,
  Sheet,
  Fieldset,
  Label,
  Input,
  TooltipSimple,
  Paragraph,
  XStack,
  Unspaced,
  LinearGradient,
  Select,
  SelectProps,
  YStack,
  getFontSize,
  Button,
} from 'tamagui';

export function SelectDemo() {
  return (
    <YStack space>
      <XStack ai="center" space>
        <Label f={1} fb={0}>
          Custom
        </Label>
        <SelectDemoItem />
      </XStack>

      <XStack ai="center" space>
        <Label f={1} fb={0}>
          Native
        </Label>
        <SelectDemoItem native />
      </XStack>
    </YStack>
  );
}

export function SelectDemoItem(props: SelectProps) {
  const [val, setVal] = useState('apple');

  return (
    <Select id="food" value={val} onValueChange={setVal} {...props}>
      <Select.Trigger width={180} iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3">
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <XStack>
            <Select.Group space="$0">
              <Select.Label>Fruits</Select.Label>
              {items.map((item, i) => {
                return (
                  <Select.Item
                    index={i}
                    key={item.name}
                    value={item.name.toLowerCase()}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
            {/* special icon treatment for native */}
            {props.native && (
              <YStack
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                width={'$4'}
                pointerEvents="none">
                <ChevronDown
                  size={getFontSize((props.size ?? '$true') as any)}
                />
              </YStack>
            )}
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3">
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}

const items = [
  {name: 'Apple'},
  {name: 'Pear'},
  {name: 'Blackberry'},
  {name: 'Peach'},
  {name: 'Apricot'},
  {name: 'Melon'},
  {name: 'Honeydew'},
  {name: 'Starfruit'},
  {name: 'Blueberry'},
  {name: 'Raspberry'},
  {name: 'Strawberry'},
  {name: 'Mango'},
  {name: 'Pineapple'},
  {name: 'Lime'},
  {name: 'Lemon'},
  {name: 'Coconut'},
  {name: 'Guava'},
  {name: 'Papaya'},
  {name: 'Orange'},
  {name: 'Grape'},
  {name: 'Jackfruit'},
  {name: 'Durian'},
];

function NextScreen() {
  return <DialogInstance />;
}

function DialogInstance() {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'grey'}}>
        <Dialog
          modal
          onOpenChange={open => {
            setOpen(open);
          }}>
          <Dialog.Trigger asChild>
            <Button>Show Dialog</Button>
          </Dialog.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet zIndex={200000} modal dismissOnSnapToBottom>
              <Sheet.Frame padding="$4" space>
                <Adapt.Contents />
              </Sheet.Frame>
              s
              <Sheet.Overlay />
            </Sheet>
          </Adapt>

          <Dialog.Portal>
            <Dialog.Overlay
              key="overlay"
              animation="quick"
              opacity={0.5}
              enterStyle={{opacity: 0}}
              exitStyle={{opacity: 0}}
            />

            <Dialog.Content
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
              space>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <Fieldset space="$4" horizontal>
                <Label width={160} justifyContent="flex-end" htmlFor="name">
                  Name
                </Label>
                <Input flex={1} id="name" defaultValue="Nate Wienert" />
              </Fieldset>
              <Fieldset space="$4" horizontal>
                <Label width={160} justifyContent="flex-end" htmlFor="username">
                  <TooltipSimple
                    label="Pick your favorite"
                    placement="bottom-start">
                    <Paragraph>Food</Paragraph>
                  </TooltipSimple>
                </Label>
                <SelectDemoItem />
              </Fieldset>

              <XStack alignSelf="flex-end" space>
                <DialogInstance />

                <Dialog.Close displayWhenAdapted asChild>
                  <Button theme="alt1" aria-label="Close">
                    Save changes
                  </Button>
                </Dialog.Close>
              </XStack>

              <Unspaced>
                <Dialog.Close asChild>
                  <Button top="$3" right="$3" size="$2" circular icon={X} />
                </Dialog.Close>
              </Unspaced>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NextScreen;
