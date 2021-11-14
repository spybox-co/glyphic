import { GlyphList, Glyph } from './components/Glyph';

import { glyphs } from './utils/glyphData';

import './styles.scss';



const Header = () => {
  return(
    <div className="Head">
      <div className="logo">₲L¥₽HI₡</div>
      <div className="lead-space">
        <h1>Glyphic</h1>
        <h2>Copy and paste</h2>
      </div>
    </div>
  )
}

const GlyphModule = () => (
  <div className="Glyphs-module">
    
    <GlyphList>
      {glyphs.map((glyph, i) => (
        <Glyph key={i} glyph={glyph} index={i} />
      ))}
    </GlyphList>
  </div>
);


const App = () => {
  return (
    <div className="App">
      <Header />
      <GlyphModule />
    </div>
  );
};

export default App;

