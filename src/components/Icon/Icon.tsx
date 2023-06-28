import React from 'react';
import * as icons from 'lucide-react-native';

type props = {
  name: string;
  color?: string;
  size?: string | number;
};
const Icon: React.FC<props> = ({name, color = 'black', size = 32}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
