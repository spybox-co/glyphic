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
          <div className="productive-heading-07">₲L¥₽HI₡</div>
        </div>
      </Wrapper>
    </header>
  )
}

const LeadSpace = () => {
  return (
    <section>
      <Wrapper className="lead-space">
        <h1 className="responsive-heading-02">Welcome to Glyphic</h1>
        <h2 className="responsive-heading-04">Copy and paste cool symbols</h2>
        <div className="responsive-heading-06">↓</div>
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