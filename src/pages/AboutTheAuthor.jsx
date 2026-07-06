import './AboutTheAuthor.css';

const content = [
  {
    type: 'figure', side: 'left',
    img: '/images/uploads/2019/12/nupam_mahajan.jpg',
    caption: null,
    text: `Dr. Nupam Mahajan is a Professor of Surgery, Cancer Researcher and a private coin collector who is passionate about Indian history. This website was built to inform the public about the lesser known side of the History of the Indian sub-continent, which includes modern day India, Bangladesh, Pakistan, Sri Lanka and Nepal. He will be happy to answer any questions regarding the information on this site, your personal coin collection, and much more. You can contact him at:`,
  },

  {
    type: 'contact',
    email: 'nupam@msn.com',
  },

  { type: 'heading', text: 'Why a Webpage for Indian Coins?' },

  {
    type: 'text',
    paragraphs: [
      `I was just a teenager, while taking a walk on dusty streets of a southern Indian city, I noticed an old lady trying to sell a few pieces of metal, mostly copper coins of sultanate and few base metal coins of princely states. It is not an uncommon sight in India, but one piece attracted my attention. Out of curiosity and a bit of guilt (she was making living hard way), I bought the coin. After some research, I found that it is a common half anna of EIC and have little or no numismatic importance. But, soon I discovered that India have tremendous numismatic legacy, and there are dozens of series, which are not even fully studied. It was a beginning of making of a humble student of Indian history and numismatics.`,
    ],
  },

  {
    type: 'list',
    intro: `For study and research in the field of history, following avenues are often explored.`,
    items: [
      '1) Contemporary literary works, including travelogues',
      '2) Inscriptions (rock, metal or wooden)',
      '3) Coins of that period',
    ],
  },

  {
    type: 'text',
    paragraphs: [
      `Apart from these, for study of medieval period, contemporary architecture and paintings can also be a good supplement. Literary works available for students of Indian history includes 'Puranas' (almost 20 of them were written) and other written materials of contemporary anthers, poets and dramatists. The written works of foreign visitors (many Chinese, Arab and few African and European travelers/scholars have visited India) are very crucial for authenticating the information. Unfortunately, very little written materials have survived today to give the complete and exact information of various ancient and early medieval dynasties. The rock and other inscriptions did survive, but the limited numbers of them, made them incomplete material.`,
      `Coins are perhaps one of the most important evidences for students of history. Numismatic evidence is truly the most accurate evidence that one can gather substantiating historical claims. This is especially critical as many other forms (contemporary literature written by court official) are often prone to exaggeration and might not provide precise information regarding extends of Kingdoms and dates. The names, the language they spoke and wrote, their beliefs, favorite attributes and how these kings looked in real life, including their fashion sense was almost entirely deciphered from their coins. Without the numismatic studies these rulers and dynasties would have been completely oblivious to historians. The best example is the Indo-Greeks and other nomadic kingdoms which existed prior to Kushan rule in Afghanistan and North-West India (modern Pakistan) from 3rd Cntury BC to 6th Century AD. Indeed, these coins acted as the 'Rosetta stone' for deciphering two languages, Kharoshti and Brahmi.`,
      `India has well studied history of 4000 years, which includes almost 2500 years of numismatic activity. The Indus valley civilization, the cities of it have been excavated in Sindh, Punjab, Gujrat and Rajasthan states, takes its rank among the ancient river valley civilizations of Egypt (Nile river) and Assyria & Babylonia (Euphrates and Tigris rivers). The excavations at Mohenjadaro and Harappa ruins clearly shows a sophisticated and complex society, which was prosperous because of its trade with other parts of India and also with other civilizations of Asia. More than 500 seals have been unearthed in these ruins, which are essentially made up of terracotta with fine representation of animal figures and pictorial writing, which is not yet deciphered. Two such seals of Harappa have been discovered in Mesopotamia (modern Iraq), leaving no doubt that these seals were used in connection with trade. Are these seals acted as the predecessors of coins? This remains to be proven, however, it was certainly beginning of the thought-process in that direction`,
      `The Indian numismatic legacy is complex, but amazing enough to seduce a researcher looking for the novelty. We see punchmarked coins with no particular shape and bewildering array of symbols, the superb art pieces of Kushan and Gupta dynasties, wonderful realistic portraits of Satvahana rulers, amazing coins of Akbar and Jahangir including the portrait types and the heaviest gold coins ever minted in the world, 1000 Mohur of Mughal emperor Jahangir, which has a diameter of 20 cm and contains 383.75 troy ounces or almost 12 Kilograms of pure gold! Considering this tremendous diversity of Indian monetary system, it is almost impossible to write a concise essay on Indian coinage. This webpage is just an introduction to all those enthusiasts who would take a few minutes off to look and appreciate numismatic legacy of India. This webpage is constantly under construction, so if there is some section that you would like to see, drop a line.`,
    ],
  },
];

export default function AboutTheAuthor() {
  return (
    <article className="page kushana-page">
      {content.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return <h2 className="section-heading" key={i}>{block.text}</h2>;

          case 'figure':
            return (
              <section className={`media-row media-row--${block.side}`} key={i}>
                <figure className="media-row__figure">
                  <img src={block.img} alt={block.caption || ''} loading="lazy" />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
                {block.text && <p className="media-row__text">{block.text}</p>}
              </section>
            );

          case 'contact':
            return (
              <p className="plain-text" key={i}>
                <a href={`mailto:${block.email}`}>{block.email}</a>
              </p>
            );

          case 'text':
            return (
              <section className="plain-text" key={i}>
                {block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </section>
            );

          case 'list':
            return (
              <section className="plain-text" key={i}>
                <p>{block.intro}</p>
                <ul className="janapada-list">
                  {block.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </section>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
