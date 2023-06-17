import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/modules/charter.module.css'
import Link from 'next/link'
import '../styles/globals.css';
import React from 'react';

const Terms = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          <h1 className={styles.header}>Terms of Service</h1>
              <p className={styles.paragraph}>
                Read Carefuly
              </p>
            
            </div>
            <div className={styles.imageContainer}>
              <img src="/horitlogo.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          <div className={styles.sectionCharter}>
      <h2 className={styles.headerCharter}>Published May 1, 2023</h2>
  <div className={styles.paragraphCharter}>
  <h1>Terms of Service</h1>

<p>Last updated: May 17, 2023</p>

<p>Welcome to Galaxer! These terms of service ("Terms") cover your use and access to the services, client software and websites ("Services") provided by Galaxer Games. Our Privacy Policy explains how we collect and use your information while our Acceptable Use Policy outlines your responsibilities when using our Services. By using our Services, you're agreeing to be bound by these Terms, and to review our Privacy and Acceptable Use policies. If you're using our Services for an organization, you're agreeing to these Terms on behalf of that organization.</p>

<h2>Your Stuff & Your Permissions</h2>

<p>When you use our Services, you provide us with things like your files, content, messages, contacts and so on ("Your Stuff"). Your Stuff is yours. These Terms don't give us any rights to Your Stuff except for the limited rights that enable us to offer the Services.</p>

<h2>Software</h2>

<p>Some of our Services allow you to download client software ("Software") which may update automatically. So long as you comply with these Terms, we give you a limited, nonexclusive, nontransferable, revocable license to use the Software, solely to access the Services.</p>

<h2>Termination</h2>

<p>You're free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with notice to you if:</p>

<ul>
  <li>(a) you're in breach of these Terms,</li>
  <li>(b) you're using the Services in a manner that would cause a real risk of harm or loss to us or other users, or</li>
  <li>(c) you don't have a Paid Account and haven't accessed our Services for 12 consecutive months.</li>
</ul>

<h2>Disputes</h2>

<p>We want to address your concerns without needing a formal legal case. Before filing a claim against Galaxer Games, you agree to try to resolve the dispute informally by contacting us. We'll try to resolve the dispute informally by contacting you via email.</p>

<h2>Jurisdiction</h2>

<p>For any disputes not resolved by the methods above, you agree that the dispute will be governed by the laws of the jurisdiction of Galaxer Games.</p>

<h2>Modifications</h2>

<p>We may revise these Terms from time to time, and will always post the most current version on our website. If a revision meaningfully reduces your rights, we will notify you.</p>

<p>By continuing to use or access the Services after the revisions come into effect, you agree to be bound by the revised Terms.</p>

  </div>
</div>


<hr/>
          <Footer />
      </div>
     
  );
}

export default Terms;