import { React, useContext } from 'react';
import { store } from './store.js';

import { GlyphLibrary } from './modules/GlyphLibrary';
import { CopyNotification } from './modules/CopyNotification';
import { Main, Footer } from './layout';
import { Wrapper } from './containers/Wrapper'



import { glyphs } from './utils/glyphData';

import './styles.scss';



const Header = () => {

  return (
    <header>
      <Wrapper className="Head">
        <div className="logo">
          <h1 className="responsive-heading-04">₲L¥₽HI₡</h1>
        </div>
      </Wrapper>
    </header>
  )
}

const LeadSpace = () => {
  return (
    <section>
      <Wrapper className="lead-space column">
        <h1 className="responsive-heading-06 monoblock">Welcome to Glyphic</h1>
        <h2 className="responsive-paragraph-03 monoblock">Copy and paste cool symbols</h2>
        <div className="responsive-paragraph-03 monoblock">↓</div>
      </Wrapper>
    </section>
  )
}

const App = () => {
  const { state } = useContext(store);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <LeadSpace />
      <Main>
        <GlyphLibrary glyphs={glyphs} />
      </Main>
      <Footer />
      <CopyNotification />
    </div>
  );
};

export default App;