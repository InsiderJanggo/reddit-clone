import {
    FormControl,
    FormLabel,
    Switch
} from '@chakra-ui/react'
import { useState } from 'react';
import { useOnline } from 'rooks'

export default function StatusSwitch() {
    const isonline = useOnline();
    const [online, setOnline] = useState(isonline)

    return(
        <FormControl>
            <FormLabel htmlFor="status-checked" mb="0">
                {isonline ? "Online" : "Offline"}
            </FormLabel>
            <Switch onChange={() => setOnline(!isonline)} id="status-checked" size="sm" isChecked/>
        </FormControl>
    )
}