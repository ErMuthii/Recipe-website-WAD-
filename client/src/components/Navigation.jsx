


import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//   import logo from '../assets/logo.png';

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Recipes', link: '/recipes' },
    { name: 'Contact', link: '/contact' },
    { name: 'Login', link: '/login', isButton: true},
    { name: 'Sign Up', link: '/registration', isButton: true },
  
  ];

  return (
    <Navbar isBordered className='flex justify-between' style={{ backgroundColor: '#f8f9fa' }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <Link to= '/'>
          {/* <img src={logo} alt='logo' className='h-[45px] w-[200px]' /> */}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {menuItems.map((item, index) => (
          !item.isButton ? (
            <NavbarItem key={index} isActive={window.location.pathname === item.link}>
              <Link
                href={item.link}
                onClick={() => navigate(item.link)}
                className='text-[#000] font-bold text-lg hover:text-[#F6AB36]'
              >
                {item.name}
              </Link>
            </NavbarItem>
          ) : null
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        
        <NavbarItem>
          {menuItems.map((item, index) => (
            item.isButton ? (
              <Button
                key={index}
                as={Link}
                color='primary'
                href={item.link}
                onClick={() => navigate(item.link)}
                variant='flat'
                className='ml-2'
              >
                {item.name}
              </Button>
            ) : null
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className='w-full'
              href={item.link}
              onClick={() => navigate(item.link)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;

