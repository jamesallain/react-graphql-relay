import React from 'react';
import { Button, Dialog } from '@blueprintjs/core';

class ButtonOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
    };

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  openOverlay() {
    this.setState({
      isOpen: true,
    });
  }

  closeOverlay() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { children, title, ...props } = this.props;
    return (
      <div>
        <Button {...props} onClick={this.openOverlay} />
        <Dialog isOpen={this.state.isOpen} onClose={this.closeOverlay} title={title} >
          <div className="pt-dialog-body">
            {children}
          </div>
        </Dialog>
      </div>
    );
  }
}

export default ButtonOverlay;
