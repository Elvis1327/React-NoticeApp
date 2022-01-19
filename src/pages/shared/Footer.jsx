import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
    return (
        <section className="main-container-footer">
            <div className="_footer-main-info">
                <span>&copy; Elvin Garcia Valdez</span>
            </div>
            <div className="_footer-main-icons">
                <a 
                    href="https://www.linkedin.com/in/elvin-garcia-valdez-459721210/" 
                    rel="noreferrer" 
                    target="_blank"
                > 
                    <AiFillLinkedin className="_container-footer-icons" />
                </a>
                <a 
                    href="https://github.com/Elvis1327" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <AiFillGithub  className="_container-footer-icons" />
                </a>
            </div>
        </section>
    );
};

