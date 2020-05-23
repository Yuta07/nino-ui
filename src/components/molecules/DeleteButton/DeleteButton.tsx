import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { Balloon } from '../../atoms/Baloon';
import { FeatherIcon } from '../../atoms/Icon/FeatherIcon';
import { HoverInteraction } from '../../atoms/HoverInteraction/HoverInteraction';

type Props = {
  text?: string;
  color?: string;
  onClick?: () => void;
};

export const DeleteButton = ({ text, color = 'PRIMARY', onClick }: Props) => {
  const themes = useTheme();

  return (
    <HoverInteraction>
      <FeatherIcon name="Fi-Trash2" color={themes.palette[color]} onClick={onClick} />
      {text ? <Balloon>{text}</Balloon> : null}
    </HoverInteraction>
  );
};
