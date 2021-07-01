import {signIn, signOut, useSession} from 'next-auth/client';
import styles from '../style/Header.module.css';
import Head from 'next/head';
import Link from 'next/link';

const homeHeader = () => {
  return (<div
    fluid
    className="container header"
  >
    <h1 className="title">
        Welcome to the Daily Roulette!
    </h1>
  </div>);
};

export default function Header({
  title = 'Daily Facilitator',
}) {
  const [session, loading] = useSession();

  return (
    <header>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {homeHeader()}

      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p className={`nojs-show ${(!session && loading) ? styles.loading : styles.loaded}`}>
          {!session && <>
            <span className={styles.notSignedInText}>You are not signed in</span>
            <Link href='/api/auth/signin'>
              <a
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </Link>
          </>}
          {session && <>
            {session.user.image && <span style={{backgroundImage: `url(${session.user.image})`}} className={styles.avatar}/>}
            <span className={styles.signedInText}>
              <small>Signed in as</small><br/>
              <strong>{session.user.email || session.user.name}</strong>
            </span>
            <Link href='/api/auth/signout'>
              <a
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </Link>
          </>}
        </p>
      </div>
    </header>
  );
}
