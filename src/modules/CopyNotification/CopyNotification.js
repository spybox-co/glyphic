import { useContext, useState, useEffect } from 'react';
import { store } from '../../store.js';

import { Wrapper } from '../../containers/Wrapper'

import './CopyNotification.scss';



export const CopyNotification = (props) => {
  const { state, dispatch } = useContext(store);
  // const [ isCopied, setCopied ] = useState(state.isCopied)

  const { isCopied, copiedElement } = state;

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        dispatch({ type: 'set copied', value: false });
      }, 2000);
    }
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