import { AppProps } from "next/app";
import NavBar from "../pages/NavBar";

// component props는 렌더링하길 원하는 페이지를 렌더링한다.

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
