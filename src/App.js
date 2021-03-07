import { GlyphList, Glyph } from './components/Glyph';

import { glyphs } from './utils/glyphData';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './styles.scss';

const App = () => {
  const copyToClipboard = (value) => {
    console.log('copied value:', value);
  };
  const unicodeToStr = (glyph) => {
    return glyph.codePointAt(0).toString(16);
  };
  return (
    <div className="App">
      <h1>Glyphic</h1>
      <h2>Copy and paste</h2>

      <GlyphModule />

      {/* <ul className="glyph-list">
        {glyphs.map((glyph, i) => (
          <CopyToClipboard
            key={i}
            text={glyph}
            onCopy={() => copyToClipboard(glyph)}>
            <li id={`glyph-${unicodeToStr(glyph)}`} className="glyph">
              <a href={`#glyph-${unicodeToStr(glyph)}`}>
                <span>{glyph}</span>
                <div className="glyph-number">{i + 2}</div>
                <div className="glyph-code">{unicodeToStr(glyph)}</div>
              </a>
            </li>
          </CopyToClipboard>
        ))}
      </ul> */}
    </div>
  );
};

export default App;

const GlyphModule = () => (
  <GlyphList>
    {glyphs.map((glyph, i) => (
      <Glyph key={i} glyph={glyph} index={i} />
    ))}
  </GlyphList>
);
