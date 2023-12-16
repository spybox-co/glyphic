import { settings } from '../../utils/data';

import { Wrapper } from '../../containers/Wrapper';

import { ArabicToRoman } from '../../utils/helpers.js';

import './Footer.scss';

const romanDate = () => {
  const date = new Date().getFullYear();

  return ArabicToRoman(date);
}


export const Footer = () => (
  <footer className="Footer">
    <Wrapper>
      <div className="Footer-container">
        <p>
          {settings.appName}
        </p>
        <p>{`© ${romanDate()}`}</p>
        <br />
        <p>
          <strong>I d I ™</strong> DOMINIK KIEPUSZEWSKI
        </p>
        <p>° ENJOY</p>
      </div>
    </Wrapper>
  </footer>
);
