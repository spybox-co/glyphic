import { GlyphLibrary } from './modules/GlyphLibrary';
import { Footer } from './layout';

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

const App = () => {
  return (
    <div className="App">
      <Header />
      <GlyphLibrary glyphs={glyphs} />
      <Footer />
    </div>
  );
};

export default App;

