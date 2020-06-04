import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button';

const Wrapper = () => {
  const [isOpen, setIsCOpen] = React.useState(false);

  const isOpenModal = () => {
    setIsCOpen(true);
  };

  const onCloseModal = () => {
    setIsCOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        title="Modal Window"
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
      <Button type="button" height="32px" handleClick={isOpenModal}>
        show Modal Window
      </Button>
    </>
  );
};

storiesOf('Modal', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);
