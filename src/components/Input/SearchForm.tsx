import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { IconOnlyButton } from '../Button/IconOnlyButton';

type Props = {
  children?: React.ReactNode;
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  detect?: boolean;
  color?: string;
  border?: boolean;
  width: number;
  height: number;
  iconSize: number;
  handleSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const SearchForm = ({
  children,
  name,
  value,
  placeholder = '',
  autoComplete = 'off',
  detect = false,
  color = 'MAIN',
  border = true,
  width,
  height,
  iconSize,
  handleSearchChange,
  handleSearchFocus,
  handleSearchBlur,
  handleSearchClick,
}: Props) => {
  const theme = useTheme();

  return (
    <Form color={color} border={border} detect={detect} width={width} height={height} themes={theme}>
      <Search
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        readOnly={false}
        width={width - height}
        height={height}
        themes={theme}
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
      />
      <SearchButton height={height}>
        <IconOnlyButton
          iconName="Go-Search"
          iconColor={detect ? color : 'GRAY'}
          iconSize={iconSize}
          width={`${height.toString()}px`}
          height={height}
          color="TRANSPARENT"
          pattern="Go"
          shape="square"
          handleClick={handleSearchClick}
        />
      </SearchButton>
      {children}
    </Form>
  );
};

const Form = styled.div<{
  color: string;
  border: Props['border'];
  detect: Props['detect'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ color, border, detect, width, height, themes }) => {
    const { palette } = themes;
    const borderColor = border ? `2px solid ${palette.GRAY}` : 'none';

    return css`
      position: relative;
      display: inline-flex;
      width: ${width}px;
      height: ${height}px;
      border: ${detect ? `2px solid ${palette[color]}` : borderColor};
      border-radius: 6px;
      box-shadow: none;
    `;
  }}
`;

const Search = styled.input<{
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ width, height, themes }) => {
    const { palette } = themes;

    return css`
      width: ${width}px;
      height: ${height - 8}px;
      color: ${palette.PRIMARY};
      font-size: 16px;
      line-height: 1.4;
      padding: 8px 12px;
      margin: 2px;
      border: none;

      &:focus {
        outline: none;
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${palette.PLACE_HOLDER};
        font-size: 16px;
      }

      :-ms-input-placeholder {
        color: ${palette.PLACE_HOLDER};
        font-size: 16px;
      }
    `;
  }}
`;

const SearchButton = styled.div<{
  height: Props['height'];
}>`
  ${({ height }) => {
    return css`
      position: absolute;
      right: 0;
      z-index: 3000;
      height: ${height - 2}px;
    `;
  }}
`;
