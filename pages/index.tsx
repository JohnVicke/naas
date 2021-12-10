import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NaaS</title>
      </Head>
      <Layout>
        <div>Home Page</div>
      </Layout>
    </>
  );
};

export default Home;
