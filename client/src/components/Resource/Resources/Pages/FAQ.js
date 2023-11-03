import React from "react";
import Accordion from "../Components/Accordion";

const FAQ = () => {
  return (
    <section className="FAQ">
      <section class="General Content">
        <h2>General</h2>
        <Accordion
          title="Are there any benefits of majoring in Computer Science through the College of Arts and Sciences instead of the College of Engineering, and vice versa?"
          content="The general consensus for this question is that there is no significant difference. There appear to be a lot of students asking this, and most of them seem to have the wrong impression that majoring in one college over another is more “prestigious”; however, this is not the case. The only difference between the schools you major from is all of the requirements outside of the Computer Science major. For example, the College of Engineering requires students to take PHYS 1112 and 2213, whereas the College of A&S does not. However, the College of A&S requires students to take a language course and fulfill other “distribution” requirements. Yet, to complete the CS major, they need to take the same set of core classes (CS 2800, CS 3110, CS 3410/3420, CS 4410, CS 4820), three 4000-level CS classes, a CS practicum or project course, three external specialization classes, and a few other requirements.
          <br></br>
          It should also be noted that Engineering students graduate with a Bachelor of Science and Arts students graduate with a Bachelor of Arts.
          <br></br>
          Some reasons that have been observed in the past to transfer from one school to another are the following:
          <br></br>

          <ul>
              <li>a student in CALS (or any other college), who does not have a CS major, transfers to CAS or CoE to earn a Computer Science major</li>
              <li>a student with a lot of AP credits (say ones that fulfill PHYS 1112 and PHYS 2213) cannot have them count towards graduation in one college (CAS), but can in another (CoE)</li>
              <li>a student does not want to fulfill a certain requirement (does not want to take a language class - go to CoE!, or hates Physics with an extreme passion - go to CAS!)</li>
              <li>a student wants to double major in a field, but the second major is not offered in the particular college they are currently affiliated with (e.g. Mathematics is offered as a major in CAS but is not offered as a major in CoE)</li>
          </ul>
          "
        />
        <Accordion
          title="Do I NEED a Mac? Can I get by with a PC? Will my choice of laptop affect my ability to become a Computer Science major? Which laptop would you recommend to a prospective CS major?"
          content="A CS major at Cornell University can DEFINITELY get by with either a PC or a Mac. If you have familiarity, Linux is also a perfectly workable option. Most classes use Virtual Machines to provide students with the required software that is needed for the class. For classes that don’t, their course staff usually try their best to accommodate both. However, if you have interest in developing iPhone applications, a Mac is the way to go. A Mac is also nice in that it has a Unix environment, which makes many kinds of development easier. Bearing all these in mind, however, most people choose based on their personal preferences."
        />
        <Accordion
          title="I don’t have prior CS knowledge; am I screwed?"
          content="Not at all! Although it is common for students to have had exposure to Computer Science before their first year at Cornell, it is perfectly okay for students to have no prior experience whatsoever. In fact, introductory classes such as CS 1110 and CS 1112 are geared towards students with no prior background. There have been many students who excel as Computer Science majors at Cornell University who had no experience before college, and you can be one of them!"
        />
        <Accordion
          title="When should I affiliate? What are the benefits of affiliating?"
          content="You should affiliate as soon as you are eligible if you have committed to the major. For most students, applying for affiliation occurs during sophomore year, but in some cases it’s possible to affiliate even earlier. College of Engineering students have no choice but to apply before the end of sophomore year or they will be withdrawn from the college, but CAS students are free to begin the process during their fourth semester. You submit the paperwork to affiliate during the semester that you take the last of the required courses.
          <br></br>
          The requirements for affiliation are as follows:
          <ul>
          <li>at least a C in all completed CS and math courses</li>
          <li>GPA >= 2.5 in CS 2110/2112 and CS 2800</li>
          <li>GPA >= 2.5 in MATH 1120/1220/1920 and CS 2800</li>
          </ul>
          <br>
          If you don’t meet these requirements, don’t despair! Some deficiencies can be offset by excelling in other areas. Check out the CS Major website  for more information.
          <br></br>
          It’s definitely good to affiliate by your third semester if you can; if you can’t, don’t worry too much about it. One of the few differences the timing can make is in pre-enrolling for fourth semester classes. Many 4000+ level CS courses are available only to CS/IS majors during pre-enroll, so there is a slight advantage to sophomores who are already affiliated by then. More perks that are offered to CS majors are access to the undergraduate computing lab (UGClab) in Gates G33, official access to the CIS undergraduate lab (although the door is usually open anyway), and CS-related emails from the awesome Nicole Roy!"
        />
        <Accordion
          title="I want to double major; is this a good idea?"
          content="Double majoring for the sake of double majoring is not the best idea. You should do this only if you have vested interest in both subjects! Note that the Computer Science major offers good opportunities for you to explore other subject areas through the External Specialization requirements, many university-wide minors and probably <a href=https://www.cs.cornell.edu/undergrad/csmajor/technicalelectives>technical electives</a>.
          <br></br>
          It is definitely good to decide the double majors as early as possible (especially with Computer Science) because then you can plan the courses ahead and don’t have to panic as you become an upperclassman.
          <br></br>
          For students with Computer Science major in College of Arts and Sciences, you can choose to count courses in a second major or minor as electives."
        />
      </section>
      <section class="Classes Content">
        <h2>Classes</h2>
        <Accordion
          title="Should I take CS 1110 or CS 1112?"
          content="As of Fall 2023, both classes will be in Python. The CS department <a href='https://www.cs.cornell.edu/undergrad/firstcscourse'>statement</a> says: “The computer science department views either course (CS 1110 [Introduction to Computing: A Design & Development Perspective] and CS 1112 [Introduction to Computing: An Engineering & Science Perspective]) as equally good preparation for the CS major. If one doesn't have a preference between a more design-oriented perspective and a perspective more influenced by scientific or engineering applications, and no scheduling constraints apply, then we advise students to simply pick the class with fewer students enrolled at the time."
        />
        <Accordion
          title="Should I take CS 2110 or CS 2112?"
          content="Both courses cover similar material. However, CS 2112 is well-known for its extensive projects. If you are looking to getting experience on working on a significant codebase and have the time to afford to, CS 2112 might be the course for you. Also there is an option to switch back to CS 2110 from CS 2112 within the first three weeks, so if you find the assignments and the overall pace of CS 2112 to be a bit much, switching back to CS 2110 is always an option.
            <br></br>
            With that said, CS 2110 also covers a significant breadth of material, and by the end of it, students should be exposed to a variety of technical concepts that are not only covered in other higher-level CS courses but also prepare students to begin preparing for technical interviews. So in terms of the material covered, students enrolled in CS 2110 are not missing out on anything significant. For students who have taken CS 2110, they are generally able to invest more time into other courses as well, as CS 2110’s projects are not on the scale of CS 2112."
        />
        <Accordion
          title="Should I take CS 3410 or CS 3420 / ECE 3140?"
          content="This answer partially depends on whether you can fit ENGRD/ECE 2300 (a prerequisite for 3420) into your schedule. Because CS majors in the College of Engineering are required to take 2 engineering distributions, ENGRD/ECE 2300 is a popular choice due to its material being most relevant to the CS major out of other ENGRD options (the other being filled by ENGRD 2110 or ENGRD 2112, which is required for the major). If you can manage to fit ENGRD/ECE 2300 into your schedule and want to avoid overlapping content, taking CS 3420 (crosslisted as ECE 3140) may be the better option. However, if you want to reinforce the material taught in ENGRD/ECE 2300, taking CS 3410 might be better.
            <br></br>
            Now that CS 3410 is offered in both the Fall and the Spring, fitting that into your schedule is much more flexible than trying to fit in CS 3420, which is offered only in the Spring semester. If this is of concern to you, taking CS 3410 might be a better option.
            <br></br>
            In terms of comparing the courses themselves, CS 3410 is pretty well known to be filled with projects that are very time consuming. CS 3420 on the other hand have very reasonable projects up until the final project (open-ended), in which the time commitment can vary wildly depending on the type of projects students wish to pursue. CS 3410 also squeezes in a lot more material than CS 3420 does. This, however, is more like comparing to apples to oranges, as the combination of ENGRD 2300 and CS 3420 covers all the material covered by CS 3410 and more. In that sense, if you want to spread out the material you want to learn in the duration of a year rather than the semester, the ENGRD 2300-CS 3420 might be of more interest (and vice versa).
            <br></br>
            Lastly, CS 3420 places more emphasis on I/O and hardware-related material (hence its name, Embedded Systems). In fact, most projects in CS 3420 involve coding logic onto a microcontroller (MSP430). This is highlighted by the final project which gives student freedom to pursue whatever project they wish to with their MSP430s. Therefore, if you have more interest in hardware systems, CS 3420 might be for you."
        />
        <Accordion
          title="What is a practicum? What separates it from a regular course?"
          content="With the exception of CS 2111, practicums are classes that are based entirely on projects. Usually, given a class CS xxx0, its associated practicum will be offered as CS xxx1. Every CS major is required to take one practicum, and can choose to enroll in multiple practicums if they wish. The practicums are meant to be extensions of the associated course, and usually students get to implement a variety of things covered in lecture but are not explored in other parts of the class. For example, for CS 4320: Intro to Database Systems, lectures encompass various components of databases, and in CS 4321, students get to implement a SQL-interpreter in Java where they actually code up and learn the ins-and-outs of the discussed components. For some classes, the practicum must be taken along with the actual course (e.g. CS 4120 + 4121)."
        />
        <Accordion
          title="Why are some 4000-level classes cross-listed as 5000-level classes?"
          content="If a 4000-level class is cross-listed as a 5000-level class, that means that the same course is offered to both undergraduate students and graduate students. Therefore, unless you are a graduate student, you should sign up for the 4000-level class as CS 4xxx instead of CS 5xxx. The class and all requirements are generally the exact same."
        />
        <Accordion
          title="What is a vector? It is important in any way? Is one more prestigious than another?"
          content="Think of vectors as a guideline of which courses to take if you are interested in a certain subject (like a concentration). Fulfilling a vector is optional, but note that vector requirements can double count. Outside of the context of Cornell Computer Science, vectors are not too important and don’t even show up on your transcript. However, they can be very useful in trying to shape your future coursework and determine which courses to take. Keep in mind that vectors are not hard requirements as much as they are a checklist of courses, so a class taken as a CS major requirement can double count as a vector requirement.
            <br></br>
            More information about vectors can be found <a href=https://www.cs.cornell.edu/undergrad/csmajor/electivesCS>here</a>.
            <br></br>
            More information about the checklist: <a href=http://www.cs.cornell.edu/undergrad/rulesandproceduresengineering/engineeringchecklist>for Engineering students</a> ; <a href=http://www.cs.cornell.edu/undergrad/rulesandproceduresarts/artschecklist>for Arts students</a>."
        />
        <Accordion
          title="What are prerequisites? Are they actually enforced?"
          content="Many courses build off the material in prior courses, either directly or indirectly. In order to ensure that all students have the same background, departments designate certain other courses as prerequisites that must be completed before enrolling in a subsequent course. Historically the CS department has allowed students to take classes for which they did not have the prerequisites, though doing so is not recommended. If you do not meet the prerequisites for a certain course it is recommended that you speak with the instructor, since sometimes they serve only as a way to ensure that you have some previous experience with the topic."
        />
        <Accordion
          title="I am struggling as a CS major, and I need additional resources for help; how can I go about doing this?"
          content="If you are struggling with a particular CS class, the first approach would be to try to go to Office Hours and seek help from TAs. Professors will generally also hold an hour or two of office hours, but if they are at a time you can’t make, feel free to try to arrange a meeting with a professor by catching them after class or through email. Professors and TAs are here to help your learning experience, and can be surprisingly helpful in pinpointing the source of your struggles. In some cases, professors may help find you a personal tutor for the course.
          <br></br>
          In addition to the course staff, introductory classes have external resources that can help. For example, CS 1110, CS 1112, and CS 2110 all have <a href=https://www.engineering.cornell.edu/students/undergraduate-students/academic-opportunities-and-support/tutors-call/request-tutor>on-call peer tutors</a> and <a href=https://www.engineering.cornell.edu/aew>Academic Excellence Workshops</a> which are 1-credit supplemental courses. In addition, CS 2110 has recently been offering a <a href=https://classes.cornell.edu/browse/roster/FA21/class/CS/2111>Programming Practicum</a> as a supplemental course.
          <br></br>
          The nice thing about Computer Science is that a lot of information can be found online as well. If you don’t understand a certain concept presented in lecture and staring at the slides doesn’t help, Googling for understanding can yield surprisingly helpful resources. Stack Overflow is especially useful.
          "
        />
        <Accordion
          title="For the checklist requirements, can I replace CHEM 2080 with any other class?"
          content="CHEM 2080 can be replaced by BTRY 3080, ECON 3130, MATH 2930, MATH 4710, PHYS 2214, or PHYS 2218. However keep in mind the MATH 2930 is a prerequisite of PHYS 2214."
        />
        <Accordion
          title="Can I use the same class for different requirements for the CS checklist?"
          content="Unfortunately, you cannot have the same class listed for any of the requirements that require you to fill in the class name, semester you took it, and your grade. For example, you cannot use MATH 2930 to replace both CHEM 2080 as well as use it as a Technical Elective. However, you can use a statistic/probability class for a requirement on a checklist. For example, you can use ENGRD 2700 as a probability class as well as an ENGRD requirement, because the probability class is only a checkbox. As long as you took one, it doesn’t matter which class it is or whether it satisfies another requirement."
        />
        <Accordion
          title="What is an external specialization?"
          content="An external specialization is three 3000+ classes that are all related in some way. The easiest way to complete an external spec would be to find three class in the same category (MATH, CHEM, MAE, ECE, etc.) that are 3000 or above. You could also have a very thin connection between the three classes. As long as you’re able to explain how those three classes are connected, then anything is valid."
        />
        <Accordion
          title="What classes qualify as Technical Elective classes?"
          content="Any 3000+ course that engages the student in computation reasoning and analysis or in any quantitative way qualifies. They are usually in application areas such as BIO, BEE, CHEM, PSYCH, PHYS, MATH, ECON, any Engineering fields including CS and MAE, or related subjects. However, some of these areas may involve writing or theoretical courses, such as PSYCH 3050 (theory). No classes that involve writing only about science, math, technology, etc, qualify."
        />
        <Accordion
          title="How can I fulfill the technical writing requirement in the College of Engineering?"
          content="The College of Engineering <a href=https://www.engineering.cornell.edu/students/undergraduate-students/curriculum/engineering-communications-program/technical>website</a> lists ways to meet the Technical Writing Requirement at Cornell University. Some common ways to get technical writing credit are: <a href=https://www.cs.cornell.edu/undergrad/uresch>CS 4999  (Undergraduate Research)</a>, <a href=https://courses.cornell.edu/content.php?catoid=12&navoid=2097#>ENGRC 3020 (Project Teams)</a>, or taking an officially designated Writing-Intensive or Communication-Intensive engineering course. Classes such as CS/INFO 3152 (Introduction to Game Design) also have one-credit attachments that will fulfill the requirement.
          <br></br>
          It’s a good idea to double-check with your CS advisor or one of the CS Undergraduate Advisors if you’re unsure if a course fulfills this requirement. If it’s not listed on the website, there’s a good chance it doesn't count, but there is a process for petitioning an unlisted course for credit."
        />
        <Accordion
          title="Are there classes that can fulfill multiple liberal arts/breadth requirements?"
          content="There are classes that fulfill both Historical and Geographical Breadth requirements that you can take if you can’t manage to fit two separate classes into your schedule. Departments that usually offer these are the Near Eastern Studies department. The same applies for A&S liberal arts requirements. Overlap is commonly found in Latin American Studies and Philosophy."
        />
      </section>
      <section class="Internships Content">
        <h2>Internships & Jobs</h2>
        <Accordion
          title="Why and how do people apply for internships?"
          content="Internships are a great way for students to explore potential career paths and interests, learn more about the company that they are interning for, and learn what being a software developer is like in the real world. People usually apply for internships through the career fair and <a href=https://cornell.joinhandshake.com>Handshake</a>. This is not the only means, however, as most companies have links on their websites specifically for internships applications. Generally, an applicant needs to fill out basic information about themselves as well as a resume that highlights their technical skills, coursework, and achievements. If you perform well at an internship, most companies will give a return offer to either come back as an intern the next year or as a full-time employee - depending on your graduation date."
        />
        <Accordion
          title="What type of information should my resume contain?"
          content="Typically, a resume for a software-related intern position contains information such as…
            <ol>
            <li>Previous employment/experience</li>
            <li>Coursework/GPA/Education information</li>
            <li>Personal or significant class projects</li>
            <li>Awards (e.g. from hackathons)</li>
            <li>Technical skills (e.g. programming languages, frameworks, etc.)</li>
            </ol>
            This <a href=http://www.careercup.com/resume>link</a> also gives really good advice on how to craft your resume."
        />
        <Accordion
          title="What is a typical technical interview like for a CS major applying for a Software (Development) Engineering Internship position?"
          content="Typically after a brief conversation to introduce yourself, most Software Engineering internship positions will require the candidate to solve one or more technical interview questions. This will most of the time involve concepts introduced in CS 2110/2. Depending on the set up, this is usually done on the whiteboard (in-person interview) or on a website that provides code-friendly platform (phone interview). A sample question can be something like:
            <br></br>
            <em>Given two lists of numbers A and B in which B contains all of the elements of A and one additional element, return the element that belongs in B but not in A.</em>
            <br></br>
            Afterwards, interviewers typically take some time to talk more about the company, the work they do, and open up time for questions."
        />
        <Accordion
          title="I am a freshman/sophomore interested in applying for internships; are there any programs geared towards underclassmen like us?"
          content="If you are an underclassmen considering computer science as a career or if you just want to learn more about working in the tech industry, you should definitely check out the following summer programs specific to freshmen and sophomores:
          <br></br>
          <a href=https://buildyourfuture.withgoogle.com/programs/step/>Google Student Training in Engineering Program (STEP)</a>
          <ul>
          <li>Application Period: mid September - October (rolling)</li>
          <li>Eligibility: For current freshmen and sophomores</li>
          <li>Notes: The STEP internship is a 12-week developmental opportunity for first and second-year undergraduate students with a passion for technology -- especially students from historically underrepresented groups in the field. During the summer, you will work alongside other STEP interns on a software project, attend skills-based and professional development training, and receive mentorship from Google engineers.</li>
          </ul>
          <br>
          <a href=https://careers.microsoft.com/students/us/en/usexploremicrosoftprogram>Microsoft Explore</a>
          <ul>
          <li>Application Period: early August - November (rolling)</li>
          <li>Eligibility: For current freshmen and sophomores</li>
          <li>Notes: Explore Microsoft program is a 12-week summer internship intended for students who are beginning their academic studies and would like to learn more about careers in software development through an experiential learning program. By providing formal training as well as a group project experience working alongside other Explorers, the Explore program offers a rotational experience that enables interns to gain experience in both core software engineering roles (Program Manager and Software Engineer), rather than specializing in just one.</li>
          </ul>
          <br>
          <a href=https://www.facebook.com/careers/students-and-grads/students>Facebook University</a>
          <ul>
          <li>Application Period: late August - late February</li>
          <li>Eligibility: For current freshmen and sophomores</li>
          <li>Notes: Facebook University offers three roles: Engineering, Analytics, and Product Design. Facebook University for Engineering is a paid 8-week training program designed to provide mobile development experience to students who are historically underrepresented in computer science. The eight-weeks is broken down by two weeks of mobile development training in either iOS or Android, followed by six-weeks of hands-on project experience in a small team setting.</li>"
        />
        <Accordion
          title="What if I want to get involved in research over the summer instead?"
          content="Check out research opportunities at Cornell or at other universities around the US.
          <br></br>
          If you want to do research at Cornell, you can send an email directly to the professor you want to work with, or visit him/her in his/her office. Most professors are really open to students seeking research opportunities over the summer, and will be happy to talk to you about their research and how you can get involved.
          <br></br>
          Engineering Learning Initiatives (ELI) at Cornell provides student grants for undergraduate engineering research projects. Based on their <a href=http://www.engineering.cornell.edu/research/undergraduate/student_grant/index.cfm>website</a>, they have a funding cycle for the summer with applications in Early March.
          <br></br>
          The National Science Foundation (NSF) provides paid research opportunities at universities around the US called Research Experiences for Undergraduates (REUs). At their <a href=http://www.nsf.gov/crssprgm/reu/>site</a> you can find out more about the program and search for an REU based on discipline and REU location. You'll most likely work with a professor over the summer on a project with a couple of other students as well."
        />
      </section>
    </section>
  );
};

export default FAQ;
