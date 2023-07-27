const title = 'liismaiil : Progression plateform UI';
const description = 'liismaiil User Progression plateform UI - Solution Ludique |  apprentissage improvment   ';

const seoConfig = {
  title,
  description,
  canonical: 'https://liismaiil.org/',
  openGraph: {
    url: 'https://liismaiil.org',
    title,
    description,
    images: [
      {
        url: 'https://liismaiil.org/images/og1.jpg',
        width: 800,
        height: 600,
        alt: title,
      },
      {
        url: 'https://liismaiil.com/images/og2.jpg',
        width: 900,
        height: 800,
        alt: title,
      },
    ],
    site_name: 'liismaiil',
  },
  twitter: {
    handle: '@liismaiil',
    site: '@liismaiil',
    cardType: 'summary_large_image',
  },
};
export default seoConfig;
