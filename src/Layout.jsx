import React, { useState } from 'react';

function Layout ({content}) {
  const [activePage, setActivePage] = useState("Main");

  return <div>
    {/* nav start  */}
    <div className="nav-body">

      <nav className="demo">
        <div onClick={()=>setActivePage("Main")} className="brand">
          <img src="https://cdn.townweb.com/glencoveny.gov/wp-content/uploads/2020/11/Glen-Cove-Logo-1.png" alt="glen cove logo" className="logo" />
          <span>Glen Cove Loop Bus</span>
        </div>

        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">🍔 Menu</label>

        <div className="menu">
          <button onClick={()=>setActivePage("About")} className="pseudo button icon-picture">About</button>
        </div>
      </nav>

      </div>
    {/* nav end */}
    <div className="main-body">
      { content[activePage]() }
    </div>
  </div>
}

export default Layout;
