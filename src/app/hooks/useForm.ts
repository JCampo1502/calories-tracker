import { useState } from "react";
type initialState<T> = { [key: string]: T };

export const useForm = <T>(initialState: initialState<T>) => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (key: string, value: T) => {
        if (formData[key] === value) return;
        const newState = { ...formData, [key]: value };
        setFormData(newState);
    };

    return {
        formData,
        setFormData: handleChange,
    };
};
