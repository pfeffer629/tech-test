import React, { useState } from 'react';

import HeaderContainer from './header-container';
import PreviewContainer from './preview-container';
import PreviewFrame from './preview-frame';
import ViewportToggle from './viewport-toggle';

function ContentContainer(props) {
  const [textContent, typing] = useState("Default content here");
  const [content, submitted] = useState("Default content here");

  const submit = (event) => {
    event.preventDefault();
    submitted(textContent);
  };

  return (
    <PreviewContainer
      header={(headerProps) => {
        const {
          viewports,
          selectViewport,
        } = headerProps;
        return (
          <HeaderContainer>
            <div className="col" style={{background: "black"}}>
              <ViewportToggle viewports={viewports} selectCallback={selectViewport} />
            </div>
          </HeaderContainer>
        );
      }}
      body={({ iframeClass }) => {
        return (
          <div className="cpr-x px-0 mt-0" style={{display: "flex", flexDirection: "column"}}>
            <div className="col broadcaster-preview pr-0 mb-2">
              <PreviewFrame
                className={iframeClass}
                content={content}
              />
            </div>
            <form className="col-auto border-left" style={{display: "flex", justifyContent: "center"}}>
              <div>
                <div className="row">
                  <div className="form-group form-input col">
                    <div className="form-field-wrap">
                      <textarea
                        className="ui-html-wysiwig form-control"
                        name="mailing[body_html]"
                        rows="10"
                        onChange={e => typing(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div id="save-content-row" className="row">
                  <div className="form-group form-input col">
                    <div className="form-field-wrap">
                      <div className="form-field-wrap__item">
                        <button
                          style={{display: "block", "margin": "0 auto"}}
                          type="submit"
                          className="btn btn-submit btn-neutral"
                          data-disable-with="Saving..."
                          onClick={(e) => submit(e)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
      }}
    />
  );
}

export default ContentContainer;
