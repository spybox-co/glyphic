import { useContext } from 'react';
import { store } from '../../store.js';




export const CopyNotificator = (props) => {
  const { state, dispatch } = useContext(store);

  return (
    <Wrapper className="Notification-container">

    </Wrapper>
  );
};