import React from 'react';
import {Content, Drawer, Header, Layout, Navigation, Textfield} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  return (
      <div style={{height: '300px', position: 'relative'}}>
          <Layout style={{background: 'url(images/sfondo.jpg) center / cover'}}>
              <Header transparent title={<span><Link to="/">My Portfolio</Link></span>} style={{color: 'white'}}>
                  <Navigation>
                      <Link to="/about">About Me</Link>
                      <Link to="/expertise">Expertise</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contacts">Contacts</Link>
                      <Link to="/blog">Blog</Link>
                  </Navigation>
                  <Textfield
                      value=""
                      onChange={() => {}}
                      label="Search"
                      expandable
                      expandableIcon="search"
                  />
              </Header>
              <Drawer title="My Portfolio">
                  <Navigation>
                      <Link to="/about">About Me</Link>
                      <Link to="/expertise">Expertise</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contacts">Contacts</Link>
                      <Link to="/blog">Blog</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content">
                      <Main />
                  </div>
              </Content>
          </Layout>
      </div>
  )
}

export default App;
