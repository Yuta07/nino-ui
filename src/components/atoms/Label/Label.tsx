import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { FeatherIcon } from '../Icon/FeatherIcon';

type Position = {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

type Props = {
  label: string;
  icon?: string;
  requiredText?: string;
  position?: Position;
};

export const Label = ({ label }: Props) => {
  const theme = useTheme();

  return <Text themes={theme}>{label}</Text>;
};

export const LabelWithRequired = ({ label, icon = 'Fi-AlertCircle', requiredText = '必須項目', position }: Props) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Text themes={theme}>{label}</Text>
      <RequiredContainer posi={position}>
        <FeatherIcon name={icon} color={theme.palette.DANGER} size={12} />
        <RequiredText color={theme.palette.DANGER}>{requiredText}</RequiredText>
      </RequiredContainer>
    </Wrapper>
  );
};

const Text = styled.label<{ themes: Theme }>`
  ${({ themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      color: ${palette.PRIMARY};
      font-size: ${fontSize.MEDIUM}px;
      position: relative;

      @media screen and ${device.TABLET} {
        font-size: ${fontSize.SMALL}px;
      }

      @media screen and ${device.MOBILE_S} {
        font-size: ${fontSize.X_SMALL}px;
      }
    `;
  }}
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const RequiredText = styled.span<{ color: string }>`
  ${({ color }) => {
    return css`
      color: ${color};
      font-size: 12px;
      padding-left: 4px;
    `;
  }}
`;

const RequiredContainer = styled.div<{ posi: Position }>`
  ${({ posi }) => {
    const { position, top, bottom, right, left } = posi !== undefined && posi;

    return css`
      display: flex;
      align-items: center;
      white-space: nowrap;

      ${position &&
        (top || left || right || bottom) &&
        css`
          position: ${position};
        `}
      ${top &&
        css`
          top: ${top};
        `}
      ${bottom &&
        css`
          bottom: ${bottom};
        `}
      ${right &&
        css`
          right: ${right};
        `}
      ${left &&
        css`
          left: ${left};
        `}
    `;
  }}
`;
