// PortalPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PortalPage() {
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (item) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 200);
  };

  return (
    <div className='portalPage container-fluid'>
      <div className='portalDiv'>
        <Link to="/SignUp?userType=customer" className="link-style">
          <div
            className={`customer ${clickedItem === 'customer' ? 'clicked' : ''}`}
            onClick={() => handleClick('customer')}
          >
            <span>Customer</span>
          </div>
        </Link>
        <Link to="/SignUp?userType=employee" className="link-style">
          <div
            className={`employee ${clickedItem === 'employee' ? 'clicked' : ''}`}
            onClick={() => handleClick('employee')}
          >
            <span>Employee</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PortalPage;
