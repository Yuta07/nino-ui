import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  children: string;
  color?: string;
  heading: number;
  line?: string;
  visualLevel?: number;
};

const HeadingPresenter = ({ children, color = 'MAIN', heading, line, visualLevel }: Props) => {
  const themes = useTheme();

  const level = Math.max(1, Math.min(6, heading));
  visualLevel = typeof visualLevel !== 'undefined' ? visualLevel : level;

  let headingNode: React.ReactNode;
  switch (heading) {
    case 1:
      headingNode = (
        <Heading1 color={color} line={line} visualLevel={visualLevel} theme={themes}>
          {children}
        </Heading1>
      );
      break;
    case 2:
      headingNode = (
        <Heading2 color={color} line={line} visualLevel={visualLevel} theme={themes}>
          {children}
        </Heading2>
      );
      break;
    case 3:
      headingNode = (
        <Heading3 color={color} line={line} visualLevel={visualLevel} theme={themes}>
          {children}
        </Heading3>
      );
      break;
    case 4:
      headingNode = (
        <Heading4 color={color} line={line} visualLevel={visualLevel} theme={themes}>
          {children}
        </Heading4>
      );
      break;
    case 5:
      headingNode = (
        <Heading5 color={color} line={line} visualLevel={visualLevel} theme={themes}>
          {children}
        </Heading5>
      );
      break;
    default:
      break;
  }

  return <>{headingNode}</>;
};

export const Heading = ({ ...props }: Props) => <HeadingPresenter {...props} />;

const BaseHeading = css`
  font-weight: 600;
  line-height: 1.5;
`;

const HeadingSize1 = css`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const HeadingSize2 = css`
  font-size: 1.75rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const HeadingSize3 = css`
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const HeadingSize4 = css`
  font-size: 1.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeadingSize5 = css`
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const convertHeading = (level: number): any => {
  let headingLevel: any;
  switch (level) {
    case 1:
      headingLevel = HeadingSize1;
      break;
    case 2:
      headingLevel = HeadingSize2;
      break;
    case 3:
      headingLevel = HeadingSize3;
      break;
    case 4:
      headingLevel = HeadingSize4;
      break;
    case 5:
      headingLevel = HeadingSize5;
      break;
    default:
      break;
  }
  return headingLevel;
};

const HeadingSideLined = css`
  position: relative;
  padding: 0 0 0 0.75rem;

  &:before {
    position: absolute;
    top: 0px;
    left: 0px;
    content: '';
    display: inline-block;
    width: 4px;
    height: 100%;
    border-radius: 6px;
  }
`;

const Heading1 = styled.h1<{ color: Props['color']; line: string; visualLevel: number; theme: Theme }>`
  ${({ color, line, visualLevel, theme }) => {
    const { palette } = theme;
    const visual = convertHeading(visualLevel);

    return css`
      ${BaseHeading};
      ${visual};
      ${line === 'under'
        ? `padding: 0 0 0.25rem 0; border-bottom: 2px solid ${palette[color]};`
        : line === 'side'
        ? `${HeadingSideLined}; &:before { background: ${palette[color]}; }`
        : null};
    `;
  }}
`;

const Heading2 = styled.h2<{ color: Props['color']; line: string; visualLevel: number; theme: Theme }>`
  ${({ color, line, visualLevel, theme }) => {
    const { palette } = theme;
    const visual = convertHeading(visualLevel);

    return css`
      ${BaseHeading};
      ${visual};
      ${line === 'under'
        ? `padding: 0 0 0.25rem 0; border-bottom: 2px solid ${palette[color]};`
        : line === 'side'
        ? `${HeadingSideLined}; &:before { background: ${palette[color]}; }`
        : null};
    `;
  }}
`;

const Heading3 = styled.h3<{ color: Props['color']; line: string; visualLevel: number; theme: Theme }>`
  ${({ color, line, visualLevel, theme }) => {
    const { palette } = theme;
    const visual = convertHeading(visualLevel);

    return css`
      ${BaseHeading};
      ${visual};
      ${line === 'under'
        ? `padding: 0 0 0.25rem 0; border-bottom: 2px solid ${palette[color]};`
        : line === 'side'
        ? `${HeadingSideLined}; &:before { background: ${palette[color]}; }`
        : null};
    `;
  }}
`;

const Heading4 = styled.h4<{ color: Props['color']; line: string; visualLevel: number; theme: Theme }>`
  ${({ color, line, visualLevel, theme }) => {
    const { palette } = theme;
    const visual = convertHeading(visualLevel);

    return css`
      ${BaseHeading};
      ${visual};
      ${line === 'under'
        ? `padding: 0 0 0.25rem 0; border-bottom: 2px solid ${palette[color]};`
        : line === 'side'
        ? `${HeadingSideLined}; &:before { background: ${palette[color]}; }`
        : null};
    `;
  }}
`;

const Heading5 = styled.h5<{ color: Props['color']; line: string; visualLevel: number; theme: Theme }>`
  ${({ color, line, visualLevel, theme }) => {
    const { palette } = theme;
    const visual = convertHeading(visualLevel);

    return css`
      ${BaseHeading};
      ${visual};
      ${line === 'under'
        ? `padding: 0 0 0.25rem 0; border-bottom: 2px solid ${palette[color]};`
        : line === 'side'
        ? `${HeadingSideLined}; &:before { background: ${palette[color]}; }`
        : null};
    `;
  }}
`;
