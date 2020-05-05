import { useractionTypes } from './user.types';

export const setCurrentUser = user => (
    {
        type: useractionTypes.SET_CURRENT_USER,
        payload :user
    }
);

export default setCurrentUser;