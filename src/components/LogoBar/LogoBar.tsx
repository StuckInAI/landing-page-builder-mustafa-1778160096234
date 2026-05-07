import styles from './LogoBar.module.css';

const logos = [
  { name: 'Vercel', symbol: '▲' },
  { name: 'GitHub', symbol: '◉' },
  { name: 'Stripe', symbol: '◈' },
  { name: 'Figma', symbol: '◍' },
  { name: 'AWS', symbol: '⬡' },
  { name: 'Notion', symbol: '◼' },
];

export default function LogoBar() {
  return (
    <section className={styles.logoBar}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by teams at</p>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <span className={styles.symbol}>{logo.symbol}</span>
              <span className={styles.name}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
