import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/careers.module.css'
import Link from 'next/link'
import Image from 'next/image'
import '../../styles/globals.css';

const Careers = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          
              <p className={styles.paragraph}>
                Join us to build<br/>a brighter future
              </p>
              <Link href='https://genpen.io/login.xhtml' className={styles.button}>View all Opportunities</Link>
            </div>
            <div className={styles.imageContainer}>
              <p>Developing AI Enhanced tools<br/>requires humans from a wide range<br/>of disciplines and backgrounds.<br/>We&apos;re always looking for the best<br/>minds to join our globally remote<br/>team.</p>
            </div>
          </div>
          <hr />
          <div className='videoContainer'>
           <video autoPlay loop muted>
           <source src='path_to_your_video.mp4' type='video/mp4' />
          Your browser does not support the video.
          </video>
          </div>
          <hr/>
          <div className={styles.quoteSection2}>
            <p className={styles.quote2}>
              This is a quote that takes up 50% of the viewport height
            </p>
          </div>
          <hr/>
          <div className={styles.section3}>
              <h2 className={styles.header3}>Core Values</h2>
              <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 1</strong>
                      <p className={styles.bulletDescription}>Description of Value 1...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
              </ul>
          </div>
          <div className={styles.imageContainer2}>
            <Image src='/logo.png' alt='Image description' className={styles.fullWidthImage2}/>
          </div>
          <hr/>
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <p className={styles.paragraph}>
                Benefits
              </p>
            </div>
            <div className={styles.imageContainer2}>
            <p>We know that well-being<br/> is at the center of everyday life. Our comprehensive benefits<br/> package supports you where<br/> you are, so you can take care<br/> of what matters today while<br/> confidently planning for the future.</p>
            </div>
            </div>
            <div className={styles.threeImageSection}>
              <div className={styles.imageListItem}>
                <Image src='/logotri.png' alt='Image 1 description' className={styles.image}/>
                <ul>
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
              <div className={styles.imageListItem}>
                <Image src='logotri.png' alt='Image 2 description' className={styles.image}/>
                <ul>
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
              <div className={styles.imageListItem}>
                <Image src='logotri.png' alt='Image 3 description' className={styles.image}/>
                <ul>
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
            </div>
            <hr/>
            <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <p className={styles.paragraph}>
                Featured Roles
              </p>
            </div>
            <div className={styles.imageContainer2}>
            <p>We are constantly seeking<br/>talented individuals to join our<br/>team. Explore featured roles<br/>or view all open roles.</p>
            </div>
            </div>
            <div className={styles.sectionTable}>
          
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Location</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Junior AI Developer</td>
                    <td>Remote</td>
                    <td><Link href='https://discord.gg/9MN9smcFPZ' className={styles.button}>Apply Now</Link></td>
                </tr>
                <tr>
                  <td>Marking Director</td>
                  <td>Remote</td>
                  <td><Link href='https://discord.gg/9MN9smcFPZ' className={styles.button}>Apply Now</Link></td>
                </tr>
                <tr>
                  <td>Junior Web Developer</td>
                  <td>Remote</td>
                  <td><Link href='https://discord.gg/9MN9smcFPZ' className={styles.button}>Apply Now</Link></td>
                </tr>
                <tr>
                  <td>Sales Specialist</td>
                  <td>Remote</td>
                  <td><Link href='https://discord.gg/9MN9smcFPZ' className={styles.button}>Apply Now</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr/>
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          
              <p className={styles.paragraph}>
                Pricing<br />from basic to<br />comprehensive
              </p>
              
              <a href='' className={styles.button}>Read about GenPen AI Internship</a>
            </div>
            <div className={styles.imageContainer}>
              <Image src='/logotri.png' alt='Career Image' className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          
          <div className={styles.sectionBuilt}>
                  <h1 className={styles.header}>Life at GenPen AI</h1>

                  <div className={styles.largeImagesBuilt}>
                    <div className={styles.imageContainerBuilt}>
                      <Image src='/logotri.png' alt='Description of image 1' className={styles.largeImageBuilt} />
                      <p className={styles.imageCaption}>Your description for image 1.</p>
                    </div>
                    <div className={styles.imageContainerBuilt}>
                      <Image src='/logotri.png' alt='Description of image 2' className={styles.largeImagesBuilt} />
                      <p className={styles.imageCaption}>Your description for image 2.</p>
                    </div>
              </div>
              </div>
          
          <hr />
          <div className={styles.quoteSection2}>
            <p className={styles.quote2}>
              This is a quote that takes up 50% of the viewport height
            </p>
          </div>

          <hr />
          
          <h3>Latest Updates</h3>
                <div className={styles.sectionUpdates}>
            <div className={styles.sectionItemUpdates}>
              <Image src='/logotri.png' alt='Image 1' width={250} height={100} className={styles.imageUpdates}/>
              <Link href='/link/to/post1' className={styles.button}>Blog post 1</Link>
            </div>
            <div className={styles.sectionItemUpdates}>
              <Image src='/logotri.png' alt='Image 2' width={250} height={100} className={styles.imageUpdates}/>
              <Link href='/link/to/post2' className={styles.button}>Blog post 2</Link>
            </div>
            <div className={styles.sectionItemUpdates}>
              <Image src='/logotri.png' alt='Image 3' width={250} height={100} className={styles.imageUpdates}/>
              <Link  href='/link/to/post3' className={styles.button}>Blog post 3</Link>
            </div>
            <div className={styles.sectionItemUpdates}>
              <Image src='/logotri.png' alt='Image 4' width={250} height={100} className={styles.imageUpdates}/>
              <Link href='/link/to/post4' className={styles.button}>Blog post 4</Link>
            </div>
          </div>
          

          <hr />
                <h1 className={styles.titleCareers}>Join us to make a brighter future.</h1>
            <div className={styles.buttonsCareers}>
              <Link href='/companyCareers' className={styles.button}>View Opportunities</Link>
            </div>
          <hr />
          <Footer />
      </div>
  );
}

export default Careers;