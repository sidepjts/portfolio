import React from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation, Textfield} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  return (
      <div>
          <Layout style={{background: 'url(images/img_13_bg.jpg) center / cover'}}>
              <Header transparent title={<span><a className='my-logo' href="/portfolio">Carlo Butelli</a></span>} scroll>
                  <Navigation>
                      <Link to="/about">About Me</Link>
                      <Link to="/expertise">Expertise</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contacts">Contacts</Link>
                      <Link to="/blog">Blog</Link>
                  </Navigation>
                  <div className="header-icons-divider" />
                  <Textfield
                      value=""
                      onChange={() => {}}
                      label="Search"
                      expandable
                      expandableIcon="search"
                  />
              </Header>
              <Drawer title={<span><Link className='my-logo' to="/portfolio">Carlo Butelli</Link></span>}>
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
