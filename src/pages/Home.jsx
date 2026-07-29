import './Home.css';
import ViewerCounter from './ViewerCounter';

const blocks = [
  {
    img: '/images/uploads/2019/12/pul1.gif',
    alt: '',
    text: `Coins are reflections of history! The study of coins, also called numismatics, has been possibly the most widely used tool in deciphering history, especially the ancient history of the Indian subcontinent. The renaissance of Indian history in 18th century coincided with the deciphering of the two ancient languages, Kharoshthi and Brahmi by James Princep, who used the bilingual coins of Indo-Greek and the Kushan rulers as the 'Rosetta stone'. This catapulted Indian history (and historians) to an entirely new league, 'the Ancient Indian history' that was not only distinct, but also contemporary to the ancient Greeks. The entire intellect of the Indian subcontinent awoke to this new found insight into the long-forgotten glorious past.`,
  },
  {
    img: '/images/uploads/2019/12/vima3-150x150.jpg',
    alt: '',
    text: `The most conspicuous outcome of this new insight was the undertaking of multiple archeological excavations throughout Indian subcontinent, followed by systematic study & reading of the rediscovered ancient pillars, rock/cave inscriptions, copper plates and inscriptions on statues. For the first time there was a comprehensive understanding of various dynasties, identities of their rulers, the chronology of their rise & fall and their domains. However, historians were soon facing a new challenge, the rock or pillar inscriptions/records were scarce, often brief (and worn out), and were subject to exaggeration. Here the coins took a paramount role in providing accurate & unbiased information. Further, the evolution of script on coins, dates, designs, coin making process (especially loss of sophistication as reign progressed) and the deteriorating metal content revealed the chronology of rulers within dynasties and the contemporary kingdoms & rulers who copied each other. Significantly, coins identified so many rulers, especially, many Indo-Greek, Kushan & Kshatrapa rulers are known today exclusively because of their coinage.`,
  },
  {
    img: '/images/uploads/2019/12/Huvi1.jpg',
    alt: '',
    text: `India, which historically includes modern India, Pakistan, Bangladesh, and parts of Nepal and Afghanistan, is also known as Bharat Varsha, a land of famous King, Bharata or Hindustan. The name 'India' was applied to this country by Greeks. The early inhabitants of the subcontinent were mystified by the mighty river, which they named Sindhu or Sindh (in Sanskrit, it means 'like an ocean'). The river Sindhu was called Indus by Greeks and thus the country was called India. The size of the Indian Subcontinent is enormous, which is almost as large as Europe without Russia or twenty times bigger than Great Britain.`,
  },
  {
    img: '/images/uploads/2019/12/kqt1.gif',
    alt: '',
    text: `In ancient Sanskrit text, Vishnu Purana, it is written that all the descendants of Bharata (the people of India) have been given the land of thousand Yojanas (leagues) which stretch from snowy mountains of Himalayas in the north to Rama's Setu (Adam's bridge) in the south, and from the valley of Bramhaputra river in the east to the land beyond seven mouths of Indus/Sindh river in the west. Indeed, it provided an earliest definition of the Indian Subcontinent, which was largely accepted by the populace since the great Mauryan emperors, who first achieved this ultimate goal to bring entire Indian subcontinent under their control.`,
  },
  {
    img: '/images/uploads/2019/12/kqt2.gif',
    alt: '',
    text: `This webpage is created to provide information to both casual surfer and serious researchers, and contains many interesting coins, common, rare and extremely rare types. It has one of the earliest coins of Indian subcontinent, minted 2600 years ago! You would see the gold coins of Kushan and Gupta dynasties, which are often considered to be one of the finest gold coins of the ancient world. I have also included some interesting coins, e.g. the first gold coin of south India, the first Rupee and the zodiac coins. You will also find gold and silver coins of Western & Central Indian dynasties of medieval time, Southern Indian dynasties, Islamic dynasties, Mughal emperors, Maratha rulers, princely state rulers, and set of the coins minted during British Raj.`,
  },
  {
    img: '/images/uploads/2019/12/Jah1.jpg',
    alt: '',
    text: `Most of the coins shown are from my personal collection. If you wish to use the images for book or any other publications, drop me a line and I might be able to provide high resolution pictures of most of the Indian coins (majority of which are not shown on website). You are free to use any of the material shown here for educational purposes. On this webpage, I have magnified most coins twice the actual size (2X) to view the finer details more clearly.`,
  },
];

export default function Home() {
  return (
    <article className="page home">
      <h1>Nupam's Website of Indian Coins</h1>
      <ViewerCounter />

      {blocks.map((b, i) => (
        <section className="home-row" key={i}>
          <img className="home-row__img" src={b.img} alt={b.alt} loading="lazy" />
          <p className="home-row__text">{b.text}</p>
        </section>
      ))}

      <div className="coin-rule"><span /></div>

      <p>Feel free to contact me for all the additional information that you may like to know about any coin/s.</p>
      <p>Dr Nupam Mahajan (<a href="mailto:nupam@msn.com">nupam@msn.com</a>)</p>
    </article>
  );
}