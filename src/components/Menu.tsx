import MenuItem, { MenuItemProps } from './MenuItem';
import React from 'react';

interface MenuProps {
  pathname: string;
}

interface MenuStruct {
  title: string;
  items: MenuItemProps[];
}

const Menu = ({ pathname }: MenuProps) => {
  let menuStruct: MenuStruct[] = [

  ];

  return (
    <div></div>
  );
};

export default Menu;
