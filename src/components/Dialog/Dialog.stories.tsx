import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Dialog } from './Dialog';

const Wrapper = () => {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = React.useState(false);

  const isOpenDialog = (type: string): void => {
    switch (type) {
      case 'alert':
        setIsAlertDialogOpen(true);
        break;
      case 'confirm':
        setIsConfirmDialogOpen(true);
        break;
      default:
    }
  };

  const onCloseAlertDialog = () => {
    setIsAlertDialogOpen(false);
  };

  const onCloseConfirmDialog = () => {
    setIsConfirmDialogOpen(false);
  };

  return (
    <Container>
      <Dialog
        isOpen={isAlertDialogOpen}
        title="AlertDialog"
        type="info"
        content={
          <p>
            この文章はダミーテキストです。この文章はダミーテキストです。
            <br />
            この文章はダミーテキストです。この文章はダミーテキストです。
            <br />
            この文章はダミーテキストです。この文章はダミーテキストです。
          </p>
        }
        closeText="閉じる"
        onCloseDialog={onCloseAlertDialog}
      />
      <button onClick={() => isOpenDialog('alert')}>Open Alert Dialog</button>
      <Dialog
        isOpen={isConfirmDialogOpen}
        title="ConfirmDialog"
        type="warning"
        content={
          <p>
            この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。
            <br />
            この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。
            <br />
            この文章はダミーテキストです。文字の大きさ・字間・行間などを確認するために入れています。
          </p>
        }
        activeText="はい"
        closeText="いいえ"
        onCloseDialog={onCloseConfirmDialog}
        onActionDialog={onCloseConfirmDialog}
      />
      <button onClick={() => isOpenDialog('confirm')}>show Confirm Dialog</button>
    </Container>
  );
};

storiesOf('Dialog', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div``;
