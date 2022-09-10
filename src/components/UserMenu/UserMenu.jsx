import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from '../../redux/auth';
import { DivContainer, Text } from "./UserMenu.styled";
import {FaUserCircle} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return(
        <DivContainer>
            <FaUserCircle/>
            <Text>Добро пожаловать, {name}</Text>
            <Button  size="sm" variant="primary" type="button" onClick={() => dispatch(authOperations.logOut())}>Logout</Button>
        </DivContainer>
    )
}