import Hariom_Resume from "./Hariom-Tripathi-Resume.pdf";
import styled from "styled-components";
import { Button } from "./ResumeElements";
export const Resume2 = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1YqbBkuKJ6_vqgHqOB9UBgU4tLC-tAFyh/view?usp=sharing"
    );
  };

  return (
    <div>
      <a
        href={Hariom_Resume}
        download="Hariom_Tripathi_Resume"
        className="nav-link resume"
        id="resume-button-1 resume-link-1"
      >
        <Button
          onClick={openResume}
          id="resume-button-1 resume-link-1"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};
