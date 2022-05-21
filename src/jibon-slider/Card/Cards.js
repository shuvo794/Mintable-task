// import { Container, Grid } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import JibonSlider from '../Jibon-Slider';
// import './Card.css';

// const Cards = () => {
//      const [catagories, setCatagories] = useState([]);
//     useEffect(() => {
//         fetch("/TopCollection.json")
//           .then((res) => res.json())
//           .then((data) => setCatagories(data));
//       }, []);
//     return (
//         <Container>
//           <Grid
//             // className={classes.cardArea}
//             container
//             spacing={{ xs: 2, md: 4 }}
//             columns={{ xs: 4, sm: 8, md: 12 }}
//           >
//             {catagories.map((catagorie) => (
//               <JibonSlider catagorie={catagorie} key={catagorie.id} />
//             ))}
//           </Grid>
//         </Container>
//     );
// };

// export default Cards;