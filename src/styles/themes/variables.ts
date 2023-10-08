import { css } from 'styled-components'

const variables = css`
  :root {
    --white: #fff;

    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-500: #7c7c8a;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #141414;
    --gray-900: #121214;

    --red-500: #ab222e;
    --red-700: #7a1921;

    --orange-100: #ff5800;
    --orange-200: #ff4a00;
    --orange-300: #fa4500;
    --orange-400: #e43d00;
    --orange-500: #e22b00;
    --orange-600: #d13f00;
    --orange-700: #c23400;
    --orange-700-30: rgba(194, 52, 0, 0.3);
    --orange-700-70: rgba(194, 52, 0, 0.7);

    --ff-primary: 'Roboto', sans-serif;
    --ff-title: 'Space Grotesk', sans-serif;

    --transition: 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`
export { variables }
