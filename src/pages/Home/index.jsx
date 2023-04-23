import React,{useEffect} from "react";

import Banner from "../../components/Banner"
import ServiceCard from "../../components/ServiceCard";
import AboutCard from "../../components/AboutCard";
import ProjectCard from "../../components/ProjectCard";
import TeamCard from "../../components/TeamCard"; 
import BlogCard from "../../components/BlogCard";
import ContactForm from "../../components/ContactForm";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(()=>
            {
              AOS.init();
            }, []
  )
  return (
    <div>

      <Banner/>
      <ServiceCard/>
      <AboutCard/>
      <ProjectCard/>
      <TeamCard/>
      <BlogCard/>
      <ContactForm/>  

    </div>
  )
}

export default Home
