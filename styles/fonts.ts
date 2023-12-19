import { swap } from 'formik';
import { DM_Sans, DM_Serif_Display, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

// define your variable font
// define 2 weights of a non-variable font
const roboto400 = Roboto({ weight: '400', subsets: ['latin'],display:'swap' });
const roboto700 = Roboto({ weight: '700', subsets: ['latin'], });
const dmSans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({ weight: ['400'], subsets: ['latin'], variable: "--font-dm-serif" })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder



export { roboto400, roboto700, dmSans, dmSerif };