import React from "react";
import ACSU from "../Images/ACSU.svg";
import WICC from "../Images/WICC.png";
import URMC from "../Images/URMC.svg";
import ISSA from "../Images/ISSA.svg";
import H4I from "../Images/H4I.svg"
import PT from "../Images/ProjectTeams.png"
import ACM from "../Images/ACM.png"
import AppDev from "../Images/AppDev.png"
import CDS from "../Images/CDS.png"
import DTI from "../Images/DTI.svg"

const Clubs = () => {
    return(
        <section className="Clubs">
            <p>
           Outside of courses, Cornell offers a variety of ways for students to get involved in the local computer science community through student computing groups. Joining one or more of these organizations is a great way for students to network with other computer science students as well as learn about different opportunities in the computer science field. These organizations also host many company info sessions, academic and career development workshops, guest speaker presentations, and other events that computer science students may find helpful (not to mention, there’s usually free food and swag!). 
            </p>
            <hr></hr>
        <section className="ACSU">
            <a href="https://acsu.cornell.edu/" target="_blank"><img src={ACSU} /></a>
            <h2>ACSU: Association of Computer Science Undergraduates</h2>
            <p>The Association of Computer Science Undergraduates, more commonly known as ACSU, is Cornell’s chapter of the Association for Computing Machinery (ACM). ACSU promotes educational, professional, and social interaction among students interested in computer science and facilitates student communication with faculty, alumni, and corporate representatives to enhance the undergraduate experience in computer science. Some things that ACSU oversees include social events for CS students to meet outside of class, student-faculty events, academic workshops to develop technical skills, company information sessions for recruitment, a resume book for internships and full-time employment, student-led reading groups, and a mentorship program.</p>
        </section>
            <hr></hr>
        <section className="WICC">
            <a href="https://wicc.cornell.edu/" target="_blank"><img src={WICC} /></a>
            <h2>WICC: Women in Computing at Cornell</h2>
            <p>Women in Computing at Cornell, or WICC, is a student organization that seeks to bring together women in computing fields at Cornell, expand their opportunities and successes, provide a support network of women, and empower them to encourage younger women to consider computing fields. WICC membership and events are not just restricted to women, and anyone who is interested is welcome to join. Like ACSU, WICC also oversees many social events, company info sessions, academic workshops, a resume book, and a mentorship program. WICC is an ACM-W Student Chapter.</p>
        </section>
            <hr></hr>
        <section className="URMC">
            <a href="https://urmc-website.herokuapp.com" target="_blank"><img src={URMC} /></a>
            <h2>URMC: Under-Represented Minorities in Computing</h2>
            <p>Under-Represented Minorities in Computing (URMC) is an undergraduate organization with focus on providing guidance and community for UR minorities interested in majoring in any computing field (CS, InfoSci, ECE, Stats, etc). In spite of being an incredibly diverse school, computing fields at Cornell have a huge representation problem. Engineering CS for example, was only 6% hispanic, and 1% African-American in 2015. URMC aims to provide community, mentorship and career development opportunities specially targeted to URMs, but open to all students in the computing community, to bring minority students together, and provide a welcoming environment to solve this representation gap.</p>
        </section>
            <hr></hr>
        <section className="ISSA">
            <a href="https://issa.infosci.cornell.edu" target="_blank"><img src={ISSA}/></a>
            <h2>ISSA: Information Science Student Association</h2>
            <p>The Information Science Student Association is open to all students (majors, minors, or undeclared) interested in Information Science or Information Science, Systems, & Technology. The ISSA is here to improve the student experience and spread the word about both majors. We plan networking events, social events, corporate information sessions, and meet-and-greets with Cornell faculty.</p>
        </section>
            <hr></hr>
        <section className="H4I">
            <a href="https://cornellh4i.netlify.app" target="_blank"><img src={H4I}/></a>
            <h2>HackForImpact</h2>
            <p>Hack4Impact exists for both nonprofits and students. We connect student software developers with nonprofits and other socially responsible businesses to develop powerful new tools for social change. This enables nonprofits to further their mission and better engage their clients. We are committed to increasing awareness of technology's potential for good.</p>
        </section>
            <hr></hr>
        <section className="PT">
            <a href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/project-teams" target="_blank"><img src={PT}/></a>
            <h2>Project Teams</h2>
            <p>The College of Engineering has over 20 project teams that allow students of all types of majors to gain hands-on, practical experience in their respective fields. While every project team has a different academic focus, most have some type of software subteam, and computer science students are encouraged to apply to any team that interests them. Computer science fields represented include but are not limited to mobile app development, web development, and software engineering. The general consensus is that students, especially freshmen, shouldn’t be afraid to apply if they have little to no prior experience working on a specific type of project, as many teams tend to accept based on potential and general knowledge of computer science.
                <br /> <br />
                Note: Recruitment for project teams generally occurs in the very beginning of the semester (early September for Fall and late January/early February for Spring). Do your research early and don’t miss the application deadlines (some project teams recruit only once a year)!
                <br /> <br />
                A few of the more CS-focused project teams are listed below. There are many other teams that have roles relevant to CS majors!
            </p>
        </section>
            <hr></hr>
        <section className="ACM">
           <a href="http://www.cs.cornell.edu/acm/" target="_blank"><img src={ACM}/></a>
            <h2>ACM Programming Team</h2>
            <p>ACM is a project team devoted to competitive programming. ACM members participate in several programming competitions per year, including the Google Code Jam, the Facebook Hacker Cup, the Topcoder Open, and the ACM-ICPC. In these competitions, teams must create correct and efficient solutions to problems in a limited amount of time. Participating in these coding challenges can help students to think about their product prior to coding and be able to create a correct solution in all corner cases. Skills developed through ACM competitions can also be very useful for technical interviews.</p>
        </section>
            <hr></hr>
        <section className="AppDev">
            <a href="https://www.cornellappdev.com" target="_blank"><img src={AppDev}/></a>
            <h2>AppDev: Cornell App Development</h2>
            <p>Cornell AppDev is a project team at Cornell University dedicated to mobile and web application development. The team consists of talented iOS/Android developers, backend developers, and designers who collaborate to bring projects to life. AppDev members work in a startup-like environment and gain practical experience in software development, design, and product management. AppDev also offers four 2-credit, 10-week courses to the Cornell community: Intro to iOS Development, Intro to Backend Development, Intro to Digital Product Design, and Intro to Android Development.</p>
        </section>
            <hr></hr>
        <section className="CDS">
            <a href="https://cornelldata.science" target="_blank"><img src={CDS}/></a>
            <h2>CDS: Cornell Data Science</h2>
            <p>Cornell Data Science, or CDS, is a project team that welcomes students of varying experience to learn about the data science field. CDS aims to train members in the cutting edge skills of data science through tech talks by industry experts and educational events led by faculty and other members. In addition to hosting an educational series about basic data science at general body meetings, CDS also recruits members every semester to work on a data science team project led by an experienced (student) project manager.</p>
        </section>
            <hr></hr>
        <section className="DTI">
            <a href="https://www.cornelldti.org" target="_blank"><img src={DTI}/></a>
            <h2>DTI: Cornell Design & Tech Initiative</h2>
            <p>Cornell Design & Tech Initiative is a project team that creates web and mobile apps to address needs on and around Cornell's campus. The team of over 50 developers, designers, and product managers is currently working on 6 different products across campus. Contrary to usual project team demographics, more than half of their members are underclassmen, their gender ratio sits at a healthy 50%, and they together span 6 of the 7 undergraduate colleges. Feel free to reach out to hello@cornelldti.org with any questions!</p>
        </section>

        </section>

    )
}

export default Clubs;