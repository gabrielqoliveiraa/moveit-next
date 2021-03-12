import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Container } from './style';
import { BsSun, BsMoon } from "react-icons/bs";


interface HeaderProps {
  toggleTheme(): void;
}

export default function Header(props: HeaderProps) {
  const {colors, title} = useContext(ThemeContext);

  return (
    <Container>
      <p>Move-It</p>
      <div>
        
       

        {title === 'dark' ? (
          <BsSun style={{cursor: 'pointer'}} onClick={props.toggleTheme} color="#5965e0" size={28} />
        ) : (
          <BsMoon style={{cursor: 'pointer'}} onClick={props.toggleTheme} color="#5965e0" size={28} />
        )}



      </div>
    </Container>
  );
}