import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Back from '../asset/img/background1.webp';
import { PageLayout } from '@components/PageLayout';
import { CommonLayout } from '@components/CommonLayout';

export default function Home() {
  return (
    <CommonLayout>
      <div>HELO</div>
    </CommonLayout>
  );
}
