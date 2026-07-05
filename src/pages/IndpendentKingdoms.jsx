import './IndependentKingdoms.css';

const content = [
  { type: 'heading', text: 'Coins of Independent Kingdoms' },

  {
    type: 'text',
    paragraphs: [
      `This section describes coinage of various independent Kingdoms which existed in the eastern part of India. Some striking coins were issued by the Kingdoms like Assam and Tripura, which generated considerable interest in Indian numismatics. Because of relative isolation, their coinage was of distinct style, for example octagonal coins of Assam. The coinage of these kingdoms were essentially Hindu style with Devnagri inscriptions, a rarity in 17th century of India due to massive Mughal expansion and extensive mintage of coins in Islamic style.`,
    ],
  },

  { type: 'heading', text: 'ASSAM KINGDOM' },

  {
    type: 'figure', side: 'left',
    img: 'https://nupam.net/wp-content/uploads/2019/12/assm.gif',
    caption: null,
    text: null,
  },
  {
    type: 'caption-block',
    title: 'Chakradhwaja Simha',
    lines: [
      '1663-1670 AD',
      'Assam Kingdom',
      'Weight: 11.3 gm (K#11)',
      'Octagonal Silver Rupee, Lion at Bottom',
      'Legends in Ahom language',
    ],
  },

  {
    type: 'text',
    paragraphs: [
      `Assam or Ahom was an independent Hindu kingdom, better known in ancient literature as Kamrup. This Kingdom was located in fertile Brahmaputra river valley (modern Assam state in India). Sukhampa founded this kingdom in 13th century which gradually increased till late 16th century. in 1661, during height of Mughal expansion, Mir Jumla, Aurangzeb's governor occupied Assam briefly. Muslim army could not keep control of Assam long and retreated within few months. Never again Assam was attacked by muslims and remained fully independent.`,
      `Early rulers of Ahom kingdom embraced Hinduism and took Hindu titles. They issued very interesting coinage. In spite of its foundation in 13th century, Assam did not issue coins of it's own till mid-17th century. Chakradhwaja Simha (1663-1670 AD) was the first ruler who started isuing coins for this Kingdom. His earliest coins had legends written in Sanskrit (Devanagri script), but later he also issued coins with legends written in Assamese (Ahom) language. Shown above is a fine example of coin issued by him which is octagonal in shape. It was believed that Assam Kingdom is octagonal in shape, which inspired King to issue coins depicting octagonal geography of this Kingdom. All kings who followed him also followed the suit and issued octagonal coins.`,
    ],
  },

  {
    type: 'figure', side: 'right',
    img: 'https://nupam.net/wp-content/uploads/2019/12/assm3.gif',
    caption: null,
    text: null,
  },
  {
    type: 'caption-block',
    title: 'Rajeshwar Simha',
    lines: [
      '1751-1769 AD',
      'Assam Kingdom',
      'Minted in 1680 SE/1758 AD)',
      'Weight: 11.3 gm (K#134)',
      'Octagonal Silver Rupee, Lion at Bottom',
      'Legends in Devnagri/Bengali script',
    ],
  },

  {
    type: 'text',
    paragraphs: [
      `During 18th century Assam Kingdom weakened due to internal civil war and later attack by Burmese army. Eventually in 1882, Burmese occupied Assam completely. British who were ruling in neighbouring Bengal could not resist the temptation of adding Assam to their own growing empire. They acted swiftly, defeated Burmese army in 1884 and took control of the Kingdom, which remain part of British empire till 1947. On independence, it was incorporated in Republic of India as Assam State.`,
    ],
  },

  { type: 'heading', text: 'TRIPURA KINGDOM' },

  {
    type: 'text',
    paragraphs: [
      `Tripura was an independent Hindu kingdom occupying almost 10,400 square kilometers of hilly tract and a strip of fertile plains east of Bengal. Like Assam, this kingdom also remained largely secluded from neighboring Islamic influence. The existence of this kingdom is perhaps as old as history of eastern India. It came into prominence soon after Muslim rulers of Bengal lost their military strength. Tripura kings managed to acquire large tracts of land. Finally in 1733, powerful Mughal army defeated Tripura Maharaja (king) and occupied fertile plains, leaving him all hilly tract. After British took control of Bengal in 1871, a agent was appointed to help Maharaja in administration. Thus, this hill kingdom managed to remain independent till mid 20th century and finally in 1947 merged as one of the state in Indian republic.`,
      `Tripura coins are certainly special in Indian numismatics as most of them have names of their kings together with that of his queen. In 1464 AD, a young prince, Ratna Manikya with help of Rukn-ud-din Barbak Shah, a sultan of Bengal managed to gain full control over Tripura. He issued first coins of Tripura with fixed date of Saka era 1386 (1464 AD) which are certainly far superior to neighboring Bengal coinage. Even though Ratna Manikya minted coins in the identical weight standard of Bengal/ Mughal, they were entirely Hindu in their design and inspiration and definitely far better artistic specimen as compared to contemporary Bengal or Mughal coinage. Shown above is a fine example of Tripura coin minted by Ratna Manikya II which shows a lion (Vahana or vehicle of goddess Durga) on obverse and legends on reverse in Bengali script.`,
    ],
  },
];

export default function IndependentKingdoms() {
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

          case 'gallery':
            return (
              <section className="coin-gallery" key={i}>
                {block.images.map((im, j) => (
                  <figure className="coin-gallery__item" key={j}>
                    <img src={im.img} alt={im.caption || ''} loading="lazy" />
                    {im.caption && <figcaption>{im.caption}</figcaption>}
                  </figure>
                ))}
              </section>
            );

          case 'text':
            return (
              <section className="plain-text" key={i}>
                {block.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </section>
            );

          case 'caption-block':
            return (
              <aside className="coin-caption" key={i}>
                <p className="coin-caption__title">{block.title}</p>
                {block.lines.map((l, j) => <p className="coin-caption__line" key={j}>{l}</p>)}
              </aside>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
