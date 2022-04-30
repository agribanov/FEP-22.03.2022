const DELETE_BTN_CLASS = 'delete-btn';
const CONTACT_ROW_SELECTOR = '.contact-row';

const contactForm = document.querySelector('#newContactForm');
const contactsListEl = document.querySelector('#contactsList');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const formInputs = document.querySelectorAll('.form-input');

contactForm.addEventListener('submit', onContactFormSubmit);
contactsListEl.addEventListener('click', onContactsListClick);

let contactsList = [
    {
        id: 100,
        name: 'John1',
        surname: 'Doe',
        phone: '5555',
    },
    {
        id: 200,
        name: 'John2',
        surname: 'Doe',
        phone: '5555',
    },
    {
        id: 300,
        name: 'John3',
        surname: 'Doe',
        phone: '5555',
    },
];

init();

function onContactFormSubmit(e) {
    e.preventDefault();

    const newContact = getContact();

    if (isContactValid(newContact)) {
        addContact(newContact);
        resetForm();
    } else {
        alert('Not valid');
    }
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getContactId(e.target);
        removeContact(id);
    }
}

function init() {
    renderList();
}

function getContact() {
    const contact = {};

    formInputs.forEach((inp) => {
        contact[inp.name] = inp.value;
    });

    return contact;
}

function isContactValid(contact) {
    return (
        isTextFieldValid(contact.name) &&
        isTextFieldValid(contact.surname) &&
        isPhoneFieldValid(contact.phone)
    );
}

function isTextFieldValid(value) {
    return value !== '';
}

function isPhoneFieldValid(value) {
    return isTextFieldValid(value) && !isNaN(value);
}

function generateContactHtml(contact) {
    return interpolate(contactTemplate, contact);
}

function addContact(contact) {
    // contact.id = Math.random();
    contact.id = Date.now();
    contactsList.push(contact);

    renderList();
}

function renderList() {
    contactsListEl.innerHTML = contactsList.map(generateContactHtml).join('\n');
}

function resetForm() {
    contactForm.reset();
}

function getContactId(el) {
    const contactRowEl = el.closest(CONTACT_ROW_SELECTOR);

    return +contactRowEl.dataset.contactId;
}

function removeContact(id) {
    // const index = contactsList.findIndex((obj) => obj.id === id);
    // contactsList.splice(index, 1)

    contactsList = contactsList.filter((obj) => obj.id !== id);

    renderList();
}
