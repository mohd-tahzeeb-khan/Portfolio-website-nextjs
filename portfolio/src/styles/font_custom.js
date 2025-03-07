import localFont from 'next/font/local';

const logofont = localFont({
  src: '../../public/font/PlaywriteVN-VariableFont_wght.ttf', // Ensure the path is correct
  weight: '400', // Optional: Specify weight
  style: 'normal', // Optional: Specify style
  //variable: '--font-logofont', // Optional: CSS variable for the font
});

export default logofont;
