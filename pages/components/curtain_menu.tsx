import Head from 'next/head';
import { Container } from '@/website/container';
import Layout from '@/website/layout/default';
import {
  CurtainMenuLeft,
  CurtainMenuTop,
} from '@/components/curtain-menu/example';
import CurtainMenuLeftSnippet from '@/components/curtain-menu/snippets/left.mdx';
import CurtainMenuTopSnippet from '@/components/curtain-menu/snippets/top.mdx';

export default function CurtainMenuPage() {
  return (
    <>
      <Head>
        <title>Curtain Menu</title>
        <meta
          name="description"
          content="Kimia-ui curtain menu is a component which displays full screen navigation overlay"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Curtain Menu
        </h1>
        <CurtainMenuLeft />
        <CurtainMenuLeftSnippet />
        <CurtainMenuTop />
        <CurtainMenuTopSnippet />
      </Container>
    </>
  );
}

CurtainMenuPage.Layout = Layout;
