import React from 'react';

function HeaderContainer(props) {
  const { children } = props;
  return true
    ? (
      <div id="viewport-toggle-container" className="cpr-x px-0 mt-auto">
        <div className="border-top border-bottom cp-x" role="toolbar">
          <div className="row align-center">
            {children}
          </div>
        </div>
      </div>
    )
    : (
      <div id="viewport-toggle-container" className="mailing-preview-nav flexible-tool-bar">
        {children}
      </div>
    );
}

export default HeaderContainer;
