import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <section className="container-lg">
        <div className="banner row">
          <article className="col-12 col-lg-8 col-md-10">
            <h6 className="text-past fw-bold fs-4">Hi, my name is </h6>
            <h1 className="text-navy">Abdullah Sakib</h1>
            <h1 className="text-highlight">Baby Developer</h1>
            <p className="text-navy col-10 my-4 fw-semibold">
              I'm a <span className="text-past"> junior developer </span>
              specializing in building (and occasionally designing) exceptional
              digital experiences. Currently, I'm focused on my
              <span className="text-past"> study</span> and exploring various
              <span className="text-past" > technology</span>.
            </p>
            <button className="button-primary-outline px-5">Resume</button>
          </article>
        </div>
      </section>
    </>
  );
}
