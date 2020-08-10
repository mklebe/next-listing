import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Breadcrumb} from '../components/Breadcrumb'
import {FilterList} from '../components/FilterList'
import {ProductList} from '../components/ProductList'

export default function Home() {
  return (
      <div className={styles.page}>
        <Head>
          <title>Kauf mich Brillen-Shop!</title>
        </Head>
        <header >Ich bin ein header</header>
        <aside className={styles.breadcumb}>
          <Breadcrumb className={styles.header}></Breadcrumb>
        </aside>
        <aside className={styles.filter}>
          <FilterList></FilterList>
        </aside>
        <main className={styles.productList}>
          <ProductList></ProductList>
        </main>
        <footer className={styles.footer}>SEO Zeug</footer>
      </div>
  )
}
