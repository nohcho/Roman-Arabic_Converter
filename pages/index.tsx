import Head from 'next/head';
import Image from 'next/image';
import styles from '@/pages/index.module.css';
import Converter from '__tests__/components/Converter';

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Roman && Arabic</title>
      </Head>

      <main>
        <Converter />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://t.me/tasuhanov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Muhammad Tasuhanov:
          <span className={styles.logo}>
            <Image src="/tel.svg" alt="Vercel Logo" width={25} height={22} />
          </span>
        </a>
      </footer>
    </div>
  );
}
