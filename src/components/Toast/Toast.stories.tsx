import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Toast } from './Toast';

type Toast = 'success' | 'info' | 'warning' | 'danger';

type Props = {
  type: Toast;
  text: string;
  visible: boolean;
};

const initialSuccessState: Props = {
  type: 'success',
  text: '',
  visible: false,
};
const initialInfoState: Props = {
  type: 'info',
  text: '',
  visible: false,
};
const initialWarningState: Props = {
  type: 'warning',
  text: '',
  visible: false,
};
const initialDangerState: Props = {
  type: 'danger',
  text: '',
  visible: false,
};

const Wrapper = () => {
  const [successState, setSuccessState] = React.useState(initialSuccessState);
  const [infoState, setInfoState] = React.useState(initialInfoState);
  const [warningState, setWarningState] = React.useState(initialWarningState);
  const [dangerState, setDangerState] = React.useState(initialDangerState);

  const onCloseToast = () => {
    setSuccessState({ ...successState, visible: false });
    setInfoState({ ...infoState, visible: false });
    setWarningState({ ...warningState, visible: false });
    setDangerState({ ...dangerState, visible: false });
  };

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

  return (
    <Container>
      <ToastBox>
        <Input type="text" name="success" value={successState.text} onChange={onChangeToastMessage} />
        <Toast {...successState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('success')}>Submit</VisibleButton>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="info" value={infoState.text} onChange={onChangeToastMessage} />
        <Toast {...infoState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('info')}>Submit</VisibleButton>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="warning" value={warningState.text} onChange={onChangeToastMessage} />
        <Toast {...warningState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('warning')}>Submit</VisibleButton>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="danger" value={dangerState.text} onChange={onChangeToastMessage} />
        <Toast {...dangerState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('danger')}>Submit</VisibleButton>
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
  height: 32px;
  margin: 1rem;
`;

const Input = styled.input`
  width: 240px;
  height: 32px;
  padding: 4px;
  margin-right: 8px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #b5b5b5;
`;

const VisibleButton = styled.button`
  height: 30px;
  padding: 4px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;
