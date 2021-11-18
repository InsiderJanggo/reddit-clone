import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react'

export default function Subreddit({ subreddit }) {
    return(
        <Menu>
            <MenuButton>
                Your Subreddit
            </MenuButton>
            <MenuDivider />
            <MenuList>
                <MenuItem>{subreddit.name}</MenuItem>
            </MenuList>
        </Menu>
    )
}