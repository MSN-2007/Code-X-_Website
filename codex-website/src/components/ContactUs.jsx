import React, { useState, useEffect } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [captcha, setCaptcha] = useState({ q: '', a: 0 });
    const [userCaptcha, setUserCaptcha] = useState('');
    const [status, setStatus] = useState('');

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({
            q: `What is ${num1} + ${num2}?`,
            a: num1 + num2
        });
        setUserCaptcha('');
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (parseInt(userCaptcha) !== captcha.a) {
            setStatus('error:Incorrect captcha. Please try again.');
            generateCaptcha();
            return;
        }

        setStatus('Sending...');

        try {
            const response = await fetch("https://formsubmit.co/ajax/705b7934cb74480a8a79ac378f81fa0d", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Inquiry from ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('success:Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setUserCaptcha('');
                generateCaptcha();
            } else {
                setStatus('error:Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error:An error occurred. Please check your connection and try again.');
        }
    };

    return (
        <section className="section" id="contact">
            <h2 className="section-header">CONTACT US</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>Have questions or want to collaborate? Send us a message and we'll get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="How can we help?"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="captcha-wrapper">
                        <label>Security Check: {captcha.q}</label>
                        <input
                            type="number"
                            placeholder="?"
                            value={userCaptcha}
                            onChange={(e) => setUserCaptcha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                    {status && (
                        <div className={`status-msg ${status.includes(':') ? status.split(':')[0] : 'info'}`}>
                            {status.includes(':') ? status.split(':')[1] : status}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
