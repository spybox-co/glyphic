import { settings } from '../../utils/data';

import { Wrapper } from '../../containers/Wrapper';

import { ArabicToRoman } from '../../utils/helpers.js';

import './Footer.scss';

const date = new Date().getFullYear();

const romanDate = () => {
  return ArabicToRoman(date);
}

export const Footer = () => (
  <footer className="Footer" tabindex="0">
    <Wrapper>
      <div className="Footer-container">
        <p>
          {settings.appName}
        </p>
        <p aria-label={`Copyright ${date}`}>{`© ${romanDate()}`}</p>
        <br />
        <p>
          <strong aria-hidden="true">I d I ™</strong> DOMINIK KIEPUSZEWSKI
        </p>
        <p aria-hidden="true">° ENJOY</p>
      </div>
    </Wrapper>
  </footer>
);
