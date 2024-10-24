'use client'

import About from "@/components/about";
import Content from "@/components/content";
import Intro from "@/components/intro";
import Questions from "@/components/questions";
import Record from "@/components/record";
import SecureYourSpot from "@/components/secure-your-spot";
import StudentsFeedback from "@/components/students-feedback";
import StudentsOpinion from "@/components/students-opinion";
import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function Home() {

  const [isOpen, setOpen] = useState(false);
  const [youTubeId, setYouTubeId] = useState('')
  const spot = useRef(null);

  return (
    <main>
      <Intro 
        spot={spot}
        setYouTubeId={setYouTubeId} 
        setOpen={setOpen} 
      />
      <Content />
      <About spot={spot} />
      <Record 
        spot={spot}
      />
      <SecureYourSpot spot={spot} />
      <StudentsOpinion
        // setYouTubeId={setYouTubeId} 
        // setOpen={setOpen} 
      />
      <StudentsFeedback />
      <Questions />
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={youTubeId}
        onClose={() => setOpen(false)} 
      />
    </main>
  );
}
