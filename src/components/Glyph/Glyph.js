import { useContext, useState, useEffect } from 'react';
import { store } from '../../store.js';

import Icon from '../Icon';

import './Glyph.scss';

const unicodeToStr = (glyph) => {
  return glyph.codePointAt(0).toString(16);
};



export const Glyph = (props) => {
  const { glyph, index } = props;
  const { state, dispatch } = useContext(store);

  const [ symbol, setSymbol ] = useState(null);


  const id = `glyph-${unicodeToStr(glyph)}`;

  const copyToClipboard = (value) => {

    // Copy the text inside the text field
    navigator.clipboard.writeText(value);
      
    // console.log('copied value:', value, typeof value);

    dispatch({ type: 'copied element', value: value });
    dispatch({ type: 'set copied', value: true });
  };

  useEffect(() => {
    setSymbol(`${unicodeToStr(glyph)}`);
  }, [])

  if (glyph) {
    return (
      <a id={id} className="Glyph" onClick={() => copyToClipboard(glyph)}>
        <div href={`#${id}`}>
          <span className="glyph-symbol responsive-heading-05">{glyph}</span>
          {/* <div className="glyph-number">{index + 1}</div> */}
          <div className="glyph-code">{symbol}</div>
          <div className="glyph-action">
            <Icon type="Copy" stroke={1} />
          </div>
        </div>
      </a>
    );
  }
  return null;
};

