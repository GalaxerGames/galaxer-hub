import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Link  from 'next/link';
import styles from '../../components/modules/android.module.css';
import '../../styles/globals.css';

const GLXR = () => {
  return (
      <div>
          <Header />
          <div className={styles.page}>
             <h1 className={styles.title}>GLXR Token</h1>
            <div className={styles.buttons}>
            <Link href="https://t.me/galaxer_glxr"
             className={styles.button}>Join Today
             </Link>
             </div>
            </div>
          <Footer />
      </div>
  );
}

export default GLXR;