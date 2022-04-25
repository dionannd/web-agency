import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Our team
          of expert enginers has created the best user experiences in some of
          the most popular mobile apps.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="dira"
            name="Dira"
            socialId="@revell29"
            link="https://github.com/revell29"
          />
          <Member
            id="dion"
            name="Dion"
            socialId="@dionannd"
            link="https://github.com/dionannd"
          />
          <Member
            id="david"
            name="David"
            socialId="@davidgrld"
            link="https://github.com/davidgrld"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
