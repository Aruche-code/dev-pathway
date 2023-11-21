// frontend/pages/index.js
//トップレベルのrootページコンポーネント
import Layout from '../components/layouts';
import Head from 'next/head';

export default function index() {
  return (
    <Layout>
        <Head><title>現在の起動時のページ</title></Head>
        <h1>共通部分を記述します</h1>
    </Layout>
  );
}

