import React, { useState } from 'react';
import './Styles/App.scss'
import { Button, Modal } from '@mui/material';
import { FamilyRestroomRounded, InsertLink } from '@mui/icons-material';

function App() {

  // states
  const [open, setOpen] = useState(false)

  // functions
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className="App">
      <Button onClick={handleOpen}>
        Uploaaaaaaaad <InsertLink />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <h3>PDF upload</h3>
        </div>
      </Modal>
    </div>
  );
}

export default App;
