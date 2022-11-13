import { settings } from '../../utils/data';

import { Wrapper } from '../../containers/Wrapper';
import './Header.scss';


export const Header = () => {

  return (
    <header className="Header">
      <Wrapper>
        <div className="Header-container">
          <div className="Heading AppName">
            <h1 className="responsive-heading-06">{settings.appName}</h1>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
