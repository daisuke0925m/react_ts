import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'

type UseChangeEvent<T> = {
    (update: Dispatch<SetStateAction<T>>): (event: ChangeEvent<HTMLInputElement>) => void
}

export const useStringChangeEvent: UseChangeEvent<string> = (update) => {
    return useCallback((event: ChangeEvent<HTMLInputElement>) => {
        update(event.target.value);
    }, [update]);
}