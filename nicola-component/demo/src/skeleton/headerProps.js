import React from 'react';
import EventIcon from '@material-ui/icons/Event';
import MenuItem from '@material-ui/core/MenuItem';
import uuid from 'uuid/v1';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

const topbar = {
  items: [
    {
      key: 0,
      label: <div>"Autori ed Editori"</div>,
      menuItems: [
        <MenuItem key={uuid()}>Cosa devo sapere per iniziare</MenuItem>,
        <MenuItem key={uuid()}>Il diritto d'autore</MenuItem>,
        <MenuItem key={uuid()}>
          <Button style={{ width: 300 }}>Iscriviti ora</Button>
        </MenuItem>,
      ],
    },
    {
      key: 1,
      label: <div>"Utilizzatori"</div>,
      menuItems: [
        <MenuItem key={uuid()}>Cosa devo sapere per iniziare</MenuItem>,
        <MenuItem key={uuid()}>Il diritto d'autore</MenuItem>,
        <MenuItem key={uuid()}>
          <Button style={{ width: 300 }}>Iscriviti ora</Button>
        </MenuItem>,
      ],
    },
  ],
  itemsProps: {
    // justify: "flex-start"
    // justify: "center"
  },
  itemsContainerProps: {
    // disableGutters: true
  },
  onMenuClick: e => {
    console.log('TOPBAR onMenuClick');
  },
  rightHandSide: {
    items: [
      {
        key: 1,
        icon: <AccountCircle />,
        menuItems: [
          <MenuItem key={uuid()}>Cosa devo sapere per iniziare</MenuItem>,
          <MenuItem key={uuid()}>Il diritto d'autore</MenuItem>,
          <MenuItem key={uuid()}>
            <Button style={{ width: 300 }}>Iscriviti ora</Button>
          </MenuItem>,
        ],
        menuListItems: [
          {
            text: 'Italiano',
            icon: 'flag',
            iconLeftHandSide: <AccountCircle />,
            onClick: () => {
              console.log('clicked');
            },
          },
          {
            text: 'English',
            iconLeftHandSide: <AccountCircle />,
            onClick: () => {
              console.log('clicked');
            },
          },
        ],
      },
    ],
  },
};

const toolbar = {
  menuIcon: <EventIcon />,
  title: 'Title Title Title Title Title Title Title',
  items: [
    { key: 'toolbarItem1', component: <div>Toolbar-Item 1</div> },
    { key: 'toolbarItem2', component: <div>Toolbar-Item 2</div> },
  ],
  itemsProps: {
    justify: 'flex-end',
    // justify: "center"
  },
  itemsContainerProps: {
    // disableGutters: true
  },
  onMenuClick: e => {
    console.log('TOOLBAR onMenuClick');
  },
  rightHandSide: {
    items: [{ key: 'toolbarItem3', component: <div>Right Toolbar-Item</div> }],
    itemsProps: {
      // justify: "flex-end"
      justify: 'center',
    },
    itemsContainerProps: {
      // disableGutters: true
    },
  },
};

export default spacing => ({
  topbar,
  toolbar,
  spacing,
});
