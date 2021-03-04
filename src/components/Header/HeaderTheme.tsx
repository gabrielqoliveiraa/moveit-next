import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './style';

interface HeaderProps {
  toggleTheme(): void;
}

export default function Header(props: HeaderProps) {
  const {colors, title} = useContext(ThemeContext);

  return (
    <Container>
      <p>Move-It</p>
      <div>
        
        <Switch
          onChange={props.toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.background1}
          offColor={colors.red}
        />
      </div>
    </Container>
  );
}