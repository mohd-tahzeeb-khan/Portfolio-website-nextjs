"use client";
import Hero from "@/pages/hero";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Stack from "@/pages/stack";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import Portfolio from "@/pages/portfolio";
import Footer_banner from "@/components/footer_banner";
export default function Nextjs() {
  const [fetchdata, setfetchdata] = useState(null);
  const [contact, setContact] = useState(null);
  const [projects, setProjects] = useState(null);
  const [slack, setSlack] = useState(null)
  const [blogs, setBlogs] = useState(null)
  

  
  useEffect(() => {
    async function fetchingdata() {
      try {
        const client = createClient();
        const project=await client.getAllByType("projects");// Fix the method name
        const getting_contact=await client.getAllByType("contact");  
        const getting_slack=await client.getAllByType("slacks");
        const getting_blogs=await client.getAllByType("blogs");

            setProjects(project);  
            setContact(getting_contact);
            setSlack(getting_slack);
            setBlogs(getting_blogs);
            console.log("slacks are: ", getting_slack)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingdata(); // Call the function inside useEffect
  }, []);
  // console.log("outter stack is", slack)
  return (
    <>
      <Hero />
      <About />
      <Blog blogs={blogs} />
      <Portfolio projects={projects} />
      <Stack slack={slack} />
      <Footer_banner contacts={contact}/>
    </>
  );
}
