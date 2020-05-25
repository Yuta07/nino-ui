import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Toast } from './Toast';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

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
        <Input
          type="text"
          name="SUCCESS"
          width="320px"
          value={successState.text}
          handleInputChange={onChangeToastMessage}
        />
        {successState.visible ? <Toast text={successState.text} type={successState.type} /> : null}
        <ButtonMargin>
          <Button type="button" height="28px" color="SUCCESS" handleClick={() => onVisibleToast('SUCCESS')}>
            Success PUSH!!
          </Button>
        </ButtonMargin>
      </ToastBox>
      <ToastBox>
        <Input type="text" name="INFO" width="320px" value={infoState.text} handleInputChange={onChangeToastMessage} />
        {infoState.visible ? <Toast text={infoState.text} type={infoState.type} /> : null}
        <ButtonMargin>
          <Button type="button" height="28px" color="INFO" handleClick={() => onVisibleToast('INFO')}>
            Info PUSH!!
          </Button>
        </ButtonMargin>
      </ToastBox>
      <ToastBox>
        <Input
          type="text"
          name="WARNING"
          width="320px"
          value={warningState.text}
          handleInputChange={onChangeToastMessage}
        />
        {warningState.visible ? <Toast text={warningState.text} type={warningState.type} /> : null}
        <ButtonMargin>
          <Button type="button" height="28px" color="WARNING" handleClick={() => onVisibleToast('WARNING')}>
            Warning PUSH!!
          </Button>
        </ButtonMargin>
      </ToastBox>
      <ToastBox>
        <Input
          type="text"
          name="DANGER"
          width="320px"
          value={dangerState.text}
          handleInputChange={onChangeToastMessage}
        />
        {dangerState.visible ? <Toast text={dangerState.text} type={dangerState.type} /> : null}
        <ButtonMargin>
          <Button type="button" height="28px" color="DANGER" handleClick={() => onVisibleToast('DANGER')}>
            Danger PUSH!!
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
  height: 32px;
  margin: 1rem;
`;

const ButtonMargin = styled.div`
  margin-left: 10px;
  display: inline-block;
`;
