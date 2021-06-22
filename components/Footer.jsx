import styles from '../style/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul>
        <li className={styles.navItem}>
          The Footer
        </li>
      </ul>
    </footer>
  );
}
