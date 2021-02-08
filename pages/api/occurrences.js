import { getOccurrences } from './services/occurrence-service';
import {mapToCollection} from './mappers/occurrences';

export default async (req, res) => {
    const response = await getOccurrences();

    const occurrences = mapToCollection(response);

    res.status(200).json({ occurrences });
}