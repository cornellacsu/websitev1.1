import React from "react";
import ACSU from "../Images/ACSU.svg";
import WICC from "../Images/WICC.svg";
import URMC from "../Images/URMC.svg";
import ISSA from "../Images/ISSA.svg";

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
            <p>Under-Represented Minorities in Computing (URMC) is an undergraduate organization with focus on providing guidance and community for UR minorities interested in majoring in any computing field (CS, InfoSci, ECE, Stats, etc). In spite of being an incredibly diverse school, computing fields at Cornell have a huge representation problem. Engineering CS for example, was only 6% hispanic, and 1% african-american in 2015. URMC aims to provide community, mentorship and career development opportunities specially targeted to URMs, but open to all students in the computing community, to bring minority students together, and provide a welcoming environment to solve this representation gap.</p>
        </section>
            <hr></hr>
        <section className="ISSA">
            <a href="https://issa.infosci.cornell.edu" target="_blank"><img src={ISSA} /></a>
            <h2>ISSA: Information Science Student Association</h2>
            <p>The Information Science Student Association is open to all students (majors, minors, or undeclared) interested in Information Science or Information Science, Systems, & Technology. The ISSA is here to improve the student experience and spread the word about both majors. We plan networking events, social events, corporate information sessions, and meet-and-greets with Cornell faculty.</p>
        </section>
        </section>
    )
}

export default Clubs;