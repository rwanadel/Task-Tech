import { CREATE_NEW_USER } from '../type'

import { useInsertData } from '../../Hook/useInsertData';
// import { useGetData, useGetDataToken } from './../../hooks/useGetData';
// import { useInsUpdateData } from '../../hooks/useUpdateData';

//create new user 
export const createNewUser = (data) => async (dispatch) => {
    const { setLoading, ...restData } = data;
    try {
        setLoading(true)
        const response = await useInsertData(`auth/signup`, restData);
        setLoading(false)
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        setLoading(false)
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}