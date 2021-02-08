import { getOccurrences } from './services/occurrence-service';

export default async (req, res) => {
    const response = await getOccurrences();

    res.status(200).json({ occurrences: response.occurrences });
}