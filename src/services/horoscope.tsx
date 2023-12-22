import axios from 'axios';

export const horoscopeApi = ''

export const fetchRickAndMorty = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

// export const createRickAndMortFetch = async (url: string, { arg }: any) => {
//     const response = await axios.post(url, arg);
//     return response.data;
// };

// export const updateRickAndMortyFetch = async (url: string, { arg }: any) => {
//     const response = await axios.patch(url, arg);
//     return response.data;
// };

