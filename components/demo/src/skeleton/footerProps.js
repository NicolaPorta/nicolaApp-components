import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const sections = [
  {
    title: 'Autori ed Editori',
    items: [
      {
        text: 'Collaborazioni con Enti Terzi',
        icon: 'rightArrow',
        onClick: () => {
          console.log('Selected Collaborazioni con Enti Terzi');
        },
      },
      {
        text: 'Statuto e Regolamenti',
        icon: 'rightArrow',
      },
      {
        text: 'Struttura ed Organizzazione',
        icon: 'rightArrow',
      },
    ],
  },
  {
    title: 'Chi siamo e cosa facciamo',
    items: [
      {
        text: 'Collaborazioni con Enti Terzi',
        icon: 'rightArrow',
      },
      {
        text: 'Statuto e Regolamenti',
        icon: 'rightArrow',
      },
      {
        text: 'Struttura ed Organizzazione',
        icon: 'rightArrow',
      },
    ],
  },
  {
    title: 'La nostra organizzazione',
    items: [
      {
        text: 'Collaborazioni con Enti Terzi',
        icon: 'rightArrow',
      },
      {
        text: 'Statuto e Regolamenti',
        icon: 'rightArrow',
      },
      {
        text: 'Struttura ed Organizzazione',
        icon: 'rightArrow',
      },
    ],
  },
  {
    title: 'Dati ed insights',
    items: [
      {
        text: 'Osservatorio',
        icon: 'rightArrow',
      },
      {
        text: 'Libro Bianco Secondary Ticketing',
        icon: 'rightArrow',
      },
      {
        text: 'Mappe dello Spettacolo',
        icon: 'rightArrow',
      },
      {
        text: 'Elaborazioni Personalizzate',
        icon: 'rightArrow',
      },
      {
        text: 'Attestazioni incassi e presenze',
        icon: 'rightArrow',
      },
    ],
  },
  {
    title: 'Siae nel Mondo',
    items: [
      {
        text: 'SIAE all Estero',
        icon: 'rightArrow',
      },
      {
        text: 'Collaborazioni Internazionali',
        icon: 'rightArrow',
      },
    ],
  },
  {
    key: 0,
    title: 'Documenti',
    items: [
      {
        text: 'Policy reclami',
        icon: 'rightArrow',
      },
      {
        text: 'Normative',
        icon: 'rightArrow',
      },
      {
        text: 'Moduli',
        icon: 'rightArrow',
      },
      {
        text: 'Comunicati Stampa',
        icon: 'rightArrow',
      },
    ],
  },
  {
    title: 'Hai Bisogno di aiuto?',
    items: [
      {
        key: 0,
        text: 'Assistenza',
        icon: 'rightArrow',
      },
    ],
  },
  {
    title: 'Canali social',
    items: [
      {
        text: 'Facebook',
        icon: 'rightArrow',
        iconLeftHandSide: 'facebook',
      },
      {
        text: 'Twitter',
        icon: 'rightArrow',
        iconLeftHandSide: 'twitter',
      },
      {
        text: 'Instagram',
        icon: 'rightArrow',
        iconLeftHandSide: 'instagram',
      },
      {
        text: 'LinkedIn',
        icon: 'rightArrow',
        iconLeftHandSide: 'linkedin',
      },
    ],
  },
  {
    title: 'Lingua',
    items: [
      {
        text: 'Italiano',
        icon: 'flag',
        iconLeftHandSide: <Avatar>IT</Avatar>,
        onClick: () => {
          console.log('Selected Italian');
        },
      },
      {
        text: 'English',
        iconLeftHandSide: <Avatar>EN</Avatar>,
        // icon: 'flag',
      },
    ],
  },
];
const sectionsProps = {
  // spacing: 6
};

const messages = {
  text_left: 'Text left',
  text_right: 'Text right',
};

export default spacing => ({
  sections: { data: sections, props: sectionsProps },
  messages,
  spacing,
});
