import React from 'react';

export const Company = (props) => {
  return (
      <div id={props.cid} class="company-box">
          <img class="companyLogo" src={props.logo} alt="Zoho" />
          <div style={{ clear: 'both' }} />
          <div class="gifs">
              <img src={props.gif} alt="Manage Engine" />
          </div>
          {props.children}
      </div>
  )
}