import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const Wrapper = () => {
  const [isOpen, setIsCOpen] = React.useState(false);

  const isOpenModal = (): void => {
    setIsCOpen(true);
  };

  const onCloseModal = () => {
    setIsCOpen(false);
  };

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        title="Modal Window"
        position={{ top: 45, left: 50 }}
        content={
          <div>
            <p>
              この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。
              <br />
              この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。
              <br />
              この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。
              <br />
              <a href="https://pigmon.io">Pigmon.io</a>
            </p>
          </div>
        }
        onCloseModal={onCloseModal}
      />
      <button onClick={isOpenModal}>show Modal Window</button>
    </Container>
  );
};

storiesOf('Modal', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div``;
