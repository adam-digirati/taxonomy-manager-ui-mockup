import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

type ConfirmPopupProps = {
  isOpen: boolean,
  title: string, 
  description: string, 
  handleYes: React.ReactEventHandler, 
  handleNo: React.ReactEventHandler,
  yesLabel?: string,
  noLabel?: string,
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmPopup: React.SFC<ConfirmPopupProps> = ({
  isOpen,
  title, 
  description, 
  handleYes, 
  handleNo,
  yesLabel = 'Yes',
  noLabel = 'No'
}) => (
  <Dialog
    open={isOpen}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleNo}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleNo} color="primary">
        {noLabel}
      </Button>
      <Button onClick={handleYes} color="primary">
        {yesLabel}
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmPopup;