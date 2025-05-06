import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2 className="gradient-title">Projects</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>3D Model Viewer</h3>
          <ul>
            <li>Built with React, Three.js, and @react-three/fiber for real-time 3D rendering.</li>
            <li>Allows users to upload .glb/.gltf models and explore them with orbit controls and lighting.</li>
            <li>Includes download options for OBJ, FBX, and USDZ formats, with optional thumbnail preview.</li>
            <li>Source Code: <a href="https://github.com/kandulacharith4/3D-Modal-Viewer" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Meshy App – AI 3D Model Generator</h3>
          <ul>
            <li>Internship project at Lid Vizion to generate 3D models from text and image inputs using AI.</li>
            <li>Features Text-to-3D and Image-to-3D pipelines powered by backend APIs.</li>
            <li>Integrated a 3D model viewer using React, Three.js, and @react-three/fiber for .glb/.gltf files.</li>
            <li>Built with modular components, smooth UI animations, and responsive design.</li>
            <li>Source Code: <a href="https://github.com/playdigidash/openhub/tree/Meshy-APK-FIrst-Push" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Stable Diffusion Text-to-Image Tool</h3>
          <ul>
            <li>Implemented image generation using Hugging Face Diffusers and Stable Diffusion v1.5.</li>
            <li>Developed an interactive Google Colab notebook interface for generating high-quality images from text prompts.</li>
            <li>Used `pipeline` from 🤗 Diffusers to streamline inference and enable quick experimentation.</li>
            <li>Colab Notebook: <a href="https://colab.research.google.com/drive/1iGS0dtBbi0RwtFzEDiWQIjyQKmp-5p3u?usp=sharing" target="_blank" rel="noopener noreferrer">Open in Colab</a></li>
          </ul>
        </div>
        
        <div className="project-card">
          <h3>CSV to 3D Object Pipeline (Blender + Claude)</h3>
          <p>Automated 3D creation from CSV via Google Sheets & Blender rendering.</p>
        </div>

        <div className="project-card">
          <h3>Sloyd AI Review</h3>
          <p>Evaluated 3D model generation quality across diverse prompts.</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
