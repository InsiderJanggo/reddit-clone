import {
    FormControl,
    FormLabel,
    Switch
} from '@chakra-ui/react'
import { useOnline } from 'rooks'

export default function StatusSwitch() {
    const online = useOnline();
    return(
        <FormControl>
            <FormLabel htmlFor="status-checked" mb="0">
                {online ? "Online" : "Offline"}
            </FormLabel>
            <Switch id="status-checked" size="sm" isChecked/>
        </FormControl>
    )
}