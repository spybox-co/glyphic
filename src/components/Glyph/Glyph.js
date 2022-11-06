import { useContext } from 'react';
import { store } from '../../store.js';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '../Icon';

import './Glyph.scss';

export const Glyph = (props) => {
  const { glyph, index } = props;
  const { state, dispatch } = useContext(store);

  const copyToClipboard = (value) => {
    console.log('copied value:', value, typeof value);


    dispatch({ type: 'copied element', value: value });
    dispatch({ type: 'set copied', value: true });
    console.log(state);
  };
  const unicodeToStr = (glyph) => {
    return glyph.codePointAt(0).toString(16);
  };
  if (glyph) {
    return (
      <CopyToClipboard text={glyph} onCopy={() => copyToClipboard(glyph)}>
        <a id={`glyph-${unicodeToStr(glyph)}`} className="Glyph">
          <div href={`#glyph-${unicodeToStr(glyph)}`}>
            <span className="glyph-symbol responsive-heading-05">{glyph}</span>
            {/* <div className="glyph-number">{index + 1}</div> */}
            <div className="glyph-code">{unicodeToStr(glyph)}</div>
            <div className="glyph-action">
              <Icon type="Copy" stroke={1} />
            </div>
          </div>
        </a>
      </CopyToClipboard>
    );
  }
  return null;
};

