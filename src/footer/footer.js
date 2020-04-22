import React from 'react';
import './footer.css';

const Footer = () => (
    <footer>
    <div className="footer">
            <div className="sub-footer">
         &copy;&nbsp;
         {new Date().getFullYear()}
        &nbsp; Chuks. &nbsp;ALL RIGHTS RESERVED
      </div>
                
            </div>
    </footer>
        
)
export default Footer;
