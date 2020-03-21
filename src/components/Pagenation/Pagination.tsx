import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';
import { TypIcon } from '../Icon/TypIcon';

type Props = {
  isBackFirst?: boolean;
  isGoLast?: boolean;
  currentPage: number;
  total: number;
  everyNumCases?: number;
  range?: number;
  color?: string;
  size: number;
  handleClickPageNum: (pageNum: number) => void;
};

export const Pagination = ({
  isBackFirst = false,
  isGoLast = false,
  currentPage,
  total,
  everyNumCases = 20,
  range = 4,
  color = 'MAIN',
  size,
  handleClickPageNum,
}: Props) => {
  const theme = useTheme();

  const totalPageNum: number =
    total % everyNumCases > 0 ? Math.floor(total / everyNumCases) + 1 : total / everyNumCases;

  let isBackFirstButton: JSX.Element, isGoLastButton: JSX.Element;

  if (isBackFirst) {
    isBackFirstButton = <TypIcon name="Ti-MediaRewind" size={16} color={theme.palette.SECONDARY} />;
  }

  if (isGoLast) {
    isGoLastButton = <TypIcon name="Ti-MediaFastForward" size={16} color={theme.palette.SECONDARY} />;
  }

  const minDisplayPageNum = currentPage - range > 0 ? currentPage - range : 1;
  const maxDisplayPageNum = currentPage + range < totalPageNum ? currentPage + range : totalPageNum;

  const onClickPageNum = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumb: number, arrow?: string) => {
    event.preventDefault();
    switch (arrow) {
      case 'isPrev':
        if (1 < currentPage) handleClickPageNum(pageNumb);
        break;
      case 'isNext':
        if (currentPage < totalPageNum) handleClickPageNum(pageNumb);
        break;
      default:
        handleClickPageNum(pageNumb);
        break;
    }
  };

  const items = [];
  const renderPaginationItems = (maxDisplayNum: number) => {
    for (let i = minDisplayPageNum; i <= maxDisplayNum; i++) {
      items.push(
        <PageList key={i} size={size} themes={theme}>
          <Button
            href="#"
            active={currentPage === i ? true : false}
            color={color}
            themes={theme}
            round={false}
            onClick={e => onClickPageNum(e, i)}
          >
            <Item>{i}</Item>
          </Button>
        </PageList>
      );
    }
    return items;
  };

  return (
    <>
      <UnOrderedPageList>
        {isBackFirst ? (
          <PageList key="first" size={size} themes={theme}>
            <Button
              href="#"
              color={color}
              themes={theme}
              disable={currentPage === 1}
              round={true}
              position="first"
              onClick={e => onClickPageNum(e, 1)}
            >
              {isBackFirstButton}
            </Button>
          </PageList>
        ) : null}
        <PageList key="prev" size={size} themes={theme}>
          <Button
            href="#"
            color={color}
            themes={theme}
            disable={currentPage === 1}
            round={!isBackFirst ? true : false}
            position="first"
            onClick={e => onClickPageNum(e, currentPage - 1, 'isPrev')}
          >
            <TypIcon name="Ti-MediaPlayReverse" size={16} color={theme.palette.SECONDARY} />
          </Button>
        </PageList>
        {renderPaginationItems(maxDisplayPageNum)}

        <PageList key="next" size={size} themes={theme}>
          <Button
            href="#"
            color={color}
            themes={theme}
            disable={currentPage === totalPageNum}
            round={!isGoLast ? true : false}
            position="last"
            onClick={e => onClickPageNum(e, currentPage + 1, 'isNext')}
          >
            <TypIcon name="Ti-MediaPlay" size={16} color={theme.palette.SECONDARY} />
          </Button>
        </PageList>
        {isGoLast ? (
          <PageList key="last" size={size} themes={theme}>
            <Button
              href="#"
              color={color}
              themes={theme}
              disable={currentPage === totalPageNum}
              round={true}
              position="last"
              onClick={e => onClickPageNum(e, totalPageNum)}
            >
              {isGoLastButton}
            </Button>
          </PageList>
        ) : null}
      </UnOrderedPageList>
    </>
  );
};

const UnOrderedPageList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const PageList = styled.li<{ size: Props['size']; themes: Theme }>`
  ${({ size, themes }) => {
    const { palette } = themes;

    return css`
      width: ${size}px;
      height: ${size}px;
      list-style: none;
      border: 1px solid ${palette['SECONDARY']};
    `;
  }}
`;

const Button = styled.a<{
  active?: boolean;
  color: Props['color'];
  themes: Theme;
  disable?: boolean;
  round: boolean;
  position?: string;
}>`
  ${({ active, color, themes, round, position = '' }) => {
    const { palette } = themes;

    return css`
      color: ${palette.SECONDARY};
      background: ${active ? palette[color] : palette.GRAY};
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      ${round && position === 'first' ? 'border-top-left-radius: 6px; border-bottom-left-radius: 6px;' : null};

      ${round && position === 'last' ? 'border-top-right-radius: 6px; border-bottom-right-radius: 6px;' : null};

      &:hover {
        background: ${palette[color]};
        transition: 0.2s;
      }
    `;
  }}
`;

const Item = styled.span`
  color: #fefefe;
`;
