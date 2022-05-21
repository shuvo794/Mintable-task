import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import Login from '../Login/Login';
const style = {
    position: 'absolute',
    top: '55%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    higth:'50px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ModalLogIn = ({openLogin,handleCloseLogin}) => {
    return (
        <Modal
        keepMounted
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Login/>
        </Box>
      </Modal>
    );
};

export default ModalLogIn;