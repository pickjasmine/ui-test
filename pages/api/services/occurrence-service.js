import { getBaseUrl } from '../utils/utils';
import { occurrences } from '../../../fake-data/occurrences';

export const getOccurrences = async () => {
    // const occurrencesUrl = `${ getBaseUrl() }/v1beta1/projects/${ process.env.PROJECT_ID }/occurrences`;
    //
    // const response = await fetch(occurrencesUrl);
    //
    // if (response.status !== 200) {
    //     return {
    //         occurrences: []
    //     };
    // }
    //
    // return response.json();

    return occurrences;
};

export const getOccurrenceByOccurrenceId = async (occurrenceId) => {
    const occurrencesUrl = `${ getBaseUrl() }/v1beta1/projects/${ process.env.PROJECT_ID }/occurrences/${occurrenceId}`;

    const response = await fetch(occurrencesUrl);

    if (response.status !== 200) {
        return {
            occurrence: null
        };
    }

    return response.json();
}