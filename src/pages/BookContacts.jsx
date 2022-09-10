import Container from 'components/Container';
import { ContactFormed } from '../components/Form/ContactForm';
import Filter from 'components/Filter/Filter';
import { PhoneBook } from './Contacts';
import { useState } from 'react';
import {useFetchContanctsQuery} from '../redux/contacts/contact';

export default function BookContacts() {
    const [filter, setState] = useState('');
    const {data: contacts} = useFetchContanctsQuery();

    const handlerFilter = (e) => {
        setState(e.target.value)
    }

    const filteredPlanets = contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter) || contact.name.toUpperCase().includes(filter))

    return(
        <div>
            <Container>
                <h2>Phonebook</h2>
                <ContactFormed/>

                <h2>Contacts</h2>
                <Filter
                value={filter}
                onChange={handlerFilter}
                />
                <PhoneBook value={filteredPlanets}/>
            </Container>
        </div>
    )
}