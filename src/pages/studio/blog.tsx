import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/blog.module.css'
import Link from 'next/link'
import Image from 'next/image'
import '../../styles/globals.css';


const Blog = () => {
  return (
      <div>
          <Header />
          <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          Blog
        </blockquote>
      </div>
  <hr />
  
                <div className={styles.section}>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 1' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post1' className={styles.button}>Blog post 1</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 2' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post2' className={styles.button}>Blog post 2</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 3' width={250} height={100} className={styles.image}/>
              <Link  href='/link/to/post3' className={styles.button}>Blog post 3</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 4' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post4' className={styles.button}>Blog post 4</Link>
            </div>
          </div>
          <hr />
   
                <div className={styles.section}>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 1' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post1' className={styles.button}>Blog post 1</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 2' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post2' className={styles.button}>Blog post 2</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 3' width={250} height={100} className={styles.image}/>
              <Link  href='/link/to/post3' className={styles.button}>Blog post 3</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 4' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post4' className={styles.button}>Blog post 4</Link>
            </div>
          </div>
          <hr />
       
                <div className={styles.section}>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 1'  width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post1' className={styles.button}>Blog post 1</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 2' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post2' className={styles.button}>Blog post 2</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 3' width={250} height={100} className={styles.image}/>
              <Link  href='/link/to/post3' className={styles.button}>Blog post 3</Link>
            </div>
            <div className={styles.sectionItem}>
              <Image src='/logotri.png' alt='Image 4' width={250} height={100} className={styles.image}/>
              <Link href='/link/to/post4' className={styles.button}>Blog post 4</Link>
            </div>
          </div>
          <hr />


          <Footer />
      </div>
  );
}

export default Blog;