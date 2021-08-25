import React, { Component } from 'react';

class PreviewContainer extends Component {
  constructor(props) {
    super(props);
    this.selectViewport = this.selectViewport.bind(this);
    this.viewportSource = this.viewportSource.bind(this);
    this.state = {
      viewports: [
        { name: 'desktop', selected: true, displayName: 'Desktop' },
        { name: 'mobile', selected: false, displayName: 'Mobile' },
        { name: 'text', selected: false, displayName: 'Text' },
      ],
    };
  }

  viewportSource() {
    const { textSrc, iframeSrc } = this.props;
    if (this.selectedViewport() === 'text') {
      return textSrc;
    }
    return iframeSrc;
  }

  selectedViewport() {
    const { viewports } = this.state;
    const viewport = viewports.find(v => v.selected);
    return viewport.name;
  }

  selectViewport(viewport) {
    const viewports = this.updateViewportsArray(viewport);
    this.setState({ viewports });
  }

  updateViewportsArray(viewport) {
    const { viewports } = this.state;
    return viewports.map(v => ({
      ...v,
      selected: v.name === viewport,
    }));
  }

  render() {
    const iframeClass = `preview-viewport-${this.selectedViewport()}`;
    const {
      header,
      body,
    } = this.props;
    const { viewports } = this.state;
    return (
      <div id="email-editor">
        {header({ viewports, selectViewport: this.selectViewport })}
        {body({ iframeClass, src: this.viewportSource() })}
      </div>
    );
  }
}

export default PreviewContainer;
