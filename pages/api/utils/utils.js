export const getBaseUrl = () => {
    return `${ process.env.PROTOCOL }://${ process.env.GRAFEAS_HOST }${ process.env.GRAFEAS_PORT }`;
}