import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
} from '../types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: null,
    user: null
};

export default function Auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.token,
            }

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                access: localStorage.getItem('access')
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                register: true,
                access: localStorage.getItem('access')
            }

        case SIGNUP_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                register: false,
            }

        case LOAD_USER_FAIL:
            localStorage.removeItem('access');
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                user: null,
            }

        case LOGIN_FAIL:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                user: null
            }
        case LOGOUT:
            localStorage.removeItem('access');
            return {
                ...state,
                access: null,
                user: null,
                isAuthenticated: false,
            }
        default:
            return state
    }
}