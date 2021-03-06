import types from '../../constants';
import { Toast } from "../../utils/publicFuncitonModule";
import { PageApi } from "../../config/api/page";
import {
    Fetch,
    fetchStatus
} from '../../utils';

export const getHomeView = () => {
    return async dispatch => {
        try {
            const e = await Fetch.fetch({
                api: PageApi.portal,
            })
            if (e.code === 0) {
                dispatch(updateHomeView(e.result.info, fetchStatus.s))
            } else {
                Toast.warn(e.msg)
                dispatch(updateHomeView(null, fetchStatus.e))
            }
        } catch (err) {
            dispatch(updateHomeView(null, fetchStatus.f))
        }
    }
}

const updateHomeView = (data, fetchStatus) => {
    return {
        type: types.home.GET_HOME_VIEW,
        data,
        fetchStatus,
    }
}
