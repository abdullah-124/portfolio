import React from "react";
import "./about.css";
import userImg from "./img/user_photo.jpg"
import AboutKeyword from "./AboutKeyword";
import { keywordList } from "./keywordList";

export default function About() {
  return (
    <>
      <section className="container about">
        <div>
          <div className="d-flex">
            <h3>
              <span className="text-past">01.</span>
              About
            </h3>
            <hr className="text-secondary w-25 mx-3" />
          </div>
          <article className="bio">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                <p className="about-text">
                  Hello! my name is <span className="text-past">Abdullah </span>
                  and i am a{" "}
                  <span className="text-past"> Diploma Engineering </span>
                  student at
                  <span className="text-past">
                    {" "}
                    Sylhet Polytechnic Institute.
                  </span>
                  I enjoy to explore things from web. From this enjoyment{" "}
                  <span className="text-past"> 2020 </span> I learn
                  <span className="text-past">
                    {" "}
                    HTML,CSS and Javascript{" "}
                  </span>{" "}
                  with lots of framework.
                </p>
                <p>
                  Currently, I focused on my academic studies and explore{" "}
                  <span className="text-past">programming</span> language and
                  different types of{" "}
                  <span className="text-past">technology</span>.
                </p>
                <p>Here are a few technology i try to learn and build projects: </p>
                  {
                    keywordList.map(keyword=><AboutKeyword key={keyword.id} keyword={keyword}/>)
                  }
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 mx-auto p-5">
                   <div className="photo-border">
                   <img className="userImg img-fluid" src={userImg} alt="" />
                   <div className="borderH"></div>
                   </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
