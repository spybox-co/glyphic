import { useContext } from 'react';
import { store } from './store.js';

import { GlyphLibrary } from './modules/GlyphLibrary';
import { Main, Footer } from './layout';
import { Wrapper } from './containers/Wrapper'



import { glyphs } from './utils/glyphData';

import './styles.scss';



const Header = () => {

  return (
    <Wrapper>
      <div className="Head">
        <div className="logo">
          <div className="productive-heading-07">₲L¥₽HI₡</div>
        </div>
        <div className="lead-space">
          <h1 className="responsive-heading-06">Welcome to Glyphic</h1>
          <h2 className="responsive-heading-04">Copy and paste cool symbols</h2>
        </div>
      </div>
    </Wrapper>
  )
}

const App = () => {
  const { state, dispatch } = useContext(store);

  console.log(state);
  
  return (
    <div className="App">
      <Header />
      <Main>
        <GlyphLibrary glyphs={glyphs} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;

