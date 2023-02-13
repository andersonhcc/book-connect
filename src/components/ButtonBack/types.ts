import { TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  icon?: string;
  color?: string;
  marginTop?: number;
}