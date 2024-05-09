// import React, { useState } from 'react';
// import { Container, Hamburger, HamburgerBox, HamburgerInner, Navigation, NavigationItem, NavigationList } from './hamburgerStyle';

// const MobileHamburger = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <Container>
//       <Hamburger className={isActive ? 'hamburger--active' : ''} onClick={handleClick}>
//         <HamburgerBox>
//           <HamburgerInner isActive={isActive} />
//         </HamburgerBox>
//       </Hamburger>
//       <Navigation isActive={isActive}>
//         <NavigationList>
//           <NavigationItem>
//             <a href="">Lorem</a>
//           </NavigationItem>
//           <NavigationItem>
//             <a href="">Ipsum</a>
//           </NavigationItem>
//           <NavigationItem>
//             <a href="">Dolor</a>
//           </NavigationItem>
//           <NavigationItem>
//             <a href="">Sit</a>
//           </NavigationItem>
//         </NavigationList>
//       </Navigation>
//     </Container>
//   );
// };

// export default MobileHamburger;