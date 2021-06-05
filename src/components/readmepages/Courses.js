import React from "react";
import Accordion from "../readmecomponents/Accordion";

import prerequisites from "../readmeimages/CS_chart.jpg"


const Courses = () => {
    return(
        <section className="Courses">
            <section className="Intro">
                <h2 id="top">The Major</h2>
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
                    <b>☑️ Prerequisites:</b> CS 2800 and CS 3110
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