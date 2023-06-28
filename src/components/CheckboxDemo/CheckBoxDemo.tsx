import React from 'react';
import {Check} from '@tamagui/lucide-icons';
import {Checkbox, Label, SizeTokens, XStack, YStack} from 'tamagui';

export function CheckboxDemo() {
  return (
    <YStack width={300} alignItems="center" space="$2">
      <CheckboxWithLabel size="$3" />
      <CheckboxWithLabel size="$4" defaultChecked />
      <CheckboxWithLabel size="$5" />
    </YStack>
  );
}

export function CheckboxWithLabel(props: {
  size: SizeTokens;
  defaultChecked?: boolean;
}) {
  const id = `checkbox-${props.size.toString().slice(1)}`;
  return (
    <XStack width={300} alignItems="center" space="$4" marginLeft="$4">
      <Checkbox
        id={id}
        size={props.size}
        native
        defaultChecked={props.defaultChecked}>
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
      <Label size={props.size} htmlFor={id} color="$black">
        Accept terms and conditions
      </Label>
    </XStack>
  );
}
