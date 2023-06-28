import React from 'react';
import {Card, GetProps, H2, Paragraph, XStack, styled} from 'tamagui'; // or '@tamagui/core' if extending just that
import Icon from '../Icon/Icon';

// Potential Props
// Title
// Description
// Action buttons
// Image
// Orientation
// Style => dark / light / white
// Highlight => white with red top border

const NswCard = styled(Card, {
  marginLeft: 8,
  marginRight: 8,
  marginTop: 16,
  marginBottom: 8,
  borderRadius: 4,
  variants: {
    variant: {
      dark: {
        backgroundColor: '$background',
      },
      light: {
        backgroundColor: 'lightblue',
      },
      white: {
        borderWidth: 1,
        borderColor: '$grey03',
        backgroundColor: '$white',
      },
    },
    highlight: {
      true: {
        borderWidth: 1,
        borderColor: '$grey03',
        borderTopWidth: 4,
        borderTopColor: 'red',
        backgroundColor: '$white',
      },
    },
  },
});

const NswCardTitle = styled(H2, {
  fontSize: '$xl',
  lineHeight: '$xl',
  marginBottom: '$5',
  marginLeft: '$2',
  fontWeight: '700',
  variants: {
    variant: {
      dark: {
        color: '$white',
      },
      light: {
        color: '$black',
      },
      white: {
        color: '$black',
      },
    },
    highlight: {
      true: {
        color: '$black',
      },
    },
  },
});

const NswCardText = styled(Paragraph, {
  fontSize: '$sm',
  lineHeight: '$sm',
  variants: {
    variant: {
      dark: {
        color: '$white',
      },
      light: {
        color: '$black',
      },
      white: {
        color: '$black',
      },
    },
    highlight: {
      true: {
        color: '$black',
      },
    },
  },
});

type props = {
  children: any;
  title?: string;
  description?: string;
  image?: string;
  orientation?: 'portrait' | 'landscape';
  variant?: 'dark' | 'light' | 'white';
  highlight?: boolean;
};
const CardComponent: React.FC<props> = ({
  children,
  title,
  description,
  orientation = 'portrait',
  variant = 'dark',
  highlight = false,
}) => {
  return (
    <NswCard
      size="$2"
      animation="bouncy"
      variant={variant}
      highlight={highlight}>
      <Card.Header padded>
        <XStack>
          <Icon name={'Home'} />
          <NswCardTitle variant={variant} highlight={highlight}>
            {title}
          </NswCardTitle>
        </XStack>
        <NswCardText variant={variant} highlight={highlight}>
          {description}
        </NswCardText>
      </Card.Header>
      <Card.Footer padded>{children}</Card.Footer>
    </NswCard>
  );
};

export type ButtonProps = GetProps<typeof Card>;

export default CardComponent;
