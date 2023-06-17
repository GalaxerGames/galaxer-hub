import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styles from '../../components/modules/product-overview.module.css'
import Link from 'next/link'
import '../../styles/globals.css';

const ProductOverview = () => {
  return (
      <div>
          <Header />
          <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          CrossPlatform <br /> Gameplay <br /> for All
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph1}>
            We're targeting a cross platform launch in 2024. Follow our journey.
          </p>
          <div className={styles.buttons}>
            <Link href="/research-index"
              className={styles.button}>Get started
            </Link>
            <Link href="/governance"
              className={styles.button}>For developers
            </Link>
          </div>
        </div>
      </div>
      
          <img src="/logo.png" alt="Research at Galaxer" className={styles.image}/>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Platforms
        </blockquote>

        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          iOS & Vision Pro
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          The integration of iOS augmented reality and the Vision Pro headset is set to revolutionize gameplay in the Galaxer universe. By merging the physical and digital worlds, these technologies create an immersive gaming experience like no other. Players will be able to interact with the game environment in real-time, using gestures and movements to control their characters and perform actions. The Vision Pro headset, with its high-resolution display and advanced tracking capabilities, will provide a seamless and realistic visual experience. This combination of augmented reality and cutting-edge hardware will bring the Galaxer universe to life, transforming the way players engage with the game and each other. The future of gaming is here, and it's more immersive and interactive than ever before.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
         Android
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          The integration of Android AR Core into the Galaxer universe is set to transform the gaming experience. AR Core's advanced capabilities in understanding the environment, tracking motion, and estimating light allow for a deeply immersive and interactive gaming experience. Players can engage with the Galaxer universe right from their living rooms, parks, or anywhere else, as the game overlays digital content onto the real world. This fusion of the physical and digital worlds allows players to interact with the game in entirely new ways, using their surroundings as part of the gameplay. The result is a more engaging, realistic, and immersive gaming experience that blurs the lines between reality and the fantastical universe of Galaxer. With Android AR Core, the future of gaming is not just on the screen, but all around us.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Desktop
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          The availability of Galaxer on the Steam platform opens up a new frontier for desktop gameplay. With the power of modern computing hardware, players can dive into the immersive universe of Galaxer with high-resolution graphics, smooth performance, and a suite of customizable controls. The expansive screen real estate allows for a detailed and immersive exploration of the Galaxer universe, while the familiar environment of the Steam platform provides easy access to community features, updates, and additional content. Whether strategizing for the next interdimensional conflict, interacting with other players, or simply exploring the vast cosmos, the desktop gaming experience on Steam brings a new level of depth and engagement to the Galaxer universe.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          VR
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
          The integration of Galaxer with popular at-home VR headsets like the MetaQuest, HTC Vive, and others is set to redefine the gaming experience. These VR headsets offer a fully immersive, 360-degree view of the Galaxer universe, bringing players closer to the action than ever before. With high-resolution displays and responsive motion tracking, players can explore the cosmos, engage in interdimensional conflicts, and interact with other players in a truly immersive environment. The tactile feedback and intuitive controls of these VR headsets allow for a more natural and engaging gameplay experience. Whether you're navigating through the cosmos, strategizing with your guild, or facing off against adversaries, playing Galaxer on VR transports you directly into the heart of the action. It's not just playing a game, it's living an adventure.
          </p>
          </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Xbox
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph3}>
          The availability of Galaxer on Xbox, including through the Game Pass subscription service, brings a new dimension to console gameplay. With the power of Xbox's hardware, players can enjoy a smooth, high-definition gaming experience right from their living rooms. The integration with Xbox Live also allows for seamless multiplayer interactions, enabling players to team up with friends, join guilds, and engage in interdimensional conflicts with players around the world.
          <br/>The inclusion of Galaxer in the Xbox Game Pass library offers incredible value for subscribers. With a single subscription, players gain access to Galaxer along with a vast library of other games, allowing them to dive into the immersive universe of Galaxer without additional purchase. This accessibility, combined with the social and multiplayer features of Xbox Live, makes playing Galaxer on Xbox a compelling and convenient option for console gamers.  Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Playstation
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph3}>
          The availability of Galaxer on PlayStation, including through the PlayStation Plus subscription service and PlayStation VR, brings an immersive and interactive gaming experience to console players. With the powerful hardware of PlayStation consoles, players can enjoy a seamless, high-definition journey through the Galaxer universe from the comfort of their homes. The integration with PlayStation Network also allows for robust multiplayer interactions, enabling players to form alliances, join guilds, and engage in interdimensional conflicts with players around the globe.
          <br/>For an even more immersive experience, Galaxer is compatible with PlayStation VR. This allows players to step directly into the game world, exploring the cosmos and engaging in conflicts as if they were truly there. The intuitive controls and immersive feedback of PlayStation VR bring the game to life in a whole new way.
          <br/>The inclusion of Galaxer in the PlayStation Plus library offers incredible value for subscribers. With a single subscription, players gain access to Galaxer along with a vast library of other games, allowing them to dive into the immersive universe of Galaxer without additional purchase. This accessibility, combined with the social and multiplayer features of PlayStation Network and the immersive capabilities of PlayStation VR, makes playing Galaxer on PlayStation a compelling and immersive option for console gamers.
          </p>
          </div>
        </div>
        <hr />
        <div >
        <blockquote className={styles.quote}>
          Nintendo
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph3}>
          The availability of Galaxer on the Nintendo Switch brings a unique and versatile gaming experience to players. With the Switch's hybrid design, players can enjoy Galaxer in a variety of settings, whether docked for a big-screen experience at home, or undocked for portable, on-the-go gaming. The Joy-Con controllers offer intuitive controls and immersive feedback, enhancing the interactive elements of the Galaxer universe.
          <br/>The Nintendo Switch's multiplayer capabilities, both local and online, allow for seamless interactions with other players. This enables players to form alliances, join guilds, and engage in interdimensional conflicts with players around the world, all from their Nintendo Switch.
          <br/>The inclusion of Galaxer in the Nintendo eShop provides easy access for all Switch users. With its unique blend of portability, versatility, and social gaming, the Nintendo Switch offers a unique and engaging platform for exploring the vast universe of Galaxer.
          </p>
          </div>
        </div>

     {/*   <div className={styles.section}>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 1" className={styles.image}/>
    <Link href="/link/to/post1" className={styles.button}>Blog post 1</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 2" className={styles.image}/>
    <Link href="/link/to/post2" className={styles.button}>Blog post 2</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 3" className={styles.image}/>
    <Link  href="/link/to/post3" className={styles.button}>Blog post 3</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 4" className={styles.image}/>
    <Link href="/link/to/post4" className={styles.button}>Blog post 4</Link>
  </div>
</div>
<hr />
<div className={styles.quoteSection}>
  <blockquote className={styles.quote3}>
    Ensuring <br /> responsible <br /> use of our<br /> tools.
  </blockquote>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
  </div>
</div>
<hr />
<div className={styles.sectionBuilt}>
      <h1 className={styles.header}>Built with GenPen</h1>

      <div className={styles.largeImagesBuilt}>
        <div className={styles.imageContainer}>
          <img src="/logotri.png" alt="Description of image 1" className={styles.largeImage} />
          <p className={styles.imageCaption}>Your description for image 1.</p>
        </div>
        <div className={styles.imageContainerBuilt}>
          <img src="/logotri.png" alt="Description of image 2" className={styles.largeImage} />
          <p className={styles.imageCaption}>Your description for image 2.</p>
        </div>
      </div>

      <div className={styles.section}>
       <div className={styles.sectionItem}>
        <Link href="/subpage1">
          <img src="/logotri.png" alt="Link to subpage 1" className={styles.image} />
        </Link>
        </div>
        <div className={styles.sectionItem}>
        <Link href="/subpage2">
          <img src="/logotri.png" alt="Link to subpage 2" className={styles.image} />
        </Link>
        </div>
        <div className={styles.sectionItem}>
        <Link href="/subpage3">
          <img src="/logotri.png" alt="Link to subpage 3" className={styles.image} />
        </Link>
        </div>
        <div className={styles.sectionItem}>
        <Link href="/subpage4">
          <img src="/logotri.png" alt="Link to subpage 4" className={styles.image} />
        </Link>
      </div>
    </div>
    </div>
    <hr />


  <h1 className={styles.titleEnd}>Start creating with GenPen AI's <br /> powerful tools.</h1>
  <div className={styles.buttons}>
    <Link href="https://genpen.io/login.xhtml" className={styles.button}>Get Started</Link>
    <Link href="/pricing" className={styles.button}>View pricing</Link>
  </div>
  <hr /> */}

          <Footer />
      </div>
  );
}

export default ProductOverview;
