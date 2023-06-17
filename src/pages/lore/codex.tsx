// research-overview.tsx
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Link from 'next/link';
import '../../styles/globals.css';
import styles from '../../components/modules/lore-overview.module.css';

const ResearchOverview = () => {
  return (
    <div>
      <Header />
      <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          The Stellar Codex
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          An ancient and revered tome for Galaxers,<br/> a compendium of knowledge and lore that spans the ages.
          </p>
          <div className={styles.buttons}>
            <Link href="/research-index"
              className={styles.button}>View Research<br/> Index
            </Link>
            <Link href="/governance"
              className={styles.button}>Learn More About Governance
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.sectionItem}>
    <img src="/logo.png" alt="Research at GenPen AI" className={styles.image}/>
   
  </div>
  <hr />
  <div >
        <blockquote className={styles.quote2}>
        Containing the histories of the machine elves, the secrets of the tardigrades,<br/> and the tales of countless human adventurers who have traversed the cosmos.
        </blockquote>
        </div>
  <hr /> 

  <div >
        <blockquote className={styles.quote}>
          More than just a Book
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          Its pages hold the wisdom of the past and the hope for the future,<br/> serving as a compass for those who seek to navigate the vast expanse of the universe. Whether a Galaxer seeks to understand the intricacies of interdimensional politics, the mysteries of <br/>metaphysical magic, or the strategies of cosmic combat, "The Stellar Codex" is their ultimate guide.
          </p>
          </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Humanity
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          Emerging from the planet Earth, humans bring with them a spirit of curiosity and adaptability that sets them apart. Their arrival signals a new chapter in the cosmic saga, one filled with potential for both conflict and cooperation. As they navigate the complexities of this vast universe, their journey is a testament to their resilience and determination.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/humanity'>Learn More</a>
            </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Portals
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          These interdimensional rifts, shimmering with cosmic energy, allow travel across vast distances and between different realities. They are the arteries of the cosmos, connecting worlds and civilizations, enabling trade, exploration, and even conflict. Mastering the use of portals is a fundamental skill for any Galaxer, as they provide the means to journey to uncharted territories, encounter new allies, and face unknown dangers. 
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/portals'>Learn More</a>
            </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Cosmic Conflict
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          The grand struggle that shapes the narrative of the Galaxer universe. This conflict, spanning across dimensions and civilizations, is a clash of ideologies, resources, and power. It's a war fought not only on the battlefields with advanced weaponry and strategic prowess, but also in the hearts and minds of every Galaxer, with diplomacy, alliances, and sometimes, deception. The Cosmic Conflict is a testament to the diversity and complexity of the universe, a constant reminder of the challenges that lie ahead, and the resilience required to overcome them. It is the crucible in which heroes are forged and legends are born.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/conflict'>Learn More</a>
            </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Droch
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          Known for their relentless strength and strategic prowess, the Droch are a faction that embodies the spirit of conflict and competition. Their mastery of combat and their unyielding determination make them a formidable adversary in the Cosmic Conflict. Yet, their approach is not without nuance. The Droch understand that war is not just about physical strength, but also about the will to fight, the strategy employed, and the alliances forged. Their story is a testament to the complex nature of conflict, and the lengths entities will go to secure their place in the cosmos.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/droch'>Learn More</a>
            </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Seasamh
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          The guardians of equilibrium in the Galaxer universe. They stand at the crossroads of conflict and harmony, maintaining the delicate balance that keeps the cosmos in check. The Seasamh are known for their wisdom and their deep understanding of the interconnectedness of all things. They believe that every action has a consequence, and that maintaining balance is key to the survival and prosperity of all dimensions. Their role in the Cosmic Conflict is often one of mediation and diplomacy, striving to resolve disputes and prevent unnecessary warfare. The Seasamh's story is a testament to the power of balance, and the crucial role it plays in the grand tapestry of the cosmos.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/seasamh'>Learn More</a>
            </div>
        </div>
  
  <hr />
        <div >
        <blockquote className={styles.quote}>
          The Tacaiocht
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          the pillars of unity and cooperation in the Galaxer universe. They are the bridge builders, the peacemakers, the ones who believe in the power of unity in diversity. The Tacaíocht are known for their unwavering support and their ability to bring together different factions for a common cause. They understand that in the vastness of the cosmos, no entity can stand alone, and that strength lies in unity. In the Cosmic Conflict, they often serve as the glue that holds alliances together, providing support and guidance to those in need. The Tacaíocht's story is a testament to the power of unity and cooperation, and the crucial role they play in maintaining harmony in the cosmos.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/taciocht'>Learn More</a>
            </div>
        </div>
       
  <hr />
        <div >
        <blockquote className={styles.quote}>
          The Teadan
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          the radiant source of power in the Galaxer universe. These resilient creatures, small yet mighty, are revered for their ability to survive in extreme conditions and their capacity to bestow incredible power upon those they align with. The Téadán are often sought after by Galaxers for their ability to enhance and amplify their abilities, serving as a beacon of strength and resilience in the face of adversity. Their story is a testament to the fact that power can come in the most unexpected forms, and that even the smallest entities can have a profound impact on the cosmos.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/teadan'>Learn More</a>
            </div>
        </div>
        <hr />
      

        <div >
        <blockquote className={styles.quote}>
          The Galaxer Guild
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          A diverse collective of humans who have chosen to align themselves with the machine elf factions. This guild, a melting pot of skills, abilities, and backgrounds, serves as a home base for humans navigating the vast Galaxer universe. The Galaxers are known for their spirit of cooperation and mutual support, providing a platform for humans to share resources, knowledge, and experiences. In the Cosmic Conflict, the guild stands as a united front, demonstrating the strength and resilience of humanity in the face of interdimensional challenges. The story of the Galaxers is a testament to the power of unity and collaboration in a diverse and complex universe.
          </p>
          </div>
          <div className={styles.button}>
            <a href='/lore/guild'>Learn More</a>
            </div>
        </div>
       
  <hr />
  <h1 className={styles.title}>Join us to make a brighter future.</h1>
  <div className={styles.buttons}>
    <Link href="/product/overview" className={styles.button}>Start Your Journey</Link>
  </div>
<hr />
      <Footer />
    </div>
  );
};

export default ResearchOverview;
