import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/style.scss';

function PortalPage() {
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (item) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 200);
  };

  return (
    <div className='portalPage container-fluid'>
      <div className='portalDiv'>
        <Link to="/SignUp" className="link-style">
          <div
            className={`customer ${clickedItem === 'customer' ? 'clicked' : ''}`}
            onClick={() => handleClick('customer')}
          >
            <span>Customer</span>
          </div>
        </Link>
        <Link to="/employee" className="link-style">
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
