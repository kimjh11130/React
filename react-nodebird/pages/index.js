
import Head from "next/head";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Head>
        <title>NodeBird</title>
      </Head>
      <div>Hello, Next!</div>
    </AppLayout>
  );
}