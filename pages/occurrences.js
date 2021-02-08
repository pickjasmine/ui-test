import useSWR from 'swr';

const Occurrences = () => {
    const { data, error } = useSWR('/api/occurrences');

    if (error) {
        return (
            <p>Error: { error.toString() }</p>
        )
    } else if (data) {
        const { occurrences } = data;

        return (
            <>
                <h1>Occurrences</h1>
                {
                    occurrences.map((occurrence) => {
                        return (
                            <div key={ occurrence.name }>
                                <p>{ occurrence.kind }</p>
                            </div>
                        )
                    })
                }
            </>
        )
    } else {
        return (
            <h1>here with nothing</h1>
        )
    }
}

export default Occurrences;