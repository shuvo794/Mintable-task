import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import SignUp from '../SignUp/SignUp';
const style = {
    position: 'absolute',
    top: '55%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
    
  
const ModalSignUp = ({openSignUp,handleCloseSignUp}) => {
   
    return (
        <Modal
        keepMounted
        open={openSignUp}
        onClose={handleCloseSignUp}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <SignUp/>
        </Box>
      </Modal>
    );
};

export default ModalSignUp;