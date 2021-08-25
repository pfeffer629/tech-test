import React from 'react';

function PreviewFrame(props) {
  const { className, src, content } = props;
  return (
    <div
      id="html_mailing_preview"
      className={className}
      title="Mailing preview frame"
      style={{background: "white", wordWrap: "break-word", textAlign: "center"}}
    >
      {content}
    </div>
  );
}

export default PreviewFrame;
