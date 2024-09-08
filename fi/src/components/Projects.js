import React from 'react';
const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3><a href="https://github.com/Gugan-23/Doula-service"  className="no-underline">Doula Service</a></h3>
                
                <p>
                <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/java.PNG`} alt="Profile" />
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;I played a pivotal role in developing and maintaining software solutions using Java, which streamlined
    client data management and scheduling processes. I designed and implemented SQL databases to
    efficiently handle and query extensive datasets related to client interactions and service history.
    Additionally, I utilized Python for data analysis and reporting, providing valuable insights that
    contributed to improved service delivery and client satisfaction. My work involved collaborating
    closely with team members to integrate various software components, enhancing the overall
    functionality and performance of our systems.
    
</p>


<p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: Java,SQL</p>



            </div>
            <div className="project">
                <h3><a href="https://github.com/Gugan-23/Predective-Analysics-Online-class-analysis"  className="no-underline">Student learning Analysis</a></h3>
               
                <p>
                <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/Papro.PNG`} alt="Profile" />
    </div>&nbsp;&nbsp;&nbsp;&nbsp;This project involved analyzing a dataset from an online learning platform to uncover patterns and
trends related to user engagement, course completion rates, and learning outcomes. Using SQL, data
was extracted and queried from a relational database to identify key metrics. Python was utilized for
data cleaning, processing, and statistical analysis</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: Python,SQL</p>
            </div>
            <div className="project">
                <h3><a href="https://github.com/Gugan-23/Advance-Data-structure-Voting-Mnagement"  className="no-underline">Voting management system</a></h3>
                <p><div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/adsa.PNG`} alt="Profile" />
    </div>&nbsp;&nbsp;&nbsp;&nbsp;The Voting Management System is designed to streamline and manage the voting process efficiently.
This system allows users to register, cast their votes, and view results in a secure and user-friendly
manner. The system is built using Python for the backend logic and SQL for data management and
storage</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: Python,SQL</p>
            </div>
            <div className="project">
            <h3><a href="https://github.com/Gugan-23/Python-Project"  className="no-underline">Online learning app</a></h3>
                <p> <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/pythonproject.PNG`} alt="Profile" />
    </div>&nbsp;&nbsp;&nbsp;&nbsp;The Online Learning Platform successfully provided an accessible and flexible solution for both students and educators. By leveraging Python's versatility and SQL's powerful data management capabilities, the platform ensured efficient content delivery, robust data handling, and a user-friendly experience. The project contributed to enhanced learning outcomes by making education more interactive and accessible, regardless of geographic location.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: Python,SQL</p>
            </div>
            <div className="project">
            <h3>
  <a href="https://github.com/Gugan-23/Disablecare" className="no-underline">Disable care</a>
</h3>

                <p> <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/disable.PNG`} alt="Profile" />
    </div>&nbsp;&nbsp;&nbsp;&nbsp;Disable Care successfully provides a reliable and user-friendly platform for individuals with disabilities to access personalized care services. The use of the MERN stack allowed for a highly scalable and performant application, with features tailored to meet the unique needs of the users. By fostering direct communication and simplifying the service request process, the platform enhances the quality of care and improves the overall experience for both caregivers and those in need.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: HTML,CSS,MongoDB,Nodejs,Express,React</p>
            </div>
            <div className="project">
            <h3><a href="https://github.com/Gugan-23/Personalized-Blog-platform"  className="no-underline">Personal blog platform</a></h3>
                <p> <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/blog.PNG`} alt="Profile" />
    </div>&nbsp;&nbsp;&nbsp;&nbsp;The Personal Blog Platform successfully combines a user-friendly interface with powerful backend functionality, providing a comprehensive solution for personal content creation and sharing. By leveraging the full capabilities of the MERN stack, the platform ensures a seamless user experience, efficient data handling, and the ability to scale as user demand grows. This project highlights the versatility and power of modern web technologies in building feature-rich, interactive web applications.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: HTML,CSS,MongoDB,Nodejs,Express,React</p>
            </div>
            <div className="project">
            <h3><a href="https://github.com/Gugan-23/Financial-Engineering-project"  className="no-underline">Currency swap analysis</a></h3>
                <p> <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/fe.PNG`} alt="Profile" />
    </div>&nbsp;&nbsp;&nbsp;&nbsp;This project involves a comprehensive currency swap application developed using Python and SQL. The application facilitates the exchange of currencies between users, integrating real-time exchange rate updates and transaction management.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Languages Used: Python,SQL</p>
            </div>
        </section>
        
        
    );
}

export default Projects;
