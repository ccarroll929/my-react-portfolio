// Link to a downloadable resume
import React from "react";
import myResume from "../assets/files/christinacarrollresume.pdf";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Resume = () => {
    return (
        <section className ="resume-bx">
        <div id="resume" className="resume">
                <button><a href={myResume} className="download-logo" download>Download My Resume</a><ArrowRightCircle size={25} /></button> 
        </div>
        </section>
    )}

export default Resume;