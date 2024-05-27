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
    <header role="banner">
      <Wrapper className="Head">
        <div className="logo">
          <div aria-label="Glyphic" className="responsive-heading-04">₲L¥₽HI₡</div>
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
          <h1 className="responsive-heading-06 monoblock" tabindex="0">
            <div aria-hidden="true" tabindex="-1">↘</div>
            Welcome to Glyphic
          </h1>
          <h2 className="responsive-paragraph-03 monoblock" tabindex="0">Copy and paste cool symbols</h2>
          {/* <div className="responsive-paragraph-03 monoblock" aria-hidden="true">↓</div> */}
          
        </div>
      </Wrapper>
    </section>
  )
}

const Navigation = () => {
  const items = [
    { link: "#symbols", title: "Browse symbols", icon: "↓" },
    { link: "#about", title: "About", icon: "→"}
  ]
  return (
    <nav id="top" className="Navigation">
      <Wrapper>
        <ul>
          {items.map(item => 
            <li key={item.title}>
              <a className="NavLink" href={item.link} role="button">
                <span className="responsive-paragraph-02 monoblock">{item.title}</span>
                <span className="glyph responsive-paragraph-02 monoblock" aria-hidden="true">{item.icon}</span>
              </a>
            </li>
          )}
        </ul>
      </Wrapper>
    </nav>
  );
}

const About = () => {
  const description = `Please note that some glyphs may render slightly differently 
  when pasting - or not display at all - depending on the typeface 
  used in your chosen device or application.`


  return(
    <section id="about" className="About">
      <Wrapper>
        <div className="section-container">
          <h2 className="responsive-heading-06 monoblock" tabindex="0">About</h2>
          <div className="content column">
            <div tabindex="0">
              <p className="responsive-paragraph-03 monoblock">
                Glyphic is your one-stop solution for copying glyphs and special characters effortlessly!</p>
              <p className="responsive-paragraph-02">
                Glyphic is a streamlined web application designed to simplify the process of finding and using unique symbols, characters, and glyphs in your projects. 
                Whether you're a designer, developer, writer, or just someone who loves using unique characters, Glyphic is here to make your life easier.
              </p>
            </div>
            
            <div tabindex="0">
              <p aria-label={description} className="responsive-paragraph-02 monoblock">
                <div aria-hidden="true">{`×`}</div>
                ₽lea$e №te th₳t some ₲lyph$ may render slightly differently 
                when pasting—or not display at all—depending on the typeface 
                used in your chosen device or application.
              </p>
              <p className="responsive-paragraph-02 monoblock">
                <div aria-hidden="true">{`●`}</div> 
                Enjoy!
              </p>
              <a className="Link" href="#top" role="button">
                <span className="responsive-paragraph-02 monoblock">Back to top</span>
                <span className="glyph responsive-paragraph-02 monoblock" aria-hidden="true">↑</span>
              </a>
            </div>
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
      <Navigation />
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


