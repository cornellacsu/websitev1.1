import React from "react";
import Accordion from "../Components/Accordion";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import prerequisites from "../Images/CS_chart.jpg"

const Courses = () => {
    return(
        <section className="Courses">
            <section className="Intro">
                <h2 id="top">The Major</h2>
                <p>The CS major is open to students in the College of Arts and Sciences and the College of Engineering. Below is a chart from the CS Department page, which outlines the necessary prerequisites for all undergraduate CS courses.</p>
                <img src={prerequisites} />
                <p>The following links provide more information about the CS major directly from the Cornell CS Department.</p>
                <div className="ButtonGroup">
                <ButtonGroup orientation="vertical" color="secondary" aria-label="outlined secondary button group" fullWidth="true">
                    <Button href="https://www.cs.cornell.edu/undergrad/CSMajor" target="_blank">General Major Requirements</Button>
                    <Button href="https://www.cs.cornell.edu/undergrad/rulesandproceduresarts/artschecklist" target="_blank">Arts & Sciences Requirements</Button>
                    <Button href="https://www.cs.cornell.edu/undergrad/rulesandproceduresengineering/engineeringchecklist" target="_blank">Engineering Requirements</Button>
                </ButtonGroup>
                </div>
                <h2>The Minor</h2>
                <p>The CS minor can be completed by any student from any college. More information can be found on <a href="http://www.cs.cornell.edu/undergrad/csminor" target="_blank">the department’s website</a>.</p>
            </section>
            <section className="Core">
                <h2>Core Classes</h2>
                <p>These classes are required for anyone majoring in computer science. With the exception of CS 2110 and CS 2800 (which are often taken together), it is generally recommended that students should take one core class each semester. However, that isn’t to say taking more than one (say, CS 4820 and CS 3410) is impossible. See the Alternatives to the Core Classes section below for alternate classes, and why you might want to take them instead.</p>
                <Accordion
                    title="CS 1110: Introduction to Computing Using Python"
                    content="
                    The first course in the computer science sequence, this is a recommended course to take for all newcomers. It will cover all the necessary skills that every coder has with them, from variables to functions and beyond. Can be waived with AP Computer Science credit (may vary in CAS and CoE departments, however).
                    <br></br>
                    The class is historically taught by Walker White in the fall and then a pair of professors in the Spring. Because the Spring curriculum is based off Professor Walker’s personally designed Fall curriculum, there shouldn’t be any major differences in taking it in either semester. Also because it is an introductory class into the CS world, the class tends to have a large number of consultants whose jobs are also to give advice and insight into the rest of the CS major. There are one-on-one meetings designed into the class for any questions you may have, so make sure to take advantage of those resources if you need them.
                    <br></br>
                    The projects are very straightforward and as long as you’re paying attention in class/lab and reading instructions carefully, you’ll do well. The most noteworthy project is the last one where you’ll be tasked to build your own version of Breakout.
                    <br></br>
                    Projects can be done in pairs of two or alone. While it might be beneficial to have a partner to talk with, be careful in dividing up work – since this is an introductory class, you definitely want to get good grasp of the course material.
                    <br></br>
                    <b>📅 Offered</b>: Every semester
                    <br>
                    <b>☑️ Prerequisites</b>: No programming experience but some high school math (no calculus)
                    <br>
                    <b>📔 Historical Median Grade</b>: B
                    <br>
                    <b>⏰ Workload</b>: Moderate (3 to 7 hours per assignment)
                    <br>
                    <b>📝 Notes</b>: The class expects no programming experience."
                />
                <Accordion
                    title="CS 2110: Object-Oriented Programming and Data Structures"
                    content="This is the second course in the introductory computer science sequence. It teaches basic computer science topics including sorting and searching, asymptotic complexity, recursion and data structures. Almost all material in this course is used in later courses or interviews.
                    <br></br>
                    Typically taught by David Gries and one other CS professor, this class forms the core of many CS topics and forms the basis of general CS knowledge. Many 4000 level courses will have this class as their highest requirement. A very large portion of programming interviews use material from this class.
                    <br></br>
                    This class has a lighter amount of work compared to other CS classes. There are seven projects which can be completed with a partner. There are two prelims and an optional final. Grades in homeworks are typically very high (~90) while prelim grades follow a normal distribution (average between 65 and 75). This means that prelims are weighted heavily when deciding grades, so study up.
                    <br></br>
                    <b>📅 Offered</b>: Every semester
                    <br>
                    <b>☑️ Prerequisites</b>: CS 1110/CS 1112, or AP credit
                    <br>
                    <b>📔 Historical Median Grade</b>: B
                    <br>
                    <b>⏰ Workload</b>: Moderate (5 to 8 hours per week)
                    <br>
                    <b>📝 Notes</b>: This course does assume some programming experience (at the level of CS 1110), but the majority of students will not have background in Java."
                />
                <Accordion
                    title="CS 2800: Discrete Structures"
                    content="The purpose of this course is not to learn about structures that are discrete, as the name implies, but more to introduce basic mathematical concepts and get students to write good proofs. Topics covered include…
                    <br></br>
                    <ul>
                    <li>finite automata</li>
                    <li>functions (injective, surjective, bijective)</li>
                    <li>number theory (Euclid’s algorithm,Euler’s theorem, RSA)</li>
                    <li>graph theory (basic definitions and properties)</li>
                    <li>logic</li>
                    <li>discrete probability</li>
                    <li>induction (strong, weak, structural)</li></ul>
                    The course has been known as a class in which people could get by with little-to-no effort in the past, but this seems to be no longer the case since 2013-2014 when Professor Kozen and Professor Bailey taught it in the Fall and Spring respectively. Although different professors have been teaching it since, the problem sets remain somewhat difficult and much more advanced concepts, such as Turing machines, context-free grammar, computability, and NP-complete problems have been discussed in class in the past year. Prelims have generally been in-class prelims for the past semesters. This last semester, however, prelims were changed to regular evening exams. Depending on the professor, the lecture material may vary, but regardless, a student who is planning to take CS 2800 should expect to…
                    <br></br>
                    <ol>
                    <li>write lots of proofs!</li>
                    <li>be exposed to material that they will see in other classes, whether they be Computer Science related (CS 3110, CS 4820) or not (MATH 2940, MATH 3360)</li>
                    <li>not write a single piece of code</li>
                    <li>not buy any textbooks (because there isn’t an official one!)</li></ol>
                    
                    Some helpful links for the class include…
                    <ul>
                    <li><a href=http://www.cs.cornell.edu/courses/cs2800/2015sp/handouts/pass_tseng_discmath.pdf target=_blank>notes</a> written by professors who have taught the course previously</li>
                    <li>these concise <a href=http://www.maths.qmul.ac.uk/~pjc/notes/prob.pdf target=_blank>notes</a> on probability</li></ul>
                    
                    Other general advice about the course…
                    <ul>
                    <li>The problem sets can be difficult at times but they are excellent materials to help you study for exams. By fully understanding the materials in the problem sets, you should be okay taking the exams.</li>
                    <li>Because the material varies from the professors teaching it, don’t rely on previous prelims to be a good indicator of what the prelim for your semester will be like (unless the same professor is teaching it).</li>
                    <li>If you haven’t used LaTeX much until this course, this is a perfect place to start using it!</li></ul>
                    <b>📅 Offered</b>: Every semester
                    <br>
                    <b>☑️ Prerequisites</b>: One programming course or permission of instructor.
                    <br>
                    <b>📔 Historical Median Grade</b>: B+
                    <br>
                    <b>⏰ Workload</b>: Moderate/Heavy (5 to 10 hours per week)
                    <br>
                    <b>📝 Notes</b>: Realistically speaking, the workload will vary wildly depending on the length of the problem sets. Problem set questions can vary from two or three questions to ten or more questions from textbook. Some questions might be straight-forward calculations and answers while others can be proof questions that often can be rather challenging. But if you ever get stuck and need help, there are office hours throughout the entire weeks that you can go and get help."
                />
                <Accordion
                    title="CS 3110: Data Structures and Functional Programming"
                    content="This course introduces you to the paradigm of functional programming in a language called OCaml, which may be quite different from anything you’ve seen until now. The goal of the course is not to just teach you a fancy new programming style but to use it as a tool to help you learn to be better software engineers overall. Topics covered include:
                    <br></br>
                    <ul>
                    <li>Functional programming</li>
                    <li>Writing and using specifications</li>
                    <li>Modular programming and data abstraction</li>
                    <li>Reasoning about program correctness</li>
                    <li>Reasoning about system performance</li>
                    <li>Useful and efficient data structures</li></ul>
                    Usually the course is a general introduction to functional programming concepts and how they can be applied to real software engineering, but sometimes the course is more mathematical/theoretical, going into depth on topics such as type theory and the constructive real numbers.
                    <br></br>
                    The course consists of lectures as well as but also two weekly recitations taught by undergraduate TAs. The recitations are a fantastic resource for not only asking questions and clarifying concepts with peers, but also gaining hands-on experience, as some recitations involve coding. Recitations will not only go in-depth of important topics covered in lecture, but also cover topics more directly related to problem sets.
                    <br></br>
                    This course, like CS 3410, is a significant jump in difficulty/workload from CS 2110, so it would definitely be wise to start projects early and stay on top of the material if you haven’t gotten into this habit already. There are usually 5-7 projects that consist mostly of programming in OCaml. In the past, the course has varied with regards to working with partners. Last time it was taught by Constable, for example, it featured mostly individual projects; only one was in pairs. There has also been semesters where all projects were pair or group projects. In Clarkson last offering the first few projects were individual, while the next few were (optionally) done with a partner, and the final project was a group project (mandatory) with 3-4 team members. Historically, this final project allows each group more freedom in their software engineering choices, but also expects much more creativity and ingenuity to come from the assignment.
                    <br></br>
                    Helpful links:
                    <ul>
                    <li>Real World OCaml, a book available for free online that is often used as a supplementary text in the course</li>
                    <li>Depending on your background experience, this might be the first course in which you will be exposed to Git, a system that allows remote users to work on coding assignments together. Git can be very scary and confusing for the first time, so brushing upon the basics before the course begins may save some headaches during the semester.</li></ul>
                    <b>📅 Offered:</b> Every semester
                    <br>
                    <b>☑️ Prerequisites:</b> CS 2110 (or equivalent programming experience).
                    <br>
                    <b>☑️ Corequisites:</b> CS 2800
                    <br>
                    <b>📔 Historical Median Grade:</b> B+
                    <br>
                    <b>⏰ Workload:</b> Moderate/Heavy (seems to be around 9 hours based on course evals) (5 to 7 projects a semester, with around 2 to 3 weeks to do each one)"
                />
                <Accordion
                    title="CS 3410: Computer System Organization and Programming"
                    content="This course aims to bridge the gap between software and hardware through topics such as computer organization, systems programming, and hardware/software interface. In terms of the work, you are required to work individually for some of the projects and in a pair for others. The labs are done individually. You may also have written homeworks depending on which professor is teaching the course.
                    <br></br>
                    PA1-3 require you to make a MIPS pipelined-processor through a simulation program called Logisim, which is used to build circuits. You will get familiarized with Logisim through PA1, where you will build an Arithmetic and Logic Unit (ALU) that performs basic calculations. In PA2 and PA3, you will build a functioning five-stage MIPS processor that executes various instructions. PA3 builds on PA2 but is considered to be harder than PA2 since it can be tricky to figure out all the edge cases. PA4 is a friendly hacking challenge which requires you to craft some input to a simplified browser and cause it to print out a different message as its default one. You will essentially be performing a buffer overflow attack on the browser. The last projects, PA5-6, involve writing tests for dynamic memory allocator (malloc) in C and then implementing malloc. A lot of problems arise due to the fact that students are still unfamiliar with commons errors found in C.
                    <br></br>
                    Naturally, this class moves fast since it has to cover materials covered in both ECE 2300 and CS 3420. Reading the book will be a very good supplement. Overall, the materials covered in the class are important to master for any choice of career in CS. The course is also good to know for CS 4410 (Operating Systems), since the material continues approximately where 3410 left off and students use the same tools that you’ve learned here for OS projects.
                    <br></br>
                    Historically there have been 2 prelims and no final exam (final project instead). Projects and Labs are worth ~50% of the final grade, while exams and homeworks are worth the other ~50% (subject to change).
                    <br></br>
                    <b>📅 Offered:</b> Every semester
                    <br>
                    <b>☑️ Prerequisites:</b> CS 2110
                    <br>
                    <b>📔 Historical Median Grade:</b> B+
                    <br>
                    <b>⏰ Workload:</b> Moderate/Heavy. In Spring 2016, new assignments were released every week, and due every 2 (sometimes 3) weeks. The class is split into labs, projects, and written homeworks, which may require at least 10-15 hours of work for non trivial assignments. Larger projects have been known to take longer than 30 hours."
                />
                <Accordion
                    title="CS 4410: Operating Systems"
                    content="This class covers the design and implementation of operating systems. Key topics are as follows:
                    <br></br>
                    <ul>
                    <li>Concurrency</li>
                    <li>Synchronization</li>
                    <li>Scheduling</li>
                    <li>Memory Management</li>
                    <li>Filesystems</li>
                    <li>Networking</li></ul>
                    If you are NOT signed up for CS 4411  concurrently while taking CS 4410, then you will be required to do what is known as Miniprojects (MPs). Even if you are signed up for CS 4411, there will usually be 1 or 2 MPs you are still required to do. In the past, there have generally been 4 MPs on the following topics:
                    <br></br>
                    <ul>
                    <li>Synchronization questions involving semaphores and monitors, and race conditions (done in Python)</li>
                    <li>Implementing malloc (done in C) [may change in fall 2017 due to this now being covered in CS 3410]</li>
                    <li>Implementing a given protocol (done in Python)</li>
                    <li>Implementing a part of a file system (has been done in both Python and C before)</li></ul>
                
                    The projects themselves aren’t too difficult. The first one will be very helpful for preparing for the first prelim and provide students exposure to synchronization questions. For the rest, try to read over the writeup for the projects very carefully, as even overlooking a minor detail may cost you a significant amount of points, especially as grading for many of the assignments is completely decided by the autograder test cases. Never break the 12 commandments of synchronization!
                    <br></br>
                    Another general advice for the MPs would be to try to sketch out what you will be doing before actually implementing the code. Although this is a general advice that can apply to virtually any CS class, this is especially important in OS when you have to, say, implement a protocol that will be designed to respond in a specific manner depending on the context.
                    <br></br>
                    <b>📅 Offered:</b> Every semester
                    <br>
                    <b>☑️ Prerequisites:</b> CS 3410 or CS 3420. Do not take without one of these.
                    <br>
                    <b>📔 Historical Median Grade:</b> Varies.
                    <br>
                    <b>⏰ Workload:</b> If you are not taking it with CS 4411, the workload is on the lighter side. Once you have a good understanding of the writeup for the projects, they don’t take too much time. However, obtaining a good understanding may take some time, so don’t put it off until the last minute. Don’t hesitate to clarify any details that you have with the writeup with TAs and professors, as that can save you a significant amount of time!"
                />
                <Accordion
                    title="CS 4820: Introduction to Analysis of Algorithms"
                    content="This course stays true to its name and exposes students to various algorithms and how to argue for their correctness. The types of algorithms introduced include…
                    <br></br>
                    <ul>
                    <li>Matching algorithms</li>
                    <li>Greedy algorithms</li>
                    <li>Dynamic programming algorithms</li>
                    <li>Divide and conquer algorithms</li>
                    <li>Network flow algorithms</li></ul>
                    
                    It also dives into topics such as Turing Machines, NP-complete problems, and approximation algorithms in the later parts of the course.
                    <br></br>
                    The course has weekly problem sets that usually consists of three problems (two on a short week). Almost all of the problems involve (1) coming up with an algorithm to solve the problem of interest (2) write a proof to explain why the algorithm you proposed solves the problem (3) reason about runtime when applicable. Starting Spring 2016, some problem sets actually included a problem that involved coding in Java.
                    <br></br>
                    Some helpful advice for the class includes…
                    <ul>
                    <li>the textbook, written by Cornell professors (Eva Tardos and Jon Kleinberg) is super comprehensive and is structured just like the lectures. If you ever had to buy a textbook, this would be the most helpful one in terms of how much it will actually help you with the class</li>
                    <li>even if you plan to put off doing the problem set until a later time, try to read the problems as soon as they are released. Just thinking about the problems in your downtime can save a lot of time when you actually get down to doing it</li>
                    <li>if you haven’t used LaTeX much up until this point… be prepared! Sometimes typing up your answers can take longer time than actually doing the problem, so make sure to always leave enough time to type.</li></ul>
                    <b>📅 Offered:</b> Every semester
                    <br>
                    <b>✅ Prerequisites:</b> CS 2800 and CS 3110
                    <br>
                    <b>📔 Historical Median Grade:</b> This seems to vary wildly depending the professor; with Professor Tardos, the median was an A-. With Professor Kleinberg (Bobby), the median was a B/B+
                    <br>
                    <b>⏰ Workload:</b> The best description of the workload for CS 4820 is constant. With weekly problem sets, there is not much downtime of not actually having something due. Once you start using your late days as well, you may end up in a situation where you have to do 2 problem sets in one week."
                />
            </section>
            <section className="Supplements">
                <h2>Supplements to the Core Classes</h2>
                <p>These classes can be taken alongside their respective core classes, to enhance your understanding of the material and to reinforce topics.</p>
                <Accordion
                    title="CS 2111: Programming Practicum"
                    content="Weekly supplemental class for CS 2110; credited S/U. This course does NOT fulfill the CS project requirement despite being called a practicum. Usually is taught by the course instructor(s) and delves deeper into topics covered in recent CS 2110 lectures. Before exams, it can also double as a review or Q&A session."
                />
                <Accordion
                    title="CS 4411: Practicum in Operating Systems"
                    content="For this class, you and your partner will be graded solely on the 6 projects that you work on throughout the semester. All of the projects are written in C, and each take a considerable amount of time (Heavy workload). Each project delves deeper into a topic that was briefly introduced in the lecture, which gives you a deeper understanding of the material. If you take this class, you have to do only the first Mini Project (MP) for OS and can ignore the other ones.
                    <br></br>
                    The projects are estimated to be around 30-40 hours of work, but they are spaced out 2-3 weeks apart. Note that the first 4 projects build on each other. If you have a mistake on project 1, you must fix it before you turn in project 2 or else you will lose points. Or even worse, you will run into a huge error later down the line. More often, significant points are lost on projects by missing a detail that was in the writeup. For this class especially, make sure to check Piazza frequently for updates and clarification on the specifications for the project so that you don’t lose points for dumb mistakes.
                    <br></br>
                    Most of the difficulty comes from the nuances of working in C and familiarizing yourself with the codebase. If you need C help, go early in the week since office hours have to accommodate both 4410 and 4411 students.
                    <br></br>
                    General tip to score well on projects: even though it may be tedious, try to write a very simple test for each functionality you implemented. While working in C, it is easy to cast to void pointers and lose all type information, so even correctly seeming code can be wrong because of a simple mistake. If you do this, and make sure to cover every part of the project specifications, you will do very well in the class.
                    <br></br>
                    Though hailed as one of the more notorious of practicums, this course provides a very fulfilling experience. It will stress the importance of building and testing concurrently (not building, then testing), as well as trying to cover every possible corner case while trying your best to follow specifications.
                    <br></br>
                    Also for those who are curious, you CAN take CS 4411 as a standalone class, although if that is the case, then you should have taken CS 4410 prior to taking CS 4411."
                />
            </section>
            <section className="Alternatives">
                <h2>Alternatives to the Core Classes</h2>
                <Accordion
                    title="CS 1112: Introduction to Computing Using MATLAB"
                    content="This is an alternate version of CS 1110 typically taken only by engineering students considering majors besides computer science."
                />
                <Accordion
                    title="CS 2112: Object-Oriented Design and Data Structures - Honors"
                    content="This is the honors version of CS 2110. While the two courses cover approximately the same general topics, CS 2112 goes into greater depth with the material and has bigger and more challenging assignments. In particular, in CS 2112 you will learn more about algorithms and algorithm analysis on the theory side and about software design principles on the practical side.
                    <br></br>
                    The main difference from CS 2110, however, is in the projects. The coursework consists of several individual assignments followed by a final project spanning multiple assignments that you will work on with a partner for the remainder of the course. The assignments often involve implementing many of the data structures and algorithms covered in class. The final project also involves working with a partner in designing and managing a large codebase (thousands of lines of code) from scratch. These assignments are far heavier than the ones in CS 2110, so definitely consider the rest of your schedule and commitments before deciding to take this course. If you have the time to devote to this course though, you will learn a lot and also find yourself more equipped for the difficulty of upper-level CS courses.
                    <br></br>
                    While projects from other introductory classes (CS 1110, CS 2110) focus more on getting familiar with the language and the fundamentals of programming, CS 2112 focuses more on object oriented design. Having a good design and working plan goes a long way. Talking to the TA’s or the professor about your design will drastically reduce your work time. Make sure to devote enough time talking with your partner about design.
                    <br></br>
                    <b>📅 Offered:</b> Irregularly, every 2 or 3 semesters
                    <br>
                    <b>✅ Prerequisites:</b> Very good performance in CS 1110 or CS 1130 or equivalent course in Java, C, or C++, or permission of the instructor.
                    <br>
                    <b>📔 Historical Median Grade:</b> A-
                    <br>
                    <b>⏰ Workload:</b> Heavy, 10 to 20 hours per week"
                />
                <Accordion
                    title="CS 3420: Embedded Systems"
                    content="This course can serve as an alternative to CS 3410 in terms of fulfilling the CS major’s core requirement. Someone who has NOT taken ECE/ENGRD 2300 is strongly discouraged to take the course; otherwise, you will not have covered the same material that is covered in CS 3410, as you will miss out on learning the details of the building blocks of a CPU. In addition, ECE/ENGRD 2300 exposes students to assembly, which you are assumed to be familiar with at the beginning of CS 3420.
                    <br></br>
                    The topics covered include:
                    <ul>
                    <li>assembly language programming</li>
                    <li>interrupts and I/O</li>
                    <li>concurrency models</li>
                    <li>task/threads synchronization</li>
                    <li>real-time constraints and scheduling</li>
                    <li>communication</li>
                    <li>data conversion</li>
                    </ul>
                    A good amount of the material actually overlap with material that is taught in CS 4410 (around 30 to 50%, depending on how much material you are able to retain from CS 3420).
                    <br></br>
                    Throughout the semester, you will be using the ARM FRDM-K64F board by NXP (MSP430 Development Tool by Texas Instruments was used in the past) for all of your labs. Labs consist of implementing concepts taught in class using C and loading the program to the chip and are done with partners. Historically, partners for Labs 1 - 4 are randomly assigned while you can choose your own partners for Labs 5 and 6. There are 6 total labs for the course…
                    <ul>
                    <li>Assembly language programming</li>
                    <li>Interacting with I/O devices</li>
                    <li>Concurrency (I/O and interrupts)</li>
                    <li>More concurrency (locks and conditional variables)</li>
                    <li>Scheduling (real-time and periodic)</li>
                    <li>Final Project</li></ul>
                    The final project can be basically whatever you decide to build with the FRDM-K64F board and typically involves applying some concepts from previous labs and lectures. Just like with the labs, the final project can be done with a partner. Additionally, each group will be assigned a mentor to help out with any questions regarding the project.
                    <br></br>
                    The course also has a few written homeworks that are graded pass/fail based on if you get 60% of it right, but they require little to no time to complete. Once a week, there will be a short i>Clicker quiz as well covering the topics lectured from the previous week.
                    <br></br>
                    Some helpful advice for the class include…
                    <ul>
                    <li>Start your labs early! It is sometimes very hard to tell whether there is a bug in your code, so you might save yourself a lot of stress by making sure you have ample time to debug. This advice especially applies for the last two labs, which may seem a little rushed due to the proximity of finals season.</li>
                    <li>Try to review the material on a weekly basis to prepare yourself for the once-a-week i>Clicker quiz! This will also help you prepare for the prelims.</li>
                    <li>The professor particularly emphasizes that the prelims do not cover material that have not been discussed in class. Thus, it can be very helpful to go through the VideoNotes and lecture notes in preparation for the exams.</li></ul>

                    <b>📅 Offered:</b> Every spring
                    <br>
                    <b>✅ Prerequisites:</b> ECE/ENGRD 2300
                    <br>
                    <b>📔 Historical Median Grade:</b> B
                    <br>
                    <b>⏰ Workload:</b> No final exam to worry about and the projects aren’t TOO time consuming (though you may spend quite some time in office hours). The workload for the final project will vary wildly on what your group decides to pursue."
                />
            </section>
            <section className="Electives">
                <h2>Electives</h2>
                <Accordion
                    title="CS 3152: Introduction to Computer Game Development"
                    content="In this course, students are assigned into groups of 6 containing programmers and designers at the very start of the semester, and work within that team to build a fully fledged desktop PC/Mac game that will enter the annual GDIAC Showcase at the end of the semester.
                    <br></br>
                    Lectures for the course cover both design and programming elements of computer game development, and serves as a useful resource for designing and building the game. For the first month while brainstorming game ideas, programmers and designers all must complete a series of 4 labs designed to teach you basic programming or designing techniques. The game is built using Java and the LibGDX framework. Art assets are generally created via Adobe Photoshop.
                    <br></br>
                    After the first month, there will be 7 milestones, with each one typically taking two weeks. The major milestones are: Non-digital Prototype, Gameplay Prototype, Technical Prototype, Alpha Release, Beta Release, Final Release, GDIAC Showcase. For each milestone, you will estimate what you will do for the milestone, demonstrate the milestone’s work in class or in labs, reflect on whether you met the goals for this milestone, and receive detailed feedback as well as suggestions moving forward from the professor and the TAs.
                    <br></br>
                    This course must also be taken with the 1 credit ENGRC 3152 course. Therefore, there are also document writing throughout the course. For every two week sprint, there will be a two week report. Other documents include the Concept Document, Gameplay Specification, Architecture Specification, Design Specification, and Game Manual. These documents will typically undergo three rounds of revision, where the last version turned in will be the final grade for the documents.
                    <br></br>
                    In the GDIAC Showcase, your game will be presented to the public. This counts at the final exam of the course, and the audience reaction will also be part of your final grade. The audience will be allowed to vote for their favorite, and there will be an award ceremony at the end of the showcase for various awards.
                    <br></br>
                    Because this is a very serious course where approximately 10 hours of work per person per week is expected, (and is a very competitive course to get in) there is an application handed in to professor Walker White that will determine whether you can get into the course, as well as your team assignment.
                    <br></br>
                    Some helpful advice for the class include…
                    <ul>
                    <li>Team dynamics is really important. Communicate often and resolve conflicts as soon as possible. Know your teammates strengths and weaknesses so as to balance work amongst yourselves.</li>
                    <li>Take the labs seriously and use them as a guideline to learn. A lot of the programming part is based heavily on some of the labs, and you are free to use any lab code. Knowing the labs well will make your lives easier when developing the game. For designers, the labs are great tutorials to help you get familiar with photoshop (if you are not already so) on digital art and animation.</li>
                    <li>Learn to use git well. Merge conflicts on the morning of a demo day is a very bad idea.</li></ul>

                    <b>📅 Offered:</b> Every spring
                    <br>
                    <b>✅ Prerequisites:</b> For programmers it is CS 2110 or permission of instructor. For designers it is INFO 2450 and/or submission of art/design portfolio to instructor.
                    <br>
                    <b>📔 Historical Median Grade:</b> A-
                    <br>
                    <b>⏰ Workload:</b> Approximately 10 hours per week outside of class"
                />
                <Accordion
                    title="CS 4110: Programming Languages and Logic"
                    content="An introduction to the theory, design, and implementation of programming languages. Topics have historically included different semantics for mathematically reasoning about PLs, type systems, lambda calculus, exceptions, side effects, objects, and modules and probabilistic programming.
                    <br></br>
                    This class is problem-set based, and only some of the homeworks include coding (OCaml). It’s a good introduction to how programming languages work; topics touched in Compilers are evident throughout the course, though there is little overlap in terms of the actual content taught.
                    <br></br>
                    Some helpful advice for the class include…
                    <ul>
                    <li>Homeworks can be done in partners. If dividing the work, make sure to go over everything to know you understand the solutions. Some problems might be tricky.</li>
                    <li>It’s good to be comfortable with proofs and induction!</li></ul>
                    
                    <b>📅 Offered:</b> Usually every fall
                    <br>
                    <b>✅ Prerequisites:</b> CS 3110 or permission of instructor
                    <br>
                    <b>⏰ Workload:</b> Not too heavy; 5 hours a week on average"
                />
                <Accordion
                    title="CS 4120 + CS 4121: Introduction to Compilers + Practicum"
                    content="CS 4120 introduces compilers; lexing, parsing, type-checking, intermediate representations, optimization and code generation. The practicum is required, and is most of the work.
                    <br></br>
                    Some helpful advice for the class include…
                    <ul>
                    <li>Don’t underestimate the assignments. Always over-estimate the amount of time they will take to finish, and make sure to allow for a few days of debugging. Especially on the latter assignments, debugging can get tricky.</li>
                    <li>Make sure to apply all the good practices of software design and engineering you have learned. The compiler you write will be a significantly-sized project; big enough so that no single person will be able to know all the parts. Document, write regression tests, don’t allow technical debt; it will come back to bite you! Investing that extra hour or two on the first few projects will save you days on the last few.</li>
                    <li>Don’t leave team-members behind. Sometimes people have a rough week, and might fall behind; the amount of work that needs to be done is enough that it will always pay off to invest a few hours to keep your team members up to speed and productive, over focusing on work and letting them figure it out themselves.</li></ul>
                    <b>📅 Offered:</b> Every other spring
                    <br>
                    <b>✅ Prerequisites:</b> CS 3110 and CS 3410
                    <br>
                    <b>⏰ Workload:</b> Heavy. There’s a handful of written homeworks that can be finished in a sitting or two. Most of the work revolves around the practicum project, implementing a compiler, which can get really heavy."
                />
                <Accordion
                    title="CS 4152: Advanced Computer Game Development"
                    content="In this course, students are divided into interdisciplinary teams of six students, comprised of both programmers and designers. Team members must work together throughout the semester to build a fully-fledged cross-platform mobile game that will enter the annual GDIAC Showcase. Devices are useful but not required; some students may be interested in purchasing a cheap Android phone or iPod touch for development purposes.
                    <br></br>
                    Lectures for the course cover both design and programming as applied to computer game development. There are no labs. Games are built using C++ and Cocos2d-x, while art assets are generally created via Adobe Photoshop.
                    <br></br>
                    The semester is split into several milestones, with each one typically taking two weeks. These include various prototypes (Non-digital, Gameplay, Technical) and releases (Alpha, Closed Beta, Open Beta, Showcase). Each milestone requires careful planning and sizing; at sprint’s end, teams can expect to receive detailed feedback from the course staff and an opportunity for self-evaluation.
                    <br></br>
                    This course must also be taken with the 1-credit ENGRC 4152. Therefore, document writing is an integral part of the class; for every two-week sprint, there will also be a two-week report. Other assigned documents include the Concept Document, Gameplay Specification, Architecture Specification, Design Specification, and App Store Proposal. These documents will typically undergo several rounds of revision, in which the last version turned in will earn the final grade for the document.
                    <br></br>
                    In the GDIAC Showcase, your game will be presented to the public. This counts as the final exam for the course, with audience reception factored into a game’s final grade. GDIAC attendees vote for their favorite games, and awards in various categories are distributed at the end of the Showcase.
                    <br></br>
                    Because this is an intensive course where approximately 10 hours of work per-person per-week are expected, prospective students must apply and be approved by Professor Walker White before enrolling. Applications are also used as the basis for team assignments, which are made by Professor White.
                    <br></br>
                    Some helpful advice for the class:
                    <ul>
                    <li>Team dynamics are crucial. Communicate often, and resolve conflicts as soon as possible.</li>
                    <li>Planning is everything. Know your teammates’ strengths, weaknesses, and schedules, and balance work accordingly.</li>
                    <li>Documentation and collaboration are key when working on a software project of this magnitude. Write sustainable code, and be prepared for inevitable refactoring and cleanup efforts.</li>
                    <li>Success is interdisciplinary! Successful team members often fill multiple roles as needed.</li></ul>
                    <b>📅 Offered:</b> Every spring
                    <br>
                    <b>✅ Prerequisites:</b> For programmers it is  CS 3152 and one of the following (or permission of the instructor): CS 3300, CS 4620, CS 4700, CS 4758, or CS 5414. For designers it is INFO 3152 and INFO 3450 (or permission of the instructor).
                    <br>
                    <b>📔 Historical Median Grade:</b> A-
                    <br>
                    <b>⏰ Workload:</b> Approximately 10 hours per week outside of class"
                />
                <Accordion
                    title="CS 4154: Analytics-Driven Game Design"
                    content="In this class, students work together in groups of 5-6 to build a browser-based game, gathering information over the course of the semester through logging players’ actions and using it to improve the game over several iterations. Groups typically consist of 1 or 2 designers, and 4 programmers.
                    <br></br>
                    Lectures combine basic elements of game design with topics on data gathering for games. Game design topics taught include learnability and user interfaces, procedural content generation, balancing, and level design. Students will also learn how to collect data and make conclusions based on it to improve their game.
                    <br></br>
                    The games are typically written in Flash/HTML5, and have in the past always been 2D games. There are five milestones in total, spaced out approximately every 1.5 weeks. The last two milestones are public, and consist of releasing to Newgrounds and Kongregate respectively. Most games will receive at least 1,000 views.
                    <br></br>
                    After each milestone, groups present to the class on the data they gathered, as well as any conclusions they drew from this data. For example, a group may notice a steep dropoff in the number of players that pass a certain level, and talk about why this might be the case and how they can fix it. In at least one milestone, students must also perform an A/B test on a release of their games.
                    <br></br>
                    Students who are interested should expect to spend at least 10 hours a week on this class. In addition, students will need to meet with their group often - the most successful games in this class are built by groups that communicate and work together effectively.
                    <br></br>
                    This class is sometimes compared with CS-3152/4152; its format draws influence from these classes. Games in the analytics-driven class are slightly smaller in scope than those of the other game design courses, due to the emphasis on iterating on gameplay through analytics. In addition, lectures in this class overlap slightly with CS-3152, though most lectures are specific to this class. The class format is also fairly similar, with some class periods reserved for playtesting.
                    <br></br>
                    Previous game design experience is recommended, but not required, for both programmers and designers. In addition to the prerequisites listed below, some knowledge of MySQL for programmers is also helpful but not required. Designers should have some art and animation experience.
                    <br></br>
                    Some helpful advice for the class:
                    <ul>
                    <li>Make absolute sure that your game is correctly logging player actions before (and after!) each milestone release.</li>
                    <li>Work together with your team. Schedule work meetings and make sure everyone comes. It will help you keep track of your game’s progress, and generally help your team dynamic. This includes designers as well.
                    Helpful advice in the other game design classes apply here as well.</li></ul>
                    <b>📅 Offered:</b> Last offered Fall 2018
                    <br>
                    <b>✅ Prerequisites:</b> Programmers: CS 2110 (or permission of the instructor). Designers: Submission of art/design portfolio to instructor.
                    <br>
                    <b>📔 Historical Median Grade:</b> A-
                    <br>
                    <b>⏰ Workload:</b> At least 10 hours per week"
                />
                <Accordion
                    title="CS 4320: Introduction to Database Systems"
                    content="This course introduces relational databases, typical NoSQL databases, and big data. The topics that the professor focuses on changes a little from semester-to-semester, but you can usually expect to cover:
                    <ul>
                    <li>relation models</li>
                    <li>SQL queries</li>
                    <li>query processing and optimization</li>
                    <li>transactions and recovery methods</li>
                    <li>NoSQL systems</li>
                    <li>database design</li>
                    <li>B+ trees</li>
                    <li>MapReduce algorithm</li></ul>
                    Lectures are pretty fast-paced because of the breadth of material that needs to be covered. If you’re taking the practicum concurrently, this material neatly lines up with whatever you’re expected to do for your practicum projects.
                    <br></br>
                    There are around 5 homeworks that are spaced out during the semester and are worked on in groups of 2 or 3. The primary languages used in homeworks are SQL, PostgreSQL, Java, and Neo4j; you are expected to be able to install any software that you do not already have. The staff grade the coding part of homework using automated tests, so it is very important to follow their specifications, especially for any input/output.
                    <br></br>
                    There is one midterm and one final. The final is cumulative, but focuses on material covered after the midterm. It is easy to do well on these tests if you’ve been attending all the lectures and you’re able to recreate/understand the homework solutions.
                    <br></br>
                    Some helpful advice for the class include…
                    <ul>
                    <li>At least do a cursory read-through of each homework the day it’s released! Then you can stew over ideas from the start and maybe come up with your solution faster once you actually get coding.</li>
                    <li>Especially if you divvy up the work for homeworks, make sure to revisit the parts your partner did and try them yourself so that you can ace those topics on the midterm/final.</li></ul>
                    <b>📅 Offered:</b> Every semester
                    <br>
                    <b>✅ Prerequisites:</b> CS 2110 and CS 2800
                    <br>
                    <b>⏰ Workload:</b> Each homework requires you use your given time effectively, and they progressively get harder. There is a midterm and a final exam, both of which are not too difficult if you’ve been following along during lectures."
                />
                <Accordion
                    title="CS 4321: Practicum in Database Systems"
                    content="This course is designed to supplement the main class, CS 4320, but it’s not necessary to take if you simply want to learn about database systems. You will be building a simple database system from scratch that can handle baby SELECT...FROM...WHERE queries. The language you will be using is Java, and the IDE is Eclipse.
                    <br></br>
                    In terms of material, this course can easily be taken concurrently OR after you’ve completed CS 4320. If you’re taking it concurrently, each project assumes only knowledge that you’ve covered during CS 4320 already. There are around 5 projects that are spaced out during the semester and are worked on in groups of 2 or 3. These projects are pretty substantial, which means get started early and work on it every day if you can!
                    <br></br>
                    Grading your projects is almost entirely automated, so you have to be extremely careful about following the instructions precisely, especially your input/output format. There is a “breaking automation” policy that allows you to recover points if you were genuinely misunderstanding something, and there is the normal regrading policy--both should be exercised very rarely and only if the cost for a regrade is worth the correction.
                    <br></br>
                    Some helpful advice for the class include…
                    <ul>
                    <li>Same as for the main course, try to at least do a cursory read-through of each project the day it’s released! Then you can stew over ideas from the start and maybe come up with your solution faster once you actually get coding.</li>
                    <li>Use some version control system, like Github to sync with your partner(s). Also, if you ever need to undo what you changed that make your system break, having saved previous versions makes rollback much easier!</li></ul>
                    <b>📅 Offered:</b> Every semester
                    <br>
                    <b>✅ Prerequisite/Corequisite:</b> CS 4320
                    <br>
                    <b>⏰ Workload:</b> The projects are pretty time-consuming, but not too hard. If you are taking this with the main course, it may sometimes seem  like half your week is dedicated to database systems, so be very careful planning your time well."
                />
                <Accordion
                    title="CS 4620: Introduction to Computer Graphics"
                    content="This course gives an introduction to the field of generating images using computers and provides a foundation for pursuing the subject more advanced and specific areas like animated films and video games. The course starts with the basic building blocks of representing a three-dimensional scene, including object meshes, perspective, lighting, and transformations in space, and then goes on to rendering techniques like ray tracing and rasterization through the graphics pipeline. Finally, subjects such as curves, textures, animation, and other advanced topics are covered. The course involves a decent amount of mathematics, including mostly linear algebra with a little bit of calculus, and prior knowledge is not a prerequisite but of course would be helpful.
                    <br></br>
                    There are generally around 7 projects (under Professor Bala), covering object meshes, basic ray tracing, scene rendering, shaders in GLSL, splines, animation, and advanced ray tracing. Projects consist of a programming part (done with a partner) and a written part (done alone). The written parts are usually a few questions designed to reinforce the theory taught in class. Programming assignments are done in Java and come with skeleton code as well as the course-created Java graphics framework. These are straightforward for the most part, as most of it is just translating the procedures or mathematics they describe into code. However, it is easy to make minor mistakes that are often very difficult to debug due to the nature of the subject, as you generally have few references other than the generated image to troubleshoot the problem, so it is important to be careful when programming and to really understand the theory before tackling the implementation. The course Java framework, although constantly being improved by the TAs, can also be buggy at times or counterintuitive if you're not careful, so read the specs carefully. Programming assignments are graded in scheduled demo sessions and are evaluated mostly visually based on the end result rather than through automated test cases.
                    <br></br>
                    There is also a midterm and a final, which along with the programming and written assignments encompass graded material in the course.
                    <br></br>
                    <b>📅 Offered:</b> Fall, sometimes spring
                    <br>
                    <b>✅ Prerequisite:</b> CS/ENGRD 2110
                    <br>
                    <b>⏰ Workload:</b> Moderate; relatively straightforward assignments but debugging can be time-consuming"
                />
                <Accordion
                    title="CS 4621: Computer Graphics Practicum"
                    content="This course provides extra programming assignments to supplement CS 4620. There are three programming assignments and a final project, and the meetings of the course either go over material relevant to the assignments or are simply consultation meetings to discuss the final project with your designated TA(s).
                    <br></br>
                    The assignments focus on writing shaders, which are special programs that allow you to manipulate the way objects are drawn. This extra experience can be very useful if you want to pursue graphics further in practical applications, since shaders are an essential part of the GPU rendering pipeline used to render most scenes.
                    <br></br>
                    The final project is open-ended and done over the course of about a month, from project proposal to final demo. The project should go beyond the scope of the regular assignments and demonstrate techniques learned in the main course. Other than that, the entire subject and how far you want to go is up to you, so you have a lot of room to be creative. In terms of the written portion, the project proposal should be about two pages and the final project report is three to five pages.
                    <br></br>
                    Grading for the regular assignments is just like the grading in the main course (demo with a TA). The final project is also graded at a demo session and is evaluated based on difficulty of the techniques attempted/achieved and effort.
                    <br></br>
                    <b>📅 Offered:</b> Same as CS 4620
                    <br>
                    <b>✅ Prerequisite/Corequisite:</b> CS 4620
                    <br>
                    <b>⏰ Workload:</b> Assignments are similar in workload to CS 4620 assignments; final project should be at least as difficult as a regular assignment but you decide how much you want to put into it."
                />
                <Accordion
                    title="CS 4670: Introduction to Computer Vision"
                    content="Computer vision is a wide-ranging discipline that aims to gain a high level understanding of the world by analyzing digital images. It is also one of the main applications of machine learning, and common learning tasks, such as object recognition, are covered in this course.
                    <br></br>
                    This course covers a breadth of subjects about digital images starting from the level of an unfamiliar beginner and then builds up to more complex techniques. Students first learn about how an image is made up (image representation, filtering, fourier analysis) and then dive into the fundamental theories and techniques used in the field (feature detection, image transformations, single view modeling, stereo view modeling, structure from motion), and finally it finishes off with a strong focus in deep neural networks (Convnets, object recognition, face recognition, scene categorization), which have recently become more dominant in the field.
                    <br></br>
                    This is a project-based course, with students expected to complete roughly 5-6 projects and 2-3 homeworks over the course of the semester. The projects focus on the actual implementation of the theories learned in class. In previous semesters (Professor Bala), students have implemented their own panorama generating program, programs to recover 3D geometry of objects given 2D images, and constructed their own convolutional neural networks for image recognition.
                    <br></br>
                    <b>📅 Offered:</b> Spring
                    <br>
                    <b>✅ Prerequisite:</b> CS 2110/ENGRD 2110 and CS 2800 or equivalent. Linear algebra is not required but the course will go smoothly with more comfort in understanding and manipulating linear algebra concepts.
                    <br>
                    <b>⏰ Workload:</b> Projects are within the normal amount of work. There are not as many homework assignments as in other classes, but they are nontrivial."
                />
                <Accordion
                    title="CS 4700: Foundations of Artificial Intelligence"
                    content="This course covers the history of artificial intelligence, with introductions to the major areas and research fields being tapped into today. In the past, the topics covered included:
                    <ul>
                    <li>AI methodology</li>
                    <li>Problem-solving strategies (search algorithms)</li>
                    <li>Heuristics</li>
                    <li>Knowledge representation</li>
                    <li>Logic and deduction</li>
                    <li>Reasoning and planning</li>
                    <li>Machine learning (decision trees, neural networks)</li></ul>
                    This class is structured around past research, kind of in a theory-and-example format, and requires attending lecture a couple of days during the week. There is a textbook (typically the one published by Russell and Norvig) that supplements the lectures and also contains a few of the homework problems.
                    <br></br>
                    The 4 homework assignments are assigned a bit sporadically, but always cover the material since last assignment. You also tend to get a handful of late-day extensions for turning in homeworks. These assignments are nontrivial for the most part, and cover much of the material that will be tested during the exams. There are two exams: the midterm and the final, which account for the bulk of your grade, and feature questions similar to those you’ve seen in the homeworks. In the past, class participation (questions/answers and comments during class) was also included as a mandatory part of your grade, but was changed to an optional extra-credit in Fall 2016 due to the size of the class.
                    <br></br>
                    There are a few TAs for this course, so use this resource wisely! Discussion of topics is encouraged, again because this class covers relevant modern AI theory and research, so the TAs can often shed some light on questions you have that are even outside the scope of the course. Finding a study group or discussing concepts on Piazza is a good way to way of reviewing your weak subjects.
                    <br></br>
                    <b>📅 Offered:</b> Fall, sometimes spring
                    <br>
                    <b>✅ Prerequisite:</b> CS 2110/ENGRD 2110 and CS 2800 or equivalent
                    <br>
                    <b>⏰ Workload:</b> There are not as many homework assignments as in other classes, but they are nontrivial. Studying for the exams is not too time-consuming if you’ve kept up with the lectures and homeworks."
                />
                <Accordion
                    title="CS 4701: Practicum in Artificial Intelligence"
                    content="This course is designed to supplement the main class, CS 4700, by allowing students to apply AI concepts in a practical setting. Students should note that CS 4701 does not teach additional AI-related concepts since it is solely a project-based course where students work on a semester-long AI project either individually or with a partner. The project is completely up to the students as long as it demonstrates a mastery of some important AI-related topics. Previous examples of course projects include games like Othello and Tetris as well as chat bots.
                    <br></br>
                    Aside from a scheduled section to explain the project requirements, there are no lectures or discussions for this course. Performance in the class is mainly determined by a final project presentation to the professor at the end of the semester. Although it is recommended that enrolled students have taken CS 4700, many students have taken only CS 4701, as they can independently learn the AI concepts required for the development of their project.
                    <br></br>
                    CS 4701 is required for the AI vector.
                    
                    Loose structure:
                    <ul>
                    <li>Project proposal (6-8 pages)</li>
                    <li>Project content/code</li>
                    <li>Final Report (10-20 pages)</li>
                    <li>20-min presentations given during finals (10-20 slides)</li></ul>
                    Some helpful advice for the class include…
                    <ul>
                    <li>This class is nice in that students get to define their own deadlines in terms of project milestones but don’t leave all the work to finals week!</li>
                    <li>The final presentation to Professor Selman is more like a 2-way conversation since he tends to ask a lot of questions, so be ready to talk about any project design/development decisions and explain implemented AI concepts.</li></ul>
                    <b>📅 Offered:</b> Fall
                    <br>
                    <b>✅ Prerequisite/Corequisite:</b> CS 4700
                    <br>
                    <b>⏰ Workload:</b> The workload for CS 4701 depends entirely on how complex the project is and how much effort students choose to put into the project. There are only two deliverable deadlines throughout the semester: a project proposal due mid-semester and a final 20-min presentation with a final project report and demo to Professor Selman at the end of the semester."
                />
                <Accordion
                    title="CS 4740: Introduction to Natural Language Processing"
                    content="This course is an introductory course to Natural Language Processing (as the name clearly suggest). It teaches how computers use human languages as inputs, outputs, or both and covers parsing, machine translation, grammar induction, and information retrieval. Basically the course is about how computers can take human language and understand it. (Very very basic concepts of parsing and grammar induction were taught in CS 2800 and CS 2110 so the ideas might seem familiar.)
                    <br></br>
                    Some helpful advice for the class include… (Note some of this advice pertaining to the course is from the course Professor Cardie taught)
                    <ul>
                    <li>Know Python (although any language is acceptable, but for this course, Python would be a more convenient language due to existing natural language processing Python libraries.</li>
                    <li>There is a lot of information to know for the final, so study at least 2 to 3 days earlier. However it is fairly straightforward and is based off of the lecture slides. It covers everything learned throughout the semester.</li>
                    <li>Find a good group for the projects</li>
                    <li>Start the projects at least 3 to 4 days in advance if you don’t want the class to get too stressful</li>
                    <li>Do not wait until the last day to do projects. Some algorithms take a long time to run.</li></ul>
                    <b>📅 Offered:</b> Fall
                    <br>
                    <b>✅ Prerequisite:</b> CS 2110
                    <br>
                    <b>⏰ Workload:</b> There are usually 5 critiques over the semester and each one usually takes up two hours. There are also usually 4 major projects that take up to 20-30 hours and are either done in groups of 2-3 or 3-4. Make sure to find a good group if you don’t want to be the one carrying. These projects are split up into two parts. The second part is usually the heavier part of the project, but you get feedback for part 1 to help you. Part 1 is mainly creating baselines and planning."
                />
                <Accordion
                    title="CS 4780: Introduction to Machine Learning"
                    content="An introductory course to supervised learning. This course is recommended to any student wanting a starting point to explore the field of machine learning, since the materials covered assume no prior knowledge. This course covers the theory behind some of the most important supervised machine learning models, and is focused on theory and proofs of why these models work. This gives the students the ability to reason about in what situations certain models can be advantageous. In addition, students get to implement/debug each of these models themselves in order to figure out the nuances, which helps build a stronger intuition of how they work. This class does not focus heavily on the applications of machine learning. For applications, see NLP or CV.
                    
                    The notes given during class and posted online are outlines of the proofs / theory that the class went over that day. During class, be attentive and don’t accept the proofs as they are. Try to focus on why certain things are true and ask after class for clarification, if blocked.
                    <br></br>
                    <b>📅 Offered:</b> Spring
                    <br>
                    <b>✅ Prerequisite:</b> Programming skills (e.g. CS 2110 or CS 3110), and basic knowledge of linear algebra (e.g. MATH 2940), and probability theory (e.g. CS 2800). Familiarity in statistics and linear algebra is recommended but fluency is not required. The programming language used is Julia or Python.
                    <br>
                    <b>⏰ Workload:</b> About 1 Programming assignment a week, but they are light and take a couple hours at most. In Fall 2016 with Prof. Weinberger, there was an autograder that displayed your assignment scores immediately upon submission, so you could stop working depending on how satisfied you were with your score. Programming projects are usually worked on with 1 other partner."
                />
                <Accordion
                    title="CS 4786: Machine Learning for Data Science"
                    content="An introductory course in machine learning, with a focus on data modeling and related methods and learning algorithms for data sciences. Topics include dimensionality reduction, clustering, and probabilistic-modeling topics.
                    <br></br>
                    Performance in the class is determined mainly by 3-6 assignments and 2 competitions. The assignments, which are to be done individually, are designed to test your understanding of the fundamentals of the course material. They occasionally require light coding, but students do not have to submit the code they use. The competitions are group projects of up to four people.  Given a set of files and preliminary data, teams make educated predictions that are submitted onto Kaggle, a site for predictive modelling. A little less than half of the competition grade comes from the Kaggle score/performance percentage (how accurate the prediction is) relative to the other students in the class. Most of the competition grade comes from a written report, where teams explain how they set up the model to use the data and their rationale in a clear fashion.
                    <br></br>
                    Some helpful advice for the class includes…
                    <ul>
                    <li>Even though there are no examinations (no prelims or a final), stay up to date with the material. The homeworks will go by much quicker with a basic understanding. The lectures also provide exactly the procedures you need to do well in the competitions.</li>
                    <li>While the course is not coding intensive, you will need to do some light coding. It is a good idea to brush up on Python and/or Matlab.</li></ul>
                    <b>📅 Offered:</b> Spring
                    <br>
                    <b>✅ Prerequisite:</b> probability theory (BTRY 3080, ECON 3130, MATH 4710, or strong performance in ENGRD 2700 or equivalent); linear algebra (strong performance in MATH 2940 or equivalent); CS 2110 or equivalent programming proficiency
                    <br>
                    <b>⏰ Workload:</b> 6 bi-weekly assignments and 2 competitions. A majority of the assignments can be completed in a couple of hours with sufficient understanding of the material and/or help from course staff. The competitions take significantly longer in terms of man hours, but they are group projects (up to 4 students). Starting early and making submissions regularly before the deadline will guarantee a decent competition score."
                />
                <Accordion
                    title="CS 4810: Introduction to Theory of Computing"
                    content="An introductory course to some topics in theoretical computer science. This course is useful for anyone interested in more theoretical aspects of computer science. The topics generally include finite automata, nondeterminism, Turing machines, computability, and NP-completeness. <a href=https://www.google.com/url?q=https://docs.google.com/a/cornell.edu/document/d/1yJw9Co0l7j6g3M03z5QQAykTRZPJmku5Kan12hBVMho/edit?usp%3Dsharing&sa=D&ust=1522738116993000>Here's a detailed topic list from fall 2017</a>.
                    <br></br>
                    The course emphasizes a thorough understanding of the main ideas rather than the fine details of the underlying proofs (although understanding of the proofs are emphasized as well). Often on homeworks and exams, you will be asked to give the idea or a high level explanation of a proof rather than a formal proof. Lectures generally follow in this manner as well.
                    <br></br>
                    There are 3 prelims and no final. The prelims are all in class and are often 5 questions each (like the homework).
                    <br></br>
                    Some helpful advice:
                    <ul>
                    <li>Pay attention in class and take notes. Often the homework will have questions that ask you to recreate a proof or algorithm given in lecture. Sometimes, Professor Hopcroft will teach a theorem or idea that isn’t published in the textbook or elsewhere so if you miss lecture, or forget you’ll have to go to office hours. Reading the textbook is also helpful and sometimes the exposition there is clearer than in the lectures. Ask questions in lecture.</li>
                    <li>When studying for the prelims, it is useful to go through the past exams on the <a href=https://www.cs.cornell.edu/courses/cs4810/2012sp/>2012 course website</a>. Sometimes Professor Hopcroft recycles questions.</li></ul>
                    <b>📅 Offered:</b> Fall
                    <br>
                    <b>✅ Prerequisite:</b>Technically 2800, but depending on your interests and background it may not be hard to take without 2800.
                    <br>
                    <b>⏰ Workload:</b> One homework every week - usually 5 questions. In fall 2017, there were a total of 12 homeworks. Usually homeworks can be done pretty quickly if you’ve already gone to lectures and understand the material. Very often questions will come straight from lectures. Other times, they come from the textbook."
                />
                <Accordion
                    title="CS 4830: Introduction to Cryptography"
                    content="An introductory course to cryptography. This course covers both the theory and application sides of cryptography. On the theory side, beginning with a formal definition of security, it goes on to cover computational indistinguishability, numerous methods of message encryption, digital signatures, and finally various consensus protocols. On the application side, topics include oblivious RAM and garbled circuits, which are fascinating ideas proposed only during the last few decades.
                    <br></br>
                    There is one written homework assignment that emphasizes rigorous proofs based on a solid understanding of definitions and concepts covered in class. Besides, there are also two coding projects, for which you will use Java to implement two interesting applications of cryptography and then run large-scale performance tests to reason about their security. Besides,there are two take-home prelims and one final.
                    <br></br>
                    The professor usually starts the class with a 5-minute quiz on the material of the previous lecture and takes attendance in this way.
                    <br></br>
                    <b>📅 Offered:</b> Spring
                    <br>
                    <b>✅ Prerequisite:</b> CS 2800, as the class assumes knowledge of number theory, probability theory and proof techniques.
                    <br>
                    <b>⏰ Workload:</b> Medium. In spring 2017, there was one long written homework and two coding assignments. The proofs in the written homework are reasonably hard, but the coding assignments are fairly simple once you’ve understood the key ideas behind the application."
                />
            </section>
        </section>
    )
}

export default Courses;