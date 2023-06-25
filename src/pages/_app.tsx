import "@/styles/globals.css";
import "@/styles/indexInven.css";
import "@/styles/Units.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
