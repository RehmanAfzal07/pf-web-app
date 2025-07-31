import { Button, Typography } from 'antd';
import React from 'react';
import '../css/HireMe.css';
import { FaEnvelopeOpen, FaPaperPlane, FaVoicemail } from 'react-icons/fa';

const { Title, Paragraph } = Typography;

const HireMe = ({ id }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const emailSubject = 'New Message from Portfolio';
        const recipientEmail = 'rehman.afzal0123@gmail.com'; // Replace with your Gmail address

        const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

       
        window.location.href = mailToLink;

       
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id={id}   data-aos="fade-up">
            <div className="hire-contianer">
                <div className="contact-info" data-aos="fade-up-left">
                    <Title level={1}>Contact Me</Title>
                    <Title level={4}>Get in Touch</Title>
                    <Paragraph>Email: rehman.afzal0123@gmail.com</Paragraph>
                    <Paragraph>Phone: +923401004094 </Paragraph>
                </div>

                <div className="contact-form" data-aos="fade-up-right">
                    <Title level={1}> Send a Message</Title>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='input-label'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-label'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-label'>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button className='sendButton' type="primary" htmlType="submit">
                           <FaEnvelopeOpen size={20}/>
                        </Button>
                        
                    </form>
                </div>

            </div>
        </section>
    );
};

export default HireMe;
