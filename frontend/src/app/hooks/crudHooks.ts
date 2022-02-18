import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../services/server';
import { ApiError } from '../types/errors';
import { errorHandler } from '../utils/errorHandler';
import { fakeDelay } from '../utils/fakeDelay';

export const useGet = <T extends {}> (url: string) => {
    const [response, setResponse] = useState<AxiosResponse | undefined>(undefined);
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState(false);
    const apiFetch = async () => {
        try{
            const response = await api.get<T, AxiosResponse<{payload: T}>>(url)
            setResponse(response);
        }catch(e){
            setResponse(undefined);
            setError(errorHandler(e));
        }
        setLoading(false);
    }
    useEffect(()=> {
        setLoading(true);
        apiFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        response,
        error,
        loading
    }
}

export const usePost = <T extends {}>(url: string) => {
    const [loading, setLoading] = useState(false);
    
    const apiPost = async (object: T) => {
        try {
            setLoading(true)
            await fakeDelay(3000)
            await api.post<T, AxiosResponse<{payload: T}>>(url, object)
            setLoading(false)
            return true
        } catch (e) {
            return e
        }
    }
    return {
        apiPost,
        loading
    }
}
