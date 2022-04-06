import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputField from './inputfield';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #444',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({title, inputField}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Reward modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                      Batch Reward
                      <br/>
                      <small>You can only send reward in batches of 200</small>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <InputField label='Filename' type='file' placeholder='Upload file'/>
                      <InputField label='Amount' type='number' placeholder='Enter Amount' />
                      <Button >Send Reward</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
