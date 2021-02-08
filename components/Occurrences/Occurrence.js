import styles from '../../styles/Occurrence.module.scss';

const getOccurrenceDetails = (occurrence) => {
    switch (occurrence.kind) {
        case "DISCOVERY":
            return (
                <>
                    <p>Status: { occurrence.discovered.discovered.analysisStatus }</p>
                </>
            )
        case "VULNERABILITY":
            return (
                <>
                    <p>Type: { occurrence.vulnerability.type }</p>
                    <p>Effective Severity: { occurrence.vulnerability.effectiveSeverity }</p>
                    <p>Description: { occurrence.vulnerability.shortDescription }</p>
                </>
            )
    }
}

const Occurrence = ({ occurrence }) => {
    return (
        <div key={ occurrence.name } className={styles[occurrence.kind.toLowerCase()]}>
            <h2>{ occurrence.kind }</h2>
            <p>Name: { occurrence.name }</p>
            <p>URI: { occurrence.resource.uri }</p>
            { getOccurrenceDetails(occurrence) }
        </div>
    )
}

export default Occurrence;