import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@/libs/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
