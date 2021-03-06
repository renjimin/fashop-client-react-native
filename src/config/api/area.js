import { env } from '../root';

const ROOT_URL = `${env.domain}/server/`;
export const AreaApi = {
    list: {
        url: `${ROOT_URL}area/list`,
        method: 'GET'
    },
    info: {
        url: `${ROOT_URL}area/info`,
        method: 'GET'
    },
}
