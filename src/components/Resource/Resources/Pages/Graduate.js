import React from 'react';

const Graduate = ()  => {
    return(
        <section className="Graduate">
            <p>
                The world of computer science is huge, with countless rich graduate-level paths to pursue after Cornell. Depending on whether you prefer a practical education for working in industry or a theoretical education for engaging in high-level research, both Cornell and other universities across the nation offer a plethora of options.
            </p>
            <section className="MS">
                <h2>Master's Degree (MS)</h2>
                <p>
                    The overview for this degree and what it entails can be found starting from the <a href="https://www.cs.cornell.edu/ms" target="_blank">main landing page</a>. For more
                    specific application details, see the <a href="https://www.cs.cornell.edu/ms/admissions" target="_blank">requirements page</a> on the graduate school website.

                    To summarize, the Master of Science in Computer Science program lasts 4 semesters and requires 34 credits to
                    graduate, 6-12 of those credits dedicated to your thesis research. It’s required that you work as a TA for each of those semesters. However, you do receive full tuition and a housing stipend while you are in the program. To be accepted into the program, you will need your college transcript, 3 letters of recommendation, a statement of purpose, and an essay describing how a CS MS aligns with your career plans; all of which are due in mid-December.
                </p>
            </section>
            <section className="MEng">
                <h2>Master of Engineering (M.Eng.)</h2>
                <p>
                    This program lasts 2 semesters and typically covers 6 courses and a project. Applications become available 2-3 months before the deadline and are due at the beginning of February for the following fall or the beginning of October for the following spring.

                    For a comprehensive look at the MEng program, check out the <a href="https://www.cs.cornell.edu/masters" target="_blank">website</a>.
                </p>
            </section>
            <section className="PhD">
                <h2>Doctor of Philosophy (PhD)</h2>
                <p>
                    A lot has been written on the topic of applying to PhD programs and what it takes to succeed in them. One excellent source is <a href="https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf" target="_blank">this document</a> written by a professor at CMU.

                    A Ph.D. is a roughly 6-year commitment, which is almost entirely devoted to doing research. Applications are typically due mid-December of your senior year, and typically require 3 recommendation letters, a statement of purpose, transcript, and GRE scores. Unlike undergrad, there is really only one main criterion for admission: whether the university believes that you can excel at doing research. Naturally the best way to demonstrate this is to have undergraduate research experience, which you can read more about below.
                </p>
            </section>
        </section>
    )
}

export default Graduate;