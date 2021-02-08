import '../styles/globals.scss';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <header>
                <h1>Rode</h1>
                <Link href={ '/' }>Home</Link>
                <Link href={ '/occurrences' }>Occurrences</Link>
            </header>
            <main>
                <Component { ...pageProps } />
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </>
    );
}

export default MyApp
