import { useState } from "react";

const useForm = (initialstates) => {
    const [values, setValues] = useState(initialstates);

    /**
     * @param {import('react').ChangeEvent<HTMLInputElement>} e 
     */
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return [values, handleChange]
}

export default useForm