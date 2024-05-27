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
      <Wrapper className="Leadspace">
        <div className="Leadspace-container column">
          <h1 className="responsive-heading-06 monoblock">
          <div>↘</div>
            Welcome to Glyphic
          </h1>
          <h2 className="responsive-paragraph-03 monoblock">Copy and paste cool symbols</h2>
          <div className="responsive-paragraph-03 monoblock">↓</div>
        </div>
      </Wrapper>
    </section>
  )
}

const About = () => {
  const description = `Please note that some glyphs may render slightly differently 
  when pasting - or not display at all - depending on the typeface 
  used in your chosen device or application.`


  return(
    <section id="about" className="About">
      <Wrapper>
        <div className="section-container">
          {/* <h2>About</h2> */}
          <div className="content column">
            <p aria={description} className="responsive-paragraph-02 monoblock">
              <div>{`×`}</div>
              ₽lea$e №te th₳t some ₲lyph$ may render slightly differently 
              when pasting—or not display at all—depending on the typeface 
              used in your chosen device or application.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

const App = () => {
  const { state } = useContext(store);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <LeadSpace />
      <Main>
        <GlyphLibrary glyphs={glyphs} />
        <About />
      </Main>
      <Footer />
      <CopyNotification />
    </div>
  );
};

export default App;


