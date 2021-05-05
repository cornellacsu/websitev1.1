import React from "react";
import Accordion from "../readmecomponents/Accordion";

import prerequisites from "../readmeimages/CS_chart.jpg"

const Courses = () => {
    return(
        <section className="Courses">
            <section className="Intro">
                <h2>The Major</h2>
                <p>The CS major is open to students in the College of Arts and Sciences and the College of Engineering. Below is a chart from the CS Department page, which outlines the necessary prerequisites for all undergraduate CS courses.</p>
                <img src={prerequisites} />
                <p>The following links provide more information about the CS major directly from the Cornell CS Department.</p>
                <div className="ButtonGroup">
                    <a href="https://www.cs.cornell.edu/undergrad/CSMajor" target="_blank">General Major Requirements</a>
                    <a href="https://www.cs.cornell.edu/undergrad/rulesandproceduresarts/artschecklist" target="_blank">Arts & Sciences Requirements</a>
                    <a href="https://www.cs.cornell.edu/undergrad/rulesandproceduresengineering/engineeringchecklist" target="_blank">Engineering Requirements</a>
                </div>
                <h2>The Minor</h2>
                <p>The CS minor can be completed by any student from any college. More information can be found on <a href="http://www.cs.cornell.edu/undergrad/csminor" target="_blank">the department’s website</a>.</p>
            </section>
            <section className="Core">
                <h2>Core Classes</h2>
                <p>These classes are required for anyone majoring in computer science. With the exception of CS 2110 and CS 2800 (which are often taken together), it is generally recommended that students should take one core class each semester. However, that isn’t to say taking more than one (say, CS 4820 and CS 3410) is impossible. See the Alternatives to the Core Classes section below for alternate classes, and why you might want to take them instead.</p>
                <Accordion
                    title="CS 1110: Introduction to Computing Using Python"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 2110: Object-Oriented Programming and Data Structures"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 2800: Discrete Structures"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 3110: Data Structures and Functional Programming"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 3410: Computer System Organization and Programming"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4410: Operating Systems"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4820: Introduction to Analysis of Algorithms"
                    content="UNDER CONSTRUCTION"
                />
            </section>
            <section className="Supplements">
                <h2>Supplements to the Core Classes</h2>
                <p>These classes can be taken alongside their respective core classes, to enhance your understanding of the material and to reinforce topics.</p>
                <Accordion
                    title="CS 2111: Programming Practicum"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4411: Practicum in Operating Systems"
                    content="UNDER CONSTRUCTION"
                />
            </section>
            <section className="Alternatives">
                <h2>Alternatives to the Core Classes</h2>
                <Accordion
                    title="CS 1112: Introduction to Computing Using MATLAB"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 2112: Object-Oriented Design and Data Structures - Honors"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 3420: Embedded Systems"
                    content="UNDER CONSTRUCTION"
                />
            </section>
            <section className="Electives">
                <h2>Electives</h2>
                <Accordion
                    title="CS 3152: Introduction to Computer Game Development"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4110: Programming Languages and Logic"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4120 + CS 4121: Introduction to Compilers + Practicum"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4152: Advanced Computer Game Development"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4154: Analytics-Driven Game Design"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4320: Introduction to Database Systems"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4321: Practicum in Database Systems"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4620: Introduction to Computer Graphics"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4621: Computer Graphics Practicum"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4670: Introduction to Computer Vision"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4700: Foundations of Artificial Intelligence"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4701: Practicum in Artificial Intelligence"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4740: Introduction to Natural Language Processing"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4780: Introduction to Machine Learning"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4786: Machine Learning for Data Science"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4810: Introduction to Theory of Computing"
                    content="UNDER CONSTRUCTION"
                />
                <Accordion
                    title="CS 4830: Introduction to Cryptography"
                    content="UNDER CONSTRUCTION"
                />
            </section>
        </section>
    )
}

export default Courses;