import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default function Document() {
  return (
    <Html className="bg-slate-900 text-slate-100 font-akshar">
      <Head />
      <body className="flex flex-col">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
