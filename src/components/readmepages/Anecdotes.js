import React from "react";
import Accordion from "../readmecomponents/Accordion";

const Anecdotes = () => {
    return(
        <section className="Anecdotes">
            <section className="Intro">
                <p>Although the purpose of this README document is to provide an objective, unbiased introduction and overview of the major, we also thought it would be beneficial for students, especially underclassmen, to get personal insights from current CS majors of different grades. Note that these perspectives were provided by volunteers who wanted to contribute to the README so the contributors consisted of self-selected individuals, and therefore these testimonials may not be fully representative of the CS population at Cornell. Also note that these testimonials were collected from underclassmen (freshmen & sophomores) due to our target audience. However, we hope that these shared experiences can help shed light on what being a CS major could potentially be like in the Cornell community.</p>
            </section>
            <section className="Content">
                <Accordion
                    title = "Freshman A"
                    content = "UNDER CONSTRUCTION"
                />
                 <Accordion
                    title = "Freshman B"
                    content = "UNDER CONSTRUCTION"
                />
                 <Accordion
                    title = "Freshman C"
                    content = "UNDER CONSTRUCTION"
                />
                 <Accordion
                    title = "Freshman D"
                    content = "UNDER CONSTRUCTION"
                />
                 <Accordion
                    title = "Sophomore A"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Sophomore B"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Sophomore C"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Sophomore D"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Sophomore E"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Sophomore F"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Junior A"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Junior B"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Junior C"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Senior A"
                    content = "UNDER CONSTRUCTION"
                />
                <Accordion
                    title = "Senior B"
                    content = "UNDER CONSTRUCTION"
                />
            </section>
        </section>
    )
}

export default Anecdotes