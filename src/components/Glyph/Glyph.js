import { useContext } from 'react';
import { store } from '../../store.js';

import Icon from '../Icon';

import './Glyph.scss';

const unicodeToStr = (glyph) => {
  return glyph.codePointAt(0).toString(16);
};



export const Glyph = (props) => {
  const { glyph } = props;
  const { dispatch } = useContext(store);


  const id = `glyph-${unicodeToStr(glyph)}`;
  const symbol = `${unicodeToStr(glyph)}`;

  const copyToClipboard = (value) => {

    // Copy the text inside the text field
    navigator.clipboard.writeText(value);
      
    // console.log('copied value:', value, typeof value);

    dispatch({ type: 'copied element', value: value });
    dispatch({ type: 'set copied', value: true });
  };

  if (glyph) {
    return (
      <div 
        // role="button" 
        // id={id}
        data-glyph-id={id} 
        className="Glyph" 
        // onClick={() => copyToClipboard(glyph)}
      >
        {/* <div className="glyph-aria-id" tabindex="0">
          <span>{glyph}</span>
          <a 
            role="button" 
            href={`#${id}`} 
            onClick={() => copyToClipboard(glyph)}
            aria-label={`Copy glyph to clipboard`}
          />
          
        </div> */}

        {/* <span className="glyph-aria-id" tabindex="0">{glyph}</span> */}
        <a 
          role="button" 
          href={`#${id}`} 
          onClick={() => copyToClipboard(glyph)}
          // tabindex="-1"
        >
          <span className="glyph-symbol responsive-heading-04">{glyph}</span>
          <div className="glyph-code" tabindex="-1" aria-hidden="true">{symbol}</div>
          <div className="glyph-action" tabindex="-1" aria-hidden="true">
            <Icon type="Copy" stroke={1} />
          </div>
        </a>
      </div>
    );
  }
  return null;
};

