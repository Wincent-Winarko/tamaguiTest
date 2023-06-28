import {Button, GetProps, styled} from 'tamagui'; // or '@tamagui/core' if extending just that

const nswButton = styled(Button, {
  fontWeight: '700',
});

export type ButtonProps = GetProps<typeof Button>;

export default nswButton;
