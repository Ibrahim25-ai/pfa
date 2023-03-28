import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

export default function Popup(props) {
  const {title,children,OpenPopup, setOpenPopup } = props;

  return (
    <Dialog open={OpenPopup} onClose={() => setOpenPopup(false)} maxWidth='md'>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
