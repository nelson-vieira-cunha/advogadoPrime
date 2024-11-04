'use client'

import About from "@/components/about";
import Content from "@/components/content";
import Intro from "@/components/intro";
import Questions from "@/components/questions";
import Record from "@/components/record";
import SecureYourSpot from "@/components/secure-your-spot";
import StudentsFeedback from "@/components/students-feedback";
import StudentsOpinion from "@/components/students-opinion";
import { useRef } from "react";
import "react-modal-video/scss/modal-video.scss";

export default function Home() {

  const spot = useRef(null);

  return (
    <main>
      <Intro 
        spot={spot}
      />
      <Content />
      <About spot={spot} />
      <Record spot={spot} />
      <SecureYourSpot spot={spot} />
      <StudentsOpinion />
      <StudentsFeedback />
      <Questions />
    </main>
  );
}
