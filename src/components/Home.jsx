// src/Home.jsx
import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { GithubOutlined, LinkedinOutlined, TwitchFilled, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import BackgroundIcons from './BackgroundIcons';

const Home = ({ id }) => {
    const [countdown, setCountdown] = useState(5);
    const [modalVisible, setModalVisible] = useState(false);
    const [showFirstSet, setShowFirstSet] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstSet(prev => !prev);
        }, 4200);

        return () => clearInterval(interval);
    }, []);

    const handleDownloadClick = () => {
        setModalVisible(true);
        let counter = countdown;

        const interval = setInterval(() => {
            counter--;
            setCountdown(counter);
            if (counter === 0) {
                clearInterval(interval);
                setModalVisible(false);
                startDownload();
            }
        }, 1000);
    };

    const startDownload = () => {
        setTimeout(() => {
            window.location.href = 'Rehman-Afzal-CV.pdf';
        }, 1000);
    };

    return (
        <div className='container-home' data-aos="fade-down" id="home">
            <div className='grid-container'>
                <div className='image-container'>
                    <div className='social-media'>
                        <div style={{ marginTop: "7vh" }} data-aos="fade-right">
                            <Button shape="circle" size='large' className='custom-linkedIn' type='text' ghost="true">
                                <a href='https://www.linkedin.com/in/rehman-afzal-774507228'>
                                    <LinkedinOutlined />
                                </a>
                            </Button>
                            <div style={{ marginTop: "6vh", color: "#f89937" }}>
                                <Button shape="circle" size='large' className='custom-github' type='text' ghost="true">
                                    <a href='https://github.com/RehmanAfzal07'>
                                        <GithubOutlined />
                                    </a>
                                </Button>
                            </div>
                            <div style={{ marginTop: "6vh", color: "#f89937" }}>
                                <Button shape="circle" size='large' className='custom-faceBook' type='text' ghost="true">
                                    <a href='https://www.twitter.com/@RehmanAfzal_27'>
                                        <TwitchFilled />
                                    </a>
                                </Button>
                            </div>
                            <div style={{ marginTop: "6vh", color: "#f89937" }}>
                                <Button shape="circle" size='large' className='custom-whatsApp' type='text' ghost="true">
                                    <a href='https://wa.me/923401004094'>
                                        <WhatsAppOutlined />
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <img src="../../assets/pic1.png" alt="pic" />
                    </div>
                </div>
                <div className='heading' data-aos="fade-left">
                    <BackgroundIcons />
                    <div className="heading-container">
                       {showFirstSet ? (
  <h1 className="h1" data-text="React/Native Dev">React/Native Dev</h1>
) : (
  <h1 className="h1" data-text="NextJS/Full-stack">NextJS/Full-stack</h1>
)}

                    </div>
                    <div>
                               <h2  data-aos="fade-left">Rehman Afzal</h2>
                    <p  data-aos="fade-left">
                        <b>Welcome</b> to my portfolio! I'm a passionate React,React Native, Next-JS & Full-stack professional having <b>+3 Years</b> with a knack for crafting dynamic
                        and efficient web & mobile, full stack applications. With a keen eye for detail and a dedication to clean code, I specialize in building intuitive user interfaces and seamless experiences. Explore my projects and let's collaborate to bring your ideas to life
                    </p>
                    </div>
             
                </div>
            </div>
            <div style={{ display: "flex", marginLeft: "40%", gap: "5%", padding: "1%" }}>
                <div>
                    <a href='#hireme'>
                        <Button shape='square' size="large" type='primary'>
                            Hire Me
                        </Button>
                    </a>
                </div>
                <div>
                    <Button
                        type="danger"
                        size="large"
                        icon={<DownloadOutlined />}
                        onClick={handleDownloadClick}
                    >
                        Resume
                    </Button>
                    <Modal
                        visible={modalVisible}
                        onCancel={() => setModalVisible(false)}
                        footer={null}
                    >
                        <p>Downloading will start in {countdown} seconds</p>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Home;



















