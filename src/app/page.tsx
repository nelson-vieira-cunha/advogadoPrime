'use client'

import About from "@/components/about";
import Content from "@/components/content";
import Intro from "@/components/intro";
import Questions from "@/components/questions";
import Record from "@/components/record";
import SecureYourSpot from "@/components/secure-your-spot";
import StudentsOpinion from "@/components/students-opinion";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function Home() {

  const [isOpen, setOpen] = useState(false);
  const [youTubeId, setYouTubeId] = useState('')

  return (
    <div>
      <main>
        <Intro />
        <Content />
        <About />
        <Record 
          setYouTubeId={setYouTubeId} 
          setOpen={setOpen} 
        />
        <SecureYourSpot />
        <StudentsOpinion
          setYouTubeId={setYouTubeId} 
          setOpen={setOpen} 
        />
        <Questions />
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={youTubeId}
          onClose={() => setOpen(false)} 
        />
      </main>
    </div>
  );
}
