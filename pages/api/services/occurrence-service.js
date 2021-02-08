import { getBaseUrl } from '../utils/utils';

export const getOccurrences = async () => {
    const occurrencesUrl = `${ getBaseUrl() }/v1beta1/projects/${ process.env.PROJECT_ID }/occurrences`;

    const response = await fetch(occurrencesUrl);

    if (response.status !== 200) {
        return {
            occurrences: []
        };
    }

    return response.json();
};