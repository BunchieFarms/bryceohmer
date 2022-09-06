import { useEffect, useState } from "react";

function getSavedValue(key: string, initialValue: any) {
    let savedValue;
    if (typeof window !== 'undefined')
        savedValue = localStorage.getItem(key);
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue;
    return initialValue
}

export default function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {return getSavedValue(key, initialValue)});

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value]);

    return [value, setValue]
}