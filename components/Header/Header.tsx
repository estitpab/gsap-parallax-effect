import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <a
        className={styles.brand}
        href="https://greensock.com/scrolltrigger"
        target="_blank"
        rel="noreferrer"
      >
        ScrollTrigger
      </a>
    </header>
  );
};
