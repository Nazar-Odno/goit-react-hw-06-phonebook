import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';

function ContactList() {

    const contacts = useSelector(state => state.contacts.value);
    const filter = useSelector(state => state.filter.value);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
        <div className={css.ContactList}>
            <ul>
                {visibleContacts.map(contact => {
                    const { id, number, name } = contact;
                    return <Contact
                        key={id}
                        number={number}
                        name={name}
                        id={id}
                    />;
                })}
            </ul>
        </div>
    )
}

export default ContactList;