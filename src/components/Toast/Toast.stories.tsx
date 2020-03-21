import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Toast } from './Toast';

type Toast = 'SUCCESS' | 'INFO' | 'WARNING' | 'DANGER';

type Props = {
  type: Toast;
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
      case 'SUCCESS':
        setSuccessState({ ...successState, text: value });
        break;
      case 'INFO':
        setInfoState({ ...infoState, text: value });
        break;
      case 'WARNING':
        setWarningState({ ...warningState, text: value });
        break;
      case 'DANGER':
        setDangerState({ ...dangerState, text: value });
        break;
      default:
        break;
    }
  };

  const onVisibleToast = (name: string) => {
    switch (name) {
      case 'SUCCESS':
        setSuccessState({ ...successState, visible: true });
        break;
      case 'INFO':
        setInfoState({ ...infoState, visible: true });
        break;
      case 'WARNING':
        setWarningState({ ...warningState, visible: true });
        break;
      case 'DANGER':
        setDangerState({ ...dangerState, visible: true });
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <ToastBox>
        <Input type="text" name="SUCCESS" value={successState.text} onChange={onChangeToastMessage} />
        <Toast {...successState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('SUCCESS')}>Submit</VisibleButton>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="INFO" value={infoState.text} onChange={onChangeToastMessage} />
        <Toast {...infoState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('INFO')}>Submit</VisibleButton>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="WARNING" value={warningState.text} onChange={onChangeToastMessage} />
        <Toast {...warningState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('WARNING')}>Submit</VisibleButton>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="DANGER" value={dangerState.text} onChange={onChangeToastMessage} />
        <Toast {...dangerState} onCloseToast={onCloseToast} />
        <VisibleButton onClick={() => onVisibleToast('DANGER')}>Submit</VisibleButton>
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
