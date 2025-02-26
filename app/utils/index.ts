export const generateCatName = () => {
  const names = [
    'Milo',
    'Luna',
    'Simba',
    'Oliver',
    'Bella',
    'Leo',
    'Chloe',
    'Max',
    'Nala',
    'Charlie',
    'Sophi',
    'Chuli',
    'Nala',
    'Rosa',
    'Tulo',
    'Gala',
    'Eva',
    'Rogelio',
    'Boby',
    'Ginebra',
    'Rocky',
    'Bruno',
    'Coco',
    'Daisy',
    'Toby',
    'Maggie',
    'Zeus',
    'Canela',
    'Pepper',
    'Loki',
    'Felix',
    'Thor',
    'Sasha',
    'Manchitas',
    'Kira'
];

  return names[Math.floor(Math.random() * names.length)];
};

export const generateAge = () => {
  const age = Math.floor(Math.random() * 20) + 2;
  return `${age}`;
};

