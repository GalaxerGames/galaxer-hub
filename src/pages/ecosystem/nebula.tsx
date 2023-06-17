import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Link  from 'next/link';
import styles from '../../components/modules/android.module.css';
import '../../styles/globals.css';

const Nebula = () => {
  return (
    <div>
    <Header />
    <div className={styles.page}>
       <h1 className={styles.title}>Nebula Notes</h1>
      <div className={styles.buttons}>
      <Link href="https://t.me/galaxer_glxr"
       className={styles.button}>Learn More
       </Link>
       </div>
      </div>
    <Footer />
</div>
  );
}

export default Nebula;