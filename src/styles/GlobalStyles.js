import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    /* Indigo */
    --color-indigo-50: #eef2ff;
  --color-indigo-100: #e0e7ff;
  --color-indigo-200: #c7d2fe;
  --color-indigo-300: #6366f1;
  --color-indigo-400:rgb(63, 73, 156);
  --color-indigo-500:rgb(61, 64, 231);
  --color-indigo-600:rgb(37, 27, 235);
  --color-indigo-700:rgb(24, 6, 216);
  --color-indigo-800:rgb(12, 0, 177);
  --color-indigo-900:rgb(5, 0, 138);
  /* grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900:rgb(5, 7, 12);

  --color-red-50: #fef2f2;
  --color-red-100: #fee2e2;
  --color-red-200: #fecaca;
  --color-red-300: #fca5a5;
  --color-red-400: #f87171;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  --color-red-900: #7f1d1d;
  --color-red-950: #450a0a;
  
  --color-green-50: #f0fdf4;
  --color-green-100: #dcfce7;
  --color-green-200: #bbf7d0;
  --color-green-300: #86efac;
  --color-green-400: #4ade80;
  --color-green-500: #22c55e;
  --color-green-600: #16a34a;
  --color-green-700: #15803d;
  --color-green-800: #166534;
  --color-green-900: #14532d;
  --color-green-950: #052e16;

  --shadow-grey: 0 4px 6px rgba(75, 85, 99, 0.15), 0 1px 3px rgba(75, 85, 99, 0.1);
  --shadow-indigo: 0 4px 6px rgba(99, 102, 241, 0.2), 0 1px 3px rgba(99, 102, 241, 0.1);
  --shadow-green: 0 4px 6px rgba(34, 197, 94, 0.2), 0 1px 3px rgba(34, 197, 94, 0.1);
  --shadow-red: 0 4px 6px rgba(239, 68, 68, 0.2), 0 1px 3px rgba(239, 68, 68, 0.1);


  --border-radius-sm: 4px;
  --border-radius-md: 10px;
  --border-radius-lg: 16px;
  --border-radius-xl: 32px;
}
*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s , border 0.3s;
}

body {
    background-color: var(--color-grey-100);
    font-family: 'Poppins', sans-serif;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
}

a {
    color: var(--color-indigo-500);
    text-decoration: none;
    transition: color 0.3s;
}
ul li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
}
`;
export default GlobalStyles;
