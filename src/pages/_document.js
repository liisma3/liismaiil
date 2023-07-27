import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    
    return (
      <Html lang="en">
        <Head>
          {/* <meta name="theme-color" content={theme.palette.primary.main} />
           */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,400;0,700;1,400&family=Raleway:ital,wght@0,100;0,400;0,700;1,400&family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <link rel="favicon" href="/favicon.ico" />
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_CODE}`}></script> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "<%your code here%>");
    `,
            }}
          ></script>
        </Head>
        <body>
       
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getStatProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  //const MyApp = (App) => {

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    // console.log({ html: initialProps['html'], monApp: AppTree() });
    if (initialProps.head) {
      initialProps.head.forEach((h, i) => {
        //console.log(JSON.stringify(h));
      });
    }
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  } catch (error) {
    //console.table({ error });
    return { data: error };
  }
};
