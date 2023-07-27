import { DM_Sans, DM_Serif_Display, Source_Sans_Pro } from 'next/font/google';
import localFont from 'next/font/local';

// define your variable fonts

// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_Pro({ weight: '400', subsets: ['latin'], });
const sourceCodePro700 = Source_Sans_Pro({ weight: '700', subsets: ['latin'], });
const dmSans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({ weight: ['400'], subsets: ['latin'], variable: "--font-dm-serif" })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder



export { sourceCodePro400, sourceCodePro700, dmSans, dmSerif };