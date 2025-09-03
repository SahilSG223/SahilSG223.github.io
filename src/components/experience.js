import React from 'react';

function Experience() {
    return (
        <section id='experience'>
            <h3>Experience</h3>
            <div className="exp-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)', padding: '2rem 2.5rem', maxWidth: 700, margin: '2rem auto 0 auto', gap: '2.5rem' }}>
                <img src="CloudAct.png" alt="CloudAct logo" style={{ width: 90, height: 'auto', borderRadius: '10px', background: '#f6f8fa', boxShadow: '0 1px 6px rgba(25, 118, 210, 0.08)' }} />
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#22223b' }}>CloudAct CPA Professional Corporation - AI Software Developer</h4>
                    <p style={{ margin: '0.7rem 0 0.2rem 0', fontSize: '1.08rem' }}>Built webhook and API pipelines in n8n to capture conversation history and seamlessly transfer structured data into Google Sheets and Clio Grow CRM, enabling instant appointment booking and case intake.</p>
                    <p style={{ margin: 0, fontSize: '1.08rem' }}>Delivered backend/frontend services with Render, Vercel, and React.js, while designing a lightweight LLM on Personal AI to guide inputs and improve data quality.</p>
            </div>
            </div>
            <div className="exp-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)', padding: '2rem 2.5rem', maxWidth: 700, margin: '2rem auto 0 auto', gap: '2.5rem' }}>
                <img src="Guhuza.png" alt="Guhuza logo" style={{ width: 90, height: 'auto', borderRadius: '10px', background: '#f6f8fa', boxShadow: '0 1px 6px rgba(25, 118, 210, 0.08)' }} />
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#22223b' }}>Guhuza - Data Analyst</h4>
                    <p style={{ margin: '0.7rem 0 0.2rem 0', fontSize: '1.08rem' }}>Designed and executed SQL queries within a MySQL database environment to identify, track, and evaluate emerging trends across critical marketing performance metrics.</p>
                    <p style={{ margin: 0, fontSize: '1.08rem' }}>Processed and transformed large-scale datasets using Pandas, then applied Plotly to create a comprehensive dashboard showcasing multiple interactive visualizations for data-driven decision-making.</p>
            </div>
            </div>
            <div className="exp-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)', padding: '2rem 2.5rem', maxWidth: 700, margin: '2rem auto 0 auto', gap: '2.5rem' }}>
                <img src="/University of waterloo logo.png" alt="University of Waterloo Logo" style={{ width: 90, height: 'auto', borderRadius: '10px', background: '#f6f8fa', boxShadow: '0 1px 6px rgba(25, 118, 210, 0.08)' }} />
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: '#22223b' }}>Pallet Connect - We Accelerate</h4>
                    <p style={{ margin: '0.7rem 0 0.2rem 0', fontSize: '1.08rem' }}>Developing real world applicable solutions to various environmental issues through data analysis.</p>
                    <p style={{ margin: 0, fontSize: '1.08rem' }}>Utilize PowerBi, Microsoft Excel, and PowerQuery to manage and analyze various large scale data sets.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience;