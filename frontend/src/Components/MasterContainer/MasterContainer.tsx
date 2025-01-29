import * as React from 'react'
import { useState } from 'react';
import { Button, Modal } from '@mui/material';
import './MasterContainer.scss'
import { FamilyRestroomRounded, InsertLink } from '@mui/icons-material';
import LeftSidebar from '../Leftsidebar/LeftSidebar';
export default function MasterContainer() {

  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setInputValue(event.target.files[0].name);
    }
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    document.getElementById("fileInput")?.click()
    setOpen(true)
  }


  return (
    <div className="main-container">
      <div className="sidebar">
        <LeftSidebar />
      </div>
      <div className="insert-link-section">
        <div className="input-container">
          <input type="text" className="custom-input" placeholder="Upload file here" value={inputValue}  readOnly onClick={() => document.getElementById("fileInput")?.click()}  />
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileUpload} />
          <Button onClick={handleOpen} className='upload-btn'>
            <InsertLink />
          </Button>
        </div>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
          <div>
            <h3>PDF upload</h3>
          </div>
        </Modal>
      </div>
    </div>
  )
}
