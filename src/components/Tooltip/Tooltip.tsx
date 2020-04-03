import * as React from 'react';
import styled, { css } from 'styled-components';
import { throttle } from 'lodash';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export const Tooltip = ({ children, content }: Props) => {
  const [state, setstate] = React.useState(false);
  const [currentPosition, setCurrentposition] = React.useState(0);
  const [wrapperOffsetHeight, setWrapperOffsetHeight] = React.useState(0);
  const wrapperRef = React.useRef(null);
  const tooltipRef = React.useRef(null);
  const themes = useTheme();

  React.useEffect(() => {
    const handleScroll = throttle((): void => {
      const scrollTop: number = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      setCurrentposition(scrollTop);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPosition]);

  React.useEffect(() => {
    if (wrapperRef.current && tooltipRef.current) {
      setWrapperOffsetHeight(wrapperRef.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = () => {
    setstate(true);
  };

  const handleMouseLeave = () => {
    setstate(false);
  };

  let position = 'top';
  if (wrapperRef.current && tooltipRef.current) {
    const distanceTop = wrapperRef.current.offsetTop - currentPosition;
    if (distanceTop < tooltipRef.current.offsetHeight) {
      position = 'bottom';
    }
  }

  return (
    <Wrapper ref={wrapperRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
      <Container ref={tooltipRef} state={state} position={position} height={wrapperOffsetHeight} themes={themes}>
        {content}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
`;

const Container = styled.div<{
  state: boolean;
  position: string;
  height: number;
  themes: Theme;
}>`
  ${({ state, position, height, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      position: absolute;
      left: -50%;
      z-index: 1000;
      font-size: ${fontSize.SMALL}px;
      color: ${palette.SECONDARY};
      background: rgba(40, 44, 53, 0.85);
      border-radius: 8px;
      width: 120px;
      padding: 10px;
      overflow-wrap: break-word;
      visibility: ${state ? `visible` : `hidden`};
      opacity: ${state ? `1` : `0`};
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;

      ${position === 'top' ? `top: ${-height - 50}px` : `bottom: ${-height - 50}px;`}

      &:before {
        content: '';
        position: absolute;
        z-index: 1000;
        left: 50%;
        border: 10px solid transparent;
        margin-left: -10px;

        ${position === 'top'
          ? `border-top: 10px solid rgba(40,44,53,0.85); top: 100%;`
          : `border-bottom: 10px solid rgba(40,44,53,0.85); top: -20px;`}
      }

      @media screen and ${device.MOBILE} {
        top: -70px;
        font-size: 10px;
        width: 100px;
      }
    `;
  }}
`;
