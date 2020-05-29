import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Toast } from './Toast';
import { Input } from '../Input';
import { Button } from '../Button';

type Props = {
  type: 'SUCCESS' | 'INFO' | 'WARNING' | 'DANGER';
  text: string;
  visible: boolean;
};

const initialSuccessState: Props = {
  type: 'SUCCESS',
  text: '',
  visible: false,
};
const initialInfoState: Props = {
  type: 'INFO',
  text: '',
  visible: false,
};
const initialWarningState: Props = {
  type: 'WARNING',
  text: '',
  visible: false,
};
const initialDangerState: Props = {
  type: 'DANGER',
  text: '',
  visible: false,
};

const Wrapper = () => {
  const [successState, setSuccessState] = React.useState(initialSuccessState);
  const [infoState, setInfoState] = React.useState(initialInfoState);
  const [warningState, setWarningState] = React.useState(initialWarningState);
  const [dangerState, setDangerState] = React.useState(initialDangerState);

  const onChangeToastMessage = (event: { currentTarget: { name: string; value: string } }) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    switch (name) {
      case 'success':
        setSuccessState({ ...successState, text: value });
        break;
      case 'info':
        setInfoState({ ...infoState, text: value });
        break;
      case 'warning':
        setWarningState({ ...warningState, text: value });
        break;
      case 'danger':
        setDangerState({ ...dangerState, text: value });
        break;
      default:
        break;
    }
  };

  const onVisibleToast = (name: string) => {
    switch (name) {
      case 'success':
        setSuccessState({ ...successState, visible: true });
        break;
      case 'info':
        setInfoState({ ...infoState, visible: true });
        break;
      case 'warning':
        setWarningState({ ...warningState, visible: true });
        break;
      case 'danger':
        setDangerState({ ...dangerState, visible: true });
        break;
      default:
        break;
    }
  };

  const handleClose = (name: string) => {
    switch (name) {
      case 'success':
        setSuccessState({ ...successState, visible: false });
        break;
      case 'info':
        setInfoState({ ...infoState, visible: false });
        break;
      case 'warning':
        setWarningState({ ...warningState, visible: false });
        break;
      case 'danger':
        setDangerState({ ...dangerState, visible: false });
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <ToastBox>
        <Input
          type="text"
          name="success"
          width="320px"
          value={successState.text}
          handleInputChange={onChangeToastMessage}
        />
        {successState.visible ? (
          <Toast
            text={successState.text}
            type={successState.type}
            visible={successState.visible}
            width="100%"
            position={{ position: 'fixed', top: '0', left: '0' }}
            handleClose={() => handleClose('success')}
          />
        ) : null}
        <ButtonMargin>
          <Button type="button" background="SUCCESS" handleClick={() => onVisibleToast('success')}>
            success toast
          </Button>
        </ButtonMargin>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="info" width="320px" value={infoState.text} handleInputChange={onChangeToastMessage} />
        {infoState.visible ? (
          <Toast
            text={infoState.text}
            type={infoState.type}
            visible={infoState.visible}
            width="100%"
            position={{ position: 'fixed', top: '0', left: '0' }}
            handleClose={() => handleClose('info')}
          />
        ) : null}
        <ButtonMargin>
          <Button type="button" background="INFO" handleClick={() => onVisibleToast('info')}>
            info toast
          </Button>
        </ButtonMargin>
      </ToastBox>
      <ToastBox>
        <Input
          type="text"
          name="warning"
          width="320px"
          value={warningState.text}
          handleInputChange={onChangeToastMessage}
        />
        {warningState.visible ? (
          <Toast
            text={warningState.text}
            type={warningState.type}
            visible={warningState.visible}
            width="100%"
            position={{ position: 'fixed', bottom: '0', left: '0' }}
            handleClose={() => handleClose('warning')}
          />
        ) : null}
        <ButtonMargin>
          <Button type="button" background="WARNING" handleClick={() => onVisibleToast('warning')}>
            warning toast
          </Button>
        </ButtonMargin>
      </ToastBox>
      <ToastBox>
        <Input
          type="text"
          name="danger"
          width="320px"
          value={dangerState.text}
          handleInputChange={onChangeToastMessage}
        />
        {dangerState.visible ? (
          <Toast
            text={dangerState.text}
            type={dangerState.type}
            visible={dangerState.visible}
            width="100%"
            position={{ position: 'fixed', bottom: '0', left: '0' }}
            handleClose={() => handleClose('danger')}
          />
        ) : null}
        <ButtonMargin>
          <Button type="button" background="DANGER" handleClick={() => onVisibleToast('danger')}>
            danger toast
          </Button>
        </ButtonMargin>
      </ToastBox>
    </Container>
  );
};

storiesOf('Toast', module).add('all', () =>
  React.createElement(() => {
    return <Wrapper />;
  })
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToastBox = styled.div`
  margin: 1rem;
`;

const ButtonMargin = styled.div`
  margin-left: 10px;
  display: inline-block;
`;
