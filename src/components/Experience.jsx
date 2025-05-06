import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Generative AI Intern – Lid Vizion (Remote)</h3>
        <p><strong>Jan 2024 – Present</strong></p>
        <ul>
          <li>Developed Meshy App: a React + Three.js platform that generates 3D models from text and image input.</li>
          <li>Integrated API for generative model backends with real-time progress indicators and error handling.</li>
          <li>Implemented responsive UI/UX and optimized model rendering pipeline.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Graduate Research Assistant – University of South Dakota</h3>
        <p><strong>Aug 2023 – Dec 2023</strong></p>
        <ul>
          <li>Built predictive models (LSTM and Transformer) for climate change data analysis.</li>
          <li>Performed data wrangling and co-authored research reports.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Associate Analyst – Merkle, Coimbatore, India</h3>
        <p><strong>Jul 2022 – Jul 2023</strong></p>
        <ul>
          <li>Processed and analyzed survey data for visualization and statistical summaries.</li>
          <li>Built demographic reports using metrics like Mean, SD, and Box score analytics.</li>
        </ul>
      </div>
    </section>
  );
}
export default Experience;