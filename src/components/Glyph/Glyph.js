import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        <li id={`glyph-${unicodeToStr(glyph)}`} className="glyph">
          <a href={`#glyph-${unicodeToStr(glyph)}`}>
            <span>{glyph}</span>
            <div className="glyph-number">{index + 2}</div>
            <div className="glyph-code">{unicodeToStr(glyph)}</div>
          </a>
        </li>
      </CopyToClipboard>
    );
  }
  return null;
};

