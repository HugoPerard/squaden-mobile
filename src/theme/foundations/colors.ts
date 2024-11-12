import tailwindColors from './tailwindColors';

export const colors = {
  // Update me with other Tailwind colors or with https://smart-swatch.netlify.app/
  brand: 
  {
    50: '#e4f0ff',
    100: '#b9d1f9',
    200: '#8fb2f0',
    300: '#6394e8',
    400: '#3975e1',
    500: '#205cc7',
    600: '#17479c',
    700: '#0d3370',
    800: '#041f46',
    900: '#000a1c',
  },
  gray: tailwindColors.blueGray,

  success: tailwindColors.green,
  green: tailwindColors.green,

  error: tailwindColors.red,
  red: tailwindColors.rose,

  warning: tailwindColors.amber,
  orange: tailwindColors.amber,

  info: tailwindColors.sky,
  blue: tailwindColors.sky,
};
