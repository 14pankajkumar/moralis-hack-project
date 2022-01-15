import Document, { Head, Html, Main, NextScript } from "next/document";

class myDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Philosopher&family=Poppins:ital,wght@0,600;1,500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="https://assets.devparty.io/images/icons/apple-touch-icon.png"
          />
          <link
            href="https://assets.devparty.io/css/font.css"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myDocument;
