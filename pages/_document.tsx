import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default function Document() {
  return (
    <Html className="bg-slate-900 text-slate-100 font-akshar">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_logo_transparent_1024x1024.png"
        />
      </Head>
      <body className="flex flex-col">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
