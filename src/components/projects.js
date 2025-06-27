import React from 'react'

function Projects(){
    return (
        <section id='projects'>
            <h3>Projects</h3>
            <p style={{ fontSize: '1.2rem', color: '#1976d2', marginBottom: '2.5rem' }}>A selection of my featured work</p>
            <div className="projects-row">
                {/* Titanic */}
                <div className="card">
                    <img src='/Titanic.png' alt='Titanic Screenshot' />
                    <h3>Titanic</h3>
                    <p>React-based scholarship search platform helping students find funding opportunities. Features OCR integration with Mindee API, dynamic filters, and personalized recommendations powered by CKAN API.</p>
                </div>
                {/* MedicalAI */}
                <div className="card">
                    <img src='/MedicalAi.png' alt='MedicalAI Screenshot' />
                    <h3>Medical AI</h3>
                    <p>A full-stack web application for healthcare professionals featuring medical reports, EHR database, and self-diagnosis tools. Built with Flask, OpenAI GPT-3 API, and Tailwind CSS.</p>
                </div>
                {/* Toronto Crime Heatmap */}
                <div className="card">
                    <img src='/TorontoCrime.png' alt='Toronto Crime Heatmap Screenshot' />
                    <h3>Toronto Crime Heatmap</h3>
                    <p>Interactive heatmap visualizing 2024 Toronto crime data across neighborhoods. Built with Folium and HTML, featuring data cleaning with Pandas and Excel for accurate crime trend analysis.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;