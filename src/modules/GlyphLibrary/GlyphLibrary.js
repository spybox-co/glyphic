import { Glyph } from '../../components/Glyph';
import { Wrapper } from '../../containers/Wrapper';
import './styles.scss';

export const GlyphLibrary = (props) => {
  const { glyphs } = props;

  return (
    <Wrapper className="Gallery-module">
      <div className="Glyphs-module">
        <ul className="glyph-library">
          {glyphs && glyphs.map((glyph, i) => (
            <li key={i} className="Card aspect-ratio-1-1">
              <div className="Card-inside">
                <div className="Card-object">
                  <Glyph glyph={glyph} index={i} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

