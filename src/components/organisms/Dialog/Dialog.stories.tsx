import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Dialog } from './Dialog';
import { Button } from '../../atoms/Button';

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
    <>
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
      <ButtonMargin>
        <Button type="button" handleClick={() => isOpenDialog('alert')}>
          open Alert Dialog
        </Button>
      </ButtonMargin>
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
      <ButtonMargin>
        <Button type="button" handleClick={() => isOpenDialog('confirm')}>
          show Confirm Dialog
        </Button>
      </ButtonMargin>
    </>
  );
};

storiesOf('Dialog', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const ButtonMargin = styled.div`
  margin: 1.5rem;
`;
