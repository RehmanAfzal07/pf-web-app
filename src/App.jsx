import React, { useEffect, useState } from 'react';
import { Layout, BackTop, Button, Skeleton, Row, Col, Drawer } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Skills from './components/Skills';
import HireMe from './components/HireMe';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Education from './components/Education';
import './App.css';
import {
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  ProjectOutlined,
  SolutionOutlined,
  UpOutlined,
  SunOutlined,
  MoonOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { MdCastForEducation } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { BounceLoader } from 'react-spinners';

const { Header } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 900,
      easing: 'ease-in',
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrolled);

      if (window.innerWidth < 768) {
        if (scrollTop > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const skeletonLoader = (
    <div className="skeleton-container">
      <h1 className="loading">Loading....</h1>
      <Row gutter={2}>
        <Col>
          <Col>
            <Skeleton.Button active shape="circle" style={{ width: 30, margin: 20 }} />
          </Col>
          <Col>
            <Skeleton.Button active shape="circle" style={{ width: 30, margin: 20 }} />
          </Col>
          <Col>
            <Skeleton.Button active shape="circle" style={{ width: 30, margin: 20 }} />
          </Col>
          <Col>
            <Skeleton.Button active shape="circle" style={{ width: 30, margin: 20 }} />
          </Col>
        </Col>
        <Skeleton.Avatar active size="large" shape="square" style={{ margin: 10, width: 290, height: 300 }} />
        <Col span={10}>
          <Skeleton.Input active size="large" style={{ width: '40%', margin: 10 }} />
          <div>
            <Skeleton.Input active size="large" style={{ width: '40%', margin: 10 }} />
          </div>
          <Skeleton active paragraph={{ rows: 4, width: 100 }} />
          <div>
            <Skeleton.Button active style={{ width: 80, margin: 10 }} />
            <Skeleton.Button active style={{ width: 80, margin: 10 }} />
          </div>
        </Col>
      </Row>
    </div>
  );

  if (isLoading) {
    return (
      <div className="loader-container">
        <BounceLoader color={"#00c3ffee"} loading={isLoading} size={100} />
        {skeletonLoader}
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="container-header">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${scrollPercentage}%` }}></div>
        </div>

        <Header className="header">
          <div className="logo">
            <img src="./assets/Portfolio.png" alt="Logo" />
          </div>

          <Button className="menu-button" onClick={showDrawer} icon={<MenuOutlined />} />

          <nav className="nav desktop-nav">
            <ul className="nav-items">
              <li><a href="#home"><HomeOutlined /></a></li>
              <li><a href="#education"><MdCastForEducation /></a></li>
              <li><a href="#certification"><FileOutlined /></a></li>
              <li><a href="#skills"><TeamOutlined /></a></li>
              <li><a href="#projects"><ProjectOutlined /></a></li>
              <li><a href="#hireme"><SolutionOutlined /></a></li>
              <li>
                <Button onClick={toggleTheme} style={{ backgroundColor: "rgba(0,0,0,0.099)" }}>
                  {theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
                </Button>
              </li>
            </ul>
          </nav>

          <Drawer
            title="Navigation"
            placement="left"
            onClose={closeDrawer}
            visible={isDrawerVisible}
            className="sidebar-drawer"
          >
            <ul className="drawer-nav-items">
              <li><a href="#home" onClick={closeDrawer}><HomeOutlined /> Home</a></li>
              <li><a href="#education" onClick={closeDrawer}><MdCastForEducation /> Education</a></li>
              <li><a href="#certification" onClick={closeDrawer}><FileOutlined /> Certification</a></li>
              <li><a href="#skills" onClick={closeDrawer}><TeamOutlined /> Skills</a></li>
              <li><a href="#projects" onClick={closeDrawer}><ProjectOutlined /> Projects</a></li>
              <li><a href="#hireme" onClick={closeDrawer}><SolutionOutlined /> Hire Me</a></li>
              <li>
                <Button onClick={() => { toggleTheme(); closeDrawer(); }} style={{ marginTop: 10 }}>
                  {theme === 'light' ? <MoonOutlined /> : <SunOutlined />} Theme
                </Button>
              </li>
            </ul>
          </Drawer>
        </Header>

        {/* Sections */}
        <Home id="Home" />
        <Education id="education" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Certification id="certification" />
        <HireMe id="hireme" />

        {/* Back to Top */}
        <BackTop>
          <div className="ant-back-top-inner">
            <UpOutlined />
          </div>
        </BackTop>
      </div>
    </ThemeProvider>
  );
};

export default App;
