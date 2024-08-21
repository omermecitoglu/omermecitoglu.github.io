/* eslint-disable @stylistic/max-len */
import Link from "next/link";
import React from "react";

const AboutMe = () => (
  <section id="about" className="min-vh-100">
    <div className="container py-3">
      <h2>About Me</h2>
      <hr />
      <p>
        👋 Hi there! My name is
        {" "}
        {(process.env.PROFILE_NAME || "John Doe").split(" ")[0]}
        , a passionate and creative Frontend Developer with a keen eye for design and a love for crafting seamless user experiences. 🚀
      </p>
      <p>
        With
        {" "}
        {new Date().getFullYear() - (parseInt(process.env.CAREER_START_YEAR || "") || 1970)}
        {" "}
        years of hands-on experience in web development, I've honed my skills in building captivating and responsive websites that not only look stunning but also perform flawlessly across various devices and browsers. My expertise lies in HTML, CSS, JavaScript, and the latest frontend frameworks like React.
      </p>
      <p>🎨 Design is at the heart of what I do. Collaborating closely with designers and stakeholders, I bring their visions to life and ensure that every pixel is in its rightful place. User interface and user experience are not just buzzwords for me; they are guiding principles in my work.</p>
      <p>💡 I thrive in dynamic and fast-paced environments, where I can continuously learn and grow as technology evolves. Staying up-to-date with the latest industry trends and best practices, I strive to integrate cutting-edge solutions into my projects to deliver the best possible outcomes.</p>
      <p>🔧 Problem-solving is second nature to me. I enjoy tackling challenges head-on, finding elegant solutions to complex issues, and optimizing performance to deliver exceptional frontend experiences.</p>
      <p>🤝 Teamwork is essential in any successful project, and I am a firm believer in open communication and collaboration. I cherish the opportunity to work with diverse teams, where ideas flow freely, and innovation thrives.</p>
      <p>📈 I am actively seeking opportunities to contribute my skills to a dynamic organization that shares my passion for creating remarkable digital experiences. If you're looking for a Frontend Developer who is driven, adaptable, and eager to make a meaningful impact, let's connect! I'm excited to explore new possibilities together.</p>
      <p className="mb-0">
        📬 Feel free to reach out to me via LinkedIn messaging or email at
        {" "}
        <Link href={`mailto:${process.env.PROFILE_EMAIL || "john.doe@example.com"}`}>{process.env.PROFILE_EMAIL || "john.doe@example.com"}</Link>
        . Let's connect and build something incredible!
      </p>
    </div>
  </section>
);

export default AboutMe;
