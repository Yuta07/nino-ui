import * as React from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import { throttle } from 'lodash';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  backgroundColor?: string;
};

export const Tooltip = ({ children, content, backgroundColor = 'SECONDARY' }: Props) => {
  const [isShow, setIsShow] = React.useState(false);
  const [style, setStyle] = React.useState('');
  const [arrow, setArrow] = React.useState('top');
  const [arrowPosi, setArrowPosi] = React.useState(0);
  const [horizontal, setHorizontal] = React.useState(0);
  const [currentPosition, setCurrentposition] = React.useState(0);
  const wrapperRef = React.useRef(null);
  const tooltipRef = React.useRef(null);
  const element = document.createElement('div');
  const themes = useTheme();

  const handleScroll = throttle((): void => {
    const scrollTop: number = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    setCurrentposition(wrapperRef.current.offsetTop - scrollTop);
  }, 100);

  React.useEffect(() => {
    setCurrentposition(wrapperRef.current.offsetTop);
  }, []);

  React.useEffect(() => {
    setHorizontal(wrapperRef.current.offsetLeft);

    if (currentPosition < window.innerHeight / 2) {
      setStyle(`top: ${currentPosition + wrapperRef.current.offsetHeight + 15}px;`);
      setArrow('top');
    } else {
      setStyle(`bottom: ${window.innerHeight - currentPosition + 15}px;`);
      setArrow('bottom');
    }

    document.body.appendChild(element);
    window.addEventListener('scroll', handleScroll, false);

    return () => {
      document.body.removeChild(element);
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [currentPosition, element, handleScroll]);

  const handleMouseEnter = () => {
    setIsShow(true);

    if (tooltipRef.current.offsetWidth < wrapperRef.current.offsetWidth) {
      setArrowPosi(tooltipRef.current.offsetWidth / 2);
    } else {
      setArrowPosi(wrapperRef.current.offsetWidth / 2);
    }

    if (currentPosition < window.innerHeight / 2) {
      setStyle(`top: ${currentPosition + wrapperRef.current.offsetHeight + 15}px;`);
      setArrow('top');
    } else {
      setStyle(`bottom: ${window.innerHeight - currentPosition + 15}px;`);
      setArrow('bottom');
    }
  };

  const handleMouseLeave = () => {
    setIsShow(false);
  };

  const portal = createPortal(
    <Container
      ref={tooltipRef}
      arrow={arrow}
      arrowPosi={arrowPosi}
      horizontal={horizontal}
      isShow={isShow}
      styles={style}
      backgroundColor={backgroundColor}
      themes={themes}
    >
      {content}
    </Container>,
    element
  );

  return (
    <Wrapper ref={wrapperRef} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseLeave}>
      {children}
      {portal}
    </Wrapper>
  );
};

const Wrapper = styled.span``;

const Container = styled.div<{
  isShow: boolean;
  arrow: string;
  arrowPosi: number;
  horizontal: number;
  styles: string;
  backgroundColor: string;
  themes: Theme;
}>`
  ${({ isShow, arrow, arrowPosi, horizontal, styles, backgroundColor, themes }) => {
    const { device, fontSize, palette } = themes;

    return css`
      position: fixed;
      left: ${horizontal}px;
      z-index: 1000;
      visibility: ${isShow ? `visible` : `hidden`};
      opacity: ${isShow ? `1` : `0`};
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      font-size: ${fontSize.SMALL}px;
      background: ${palette[backgroundColor]};
      border: 1px solid ${backgroundColor.indexOf('SECONDARY') !== -1 ? null : 'rgba(40,44,53,0.85)'};
      border-radius: 8px;
      overflow-wrap: break-word;
      ${styles};

      &:before {
        content: '';
        position: absolute;
        z-index: 1001;
        left: ${arrowPosi < 30 ? arrowPosi : arrowPosi / 2}px;

        ${arrow === 'top'
          ? `
            border: 10px solid transparent;
            border-bottom: 10px solid ${
              backgroundColor.indexOf('SECONDARY') !== -1 ? palette[backgroundColor] : 'rgba(40,44,53,0.85)'
            }; 
            bottom: 100%;
            margin-left: -10px;
            `
          : `
            border: 12px solid transparent;
            border-top: 12px solid ${
              backgroundColor.indexOf('SECONDARY') !== -1 ? palette[backgroundColor] : 'rgba(40,44,53,0.85)'
            }; 
            bottom: -20px; 
            margin-left: -12px;
            `}
      }

      &:after {
        content: '';
        position: absolute;
        z-index: 1000;
        left: ${arrowPosi < 30 ? arrowPosi : arrowPosi / 2}px;

        ${arrow === 'top'
          ? `
            border: 12px solid transparent;
            border-bottom: 12px solid ${
              backgroundColor.indexOf('SECONDARY') === -1 ? palette[backgroundColor] : 'rgba(40,44,53,0.85)'
            }; 
            bottom: 100%; 
            margin-left: -12px;
            `
          : `
            border: 10px solid transparent;
            border-top: 10px solid ${
              backgroundColor.indexOf('SECONDARY') === -1 ? palette[backgroundColor] : 'rgba(40,44,53,0.85)'
            }; 
            bottom: -20px; 
            margin-left: -10px;
            `}
      }

      @media screen and ${device.MOBILE} {
        font-size: 10px;
      }
    `;
  }}
`;
