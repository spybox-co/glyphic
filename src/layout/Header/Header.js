import { settings } from '../../utils/data';

import { Wrapper } from '../../containers/Wrapper';
import './Header.scss';


export const Header = () => {

  return (
    <header className="Header" role="banner" aria-hidden="true">
      <Wrapper>
        <div className="Header-container">
          <div className="Heading AppName">
            <div className="responsive-heading-06">{settings.appName}</div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
