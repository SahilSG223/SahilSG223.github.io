import React from 'react';

function Navbar() {
    return (
        <nav className='nav sticky' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
            <a className='sahil' href='#top' style={{ fontWeight: 700, fontSize: '1.18rem', color: '#1976d2' }}>Sahil</a>
            <a className='exp' href='#experience'>Experience</a>
            <a className='proj' href='#projects'>Projects</a>
        </nav>
    )
}

export default Navbar;