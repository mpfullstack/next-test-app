import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { wrapper } from '../src/store';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Job, fetchJobs } from '../src/helpers'

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

export default function Sample() {
  return <div>sample</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx: GetServerSidePropsContext) => {
  console.log('store', store);
  // const data = await fetchJobs();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  // const jobs: Job[] = data.results.map((result: any) => {
  //   return {
  //     id: result.id,
  //     title: result.title,
  //     url: result.url,
  //     slug: result.slug,
  //   }
  // })

  return {
    props: {}, // will be passed to the page component as props
  }
});
