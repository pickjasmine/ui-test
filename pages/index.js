import Link from 'next/link'

const Home = () => {
    return (
        <>
            <h1>Welcome to Rode</h1>
            <Link href={'/occurrences'}>
                <a>View Occurrences</a>
            </Link>
        </>
    )
}

export default Home;
