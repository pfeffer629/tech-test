import React  from 'react';
import PropTypes from 'prop-types';

const renderToggleButtons = props => props.viewports.map((viewport) => {
  const buttonClass = `button btn-href default compact ${ viewport.selected ? 'active' : null }`;
  return (
    <button
      type="button"
      className={buttonClass}
      key={viewport.name}
      name={viewport.name}
      onClick={() => props.selectCallback(viewport.name)}
    >
      {viewport.displayName}
    </button>
  );
});

const renderLogo = () => {
  return (
    <div className="mr-5">
      <img alt="NationBuilder" width="auto" height="46" className="mw-100" src="https://d2v96l26rruh3j.cloudfront.net/assets/nationbuilder-horizontal-white-6afff7cf18896c6ab0e14b087246bd51ed51ebc76b833488df932c919c563d3d.svg" />
    </div>
  )
}

const ViewportToggle = (props) => {
  const toggleButtons = renderToggleButtons(props);
  return (
    <div className="btn-group btn-group-nav mb-0" style={{display: "flex", justifyContent: "space-between"}}>
      {renderLogo()}
      {toggleButtons}
    </div>
  );
};

export default ViewportToggle;
