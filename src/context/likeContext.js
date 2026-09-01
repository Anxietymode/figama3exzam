import { createContext, useContext } from 'react';

export const LikeContext = createContext(null);

export const useLike = () => useContext(LikeContext);
