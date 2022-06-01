import React from 'react'

function Header() {
  return (
    <header >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 70px', boxShadow: '0px 9px 40px -13px rgba(0, 0, 0, 0.75)'}}>
        <a href="#" style={{ fontSize: '32px', color: '#222', fontWeight: 'bold' }}>
          My Amazing Web App
        </a>
     </div>
    </header>
  )
}

export default Header