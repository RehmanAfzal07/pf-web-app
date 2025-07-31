import React from 'react';
import { Card, Typography, Button, Row, Col, FloatButton } from 'antd';
import "../css/Projects.css"
import { DownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const projects = [
     {
        id: 0,
        imageSrc: "/projects/doctor-app.jpeg",
        alt:"Flagship Project",
        title: "Doctor appointment app",
        details: "I implemented fully front-end react,tailwind for doctor appointment by patient along all necessory navigation,filters etc.",
        onlineLink: "https://doctor-appointment-app-frontend-sid.vercel.app/"
    },
    {
        id: 1,
        imageSrc: "/projects/e-foodstore.png",
        title: "E-Food Store",
        details: "Implement all the UI desing and full funtionality of E-commerce Web Application.",
        onlineLink: "https://e-foodstore.web.app/"
    },
    {
        id: 2,
        imageSrc: "/projects/wordle.png",
        title: "Popular Wordle Game",
        details: "A popular wordle game clone. It implements guess of same length words, also show vocalbulary multiple choice. ",
        onlineLink: "https://worldegame-190dc.web.app/"
    },
    {
        id: 3,
        imageSrc: "/projects/tercel.jpeg",
        title: "A website to hire and give consultancy to educators.",
        details: "A popular wordle game clone. It implements guess of same length words, also show vocalbulary multiple choice. ",
        onlineLink: "https://worldegame-190dc.web.app/"
    },
{
        id: 4,
        imageSrc: "/projects/nectura.png",
        title: "A web app to which is showcase of frontend modern web app alongside responsiveness and other modern functionality of web.",
        details: "A popular wordle game clone. It implements guess of same length words, also show vocalbulary multiple choice. ",
        onlineLink: "https://nectura-beauty-app.vercel.app/"
    },
      {
        id: 5,
        imageSrc: "/projects/kitab.png",
        title: " Kitab Website Layout",
        details: "This website show new layout demonstrates a digital library style, ",
        onlineLink: "https://kitaabdisplay.netlify.app/"
    },
    {
        id: 6,
        imageSrc: "/projects/Design2584.png",
        title: "Website Design Showcase using React",
        details: "you can effectively demonstrate different website design types in a React application.",
        onlineLink: "https://design2584.netlify.app/"
    },
  
  

];

const Projects = ({ id }) => {
    return (
        <section id="projects" className="project-section" data-aos="fade-up">
            <div>
                <h1 className='heading1'>PROJECTS</h1>
            </div>
            <div>
                <Row gutter={[16, 16]}>
                    {projects.map(project => (
                        <Col key={project.id} xs={24} sm={12} md={8} lg={6}>
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Projects;





const ProjectCard = ({ imageSrc, title, details, onlineLink }) => {
    return (
        <Card className="project-card" data-aos="flip-left">
            <div className="project-image-container">
                <img src={imageSrc} alt="Project" title='Click to down arrow to see deatail' className="project-image" />
                <Button type='primary'>
                    Details
                    <DownOutlined style={{ transform: 'rotate(-90deg)', margin: "5px" }} />
                </Button>
            </div>
            <div className="project-details-container"    >
                <Title level={3}>{title}</Title>
                <Text>{details}</Text>
                <br />
                <Button className='button-card' type="danger" href={onlineLink}>Checkout Live</Button>
            </div>
        </Card>

    );
};
