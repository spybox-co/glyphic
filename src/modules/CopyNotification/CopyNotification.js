import { useContext } from 'react';
import { store } from '../../store.js';

import { Wrapper } from '../../containers/Wrapper'




export const CopyNotification = (props) => {
  const { state, dispatch } = useContext(store);

  const NotificationContent = () => {
    return (
      <Wrapper className="Notification-container">
        Copied element to clipboard
      </Wrapper>
    )
  }

  return (
    <div className="Notification">
      {state && state.isCopied && <NotificationContent />}
    </div>
  );
};