import {  GET_ALL_PUBLIC_GIST } from "../types";

export const addAllUserGist = (data) => {
    return {
        type: GET_ALL_PUBLIC_GIST,
        payload: data
    }
};