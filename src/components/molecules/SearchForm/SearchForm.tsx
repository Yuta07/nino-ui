import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { Input, Props } from '../../atoms/Input/Input';
import { GithubIcon } from '../../atoms/Icon';

type Custom = {
  detect?: boolean;
  handleClick?: () => void;
};

type CustomProps = Props & Custom;

export const SearchForm = ({ detect = false, color = 'MAIN', height, handleClick, ...props }: CustomProps) => {
  const theme = useTheme();

  return (
    <Form>
      <InputContainer>
        <Input color={color} height={height} {...props} />
      </InputContainer>
      <SearchButton color={color} height={height} themes={theme}>
        <GithubIcon
          name="Go-Search"
          color={detect ? theme.palette[color] : theme.palette.GRAY}
          size={16}
          onClick={handleClick}
        />
      </SearchButton>
    </Form>
  );
};

const Form = styled.div`
  position: relative;
  width: 100%;
`;

const InputContainer = styled.div``;

const SearchButton = styled.div<{
  color: CustomProps['color'];
  height: CustomProps['height'];
  themes: Theme;
}>`
  ${({ color, height, themes }) => {
    const { palette } = themes;

    return css`
      position: absolute;
      top: 50%;
      right: 10px;
      z-index: 3000;
      display: inline-flex;
      height: ${height ? height : 'auto'};
      transform: translateY(-50%);
      cursor: pointer;

      &:hover {
        * {
          color: ${palette[color]};
        }
      }
    `;
  }}
`;
