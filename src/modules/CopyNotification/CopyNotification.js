import { useContext, useEffect } from 'react';
import { store } from '../../store.js';

import { Wrapper } from '../../containers/Wrapper'

import './CopyNotification.scss';



export const CopyNotification = () => {
  const { state, dispatch } = useContext(store);

  const { isCopied, copiedElement } = state;

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        dispatch({ type: 'set copied', value: false });
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCopied])

  const NotificationContent = () => {
    return (
      <Wrapper className="Notification-container">
        <div className="Notification-content">
          Copied element to clipboard <strong>{copiedElement}</strong>
        </div> 
      </Wrapper>
    )
  }

  return (
    <div className="Notification">
      {isCopied && <NotificationContent />}
    </div>
  );
};