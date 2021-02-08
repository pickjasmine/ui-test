import useSWR from 'swr';
import Occurrence from '../components/Occurrences/Occurrence';

const Occurrences = () => {
    const { data, error } = useSWR('/api/occurrences');

    if (error) {
        return (
            <p>Error: { error.toString() }</p>
        )
    }

    if (data) {
        const { occurrences } = data;

        return (
            <>
                <h1>Occurrences</h1>
                {
                    occurrences.map((occurrence) => {
                        return (
                           <Occurrence occurrence={occurrence}/>
                        )
                    })
                }
            </>
        )
    }

    return (
        <p>Loading...</p>
    )
}

export default Occurrences;