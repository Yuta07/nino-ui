import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const HoverInteractionPresenter = ({ children }: Props) => {
  return <Span>{children}</Span>;
};

const HoverInteractionContainer = ({ presenter, children }) => {
  children = React.Children.map(children, child => {
    if (child.type.displayName === 'Tip') {
      const grandChild = React.Children.only(child.props.children);
      console.log(React.Children.only(child.props.children), grandChild);
      return React.cloneElement(grandChild);
    } else if (child.type.displayName === 'Marker') {
      const grandChild = child.props.children;
      console.log(React.Children.only(child.props.children), grandChild);
      return React.cloneElement(grandChild);
    }
    return child;
  });
  return presenter({ children });
};

export const HoverInteraction = ({ ...props }: Props) => {
  return (
    <HoverInteractionContainer
      presenter={presenterProps => <HoverInteractionPresenter {...presenterProps} />}
      {...props}
    />
  );
};

export const Tip = ({ children }: Props) => {
  return <>{children}</>;
};
export const Marker = ({ children }: Props) => {
  return <>{children}</>;
};

const Span = styled.span`
  ${() => {
    return css`
      display: inline-block;
      position: relative;

      > *:first-child + * {
        display: none;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%) translateY(-12px);
        white-space: nowrap;
      }

      > *:first-child:hover + * {
        display: inline-block;
      }
    `;
  }}
`;
