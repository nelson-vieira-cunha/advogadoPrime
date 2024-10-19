'use client'

import About from "@/components/about";
import Content from "@/components/content";
import Intro from "@/components/intro";
import Questions from "@/components/questions";
import Record from "@/components/record";
import Schema from '@/components/schema';
import SecureYourSpot from "@/components/secure-your-spot";
import StudentsOpinion from "@/components/students-opinion";
import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function Home() {

  const [isOpen, setOpen] = useState(false);
  const [youTubeId, setYouTubeId] = useState('')
  const spot = useRef(null);

  return (
    <>
      <Schema
					title="sdf"
					description="sdf"
					type="Course"
			/>
      <main>
        <Intro spot={spot} />
        <Content />
        <About spot={spot} />
        <Record 
          spot={spot}
          setYouTubeId={setYouTubeId} 
          setOpen={setOpen} 
        />
        <SecureYourSpot spot={spot} />
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
    </>
  );
}
