import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '../Icon';

import './styles.scss';

export const Glyph = (props) => {
  const { glyph, index } = props;

  const copyToClipboard = (value) => {
    console.log('copied value:', value);
  };
  const unicodeToStr = (glyph) => {
    return glyph.codePointAt(0).toString(16);
  };
  if (glyph) {
    return (
      <CopyToClipboard text={glyph} onCopy={() => copyToClipboard(glyph)}>
        <div id={`glyph-${unicodeToStr(glyph)}`} className="glyph">
          <div href={`#glyph-${unicodeToStr(glyph)}`}>
            <span className="glyph-symbol responsive-heading-05">{glyph}</span>
            <div className="glyph-number">{index + 2}</div>
            <div className="glyph-code">{unicodeToStr(glyph)}</div>
            <div className="glyph-action">
              <Icon type="Copy" stroke={1} />
            </div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
  return null;
};

