
import {toast} from "react-toastify";

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

//update the value in localstorage
const updateStorage = (data) => {
    localStorage.setItem('contacts', JSON.stringify(data))
}

//store logic
export const createContact = (contact) => {
    let extEmail = contacts.find((item) => item.email === contact.email);
    let extMobile = contacts.find((item) => item.mobile === contact.mobile);

    if(extEmail) {
        toast.warning('user email already registered');
    } else if(extMobile) {
        toast.warning('user mob number already registered');
    } else {
        contacts.push(contact);
        updateStorage(contacts);
        toast.success('new contact created successfully');
        window.location.href = "/";
    }
};

//read logic
export const readContacts = () => {
    return contacts;
}

export const readContact = (id) => {
    let extContact = contacts.find((item) => item.id === id)
    return extContact;
}
//to update data
export const updateContact = (id,contact) => {
    let extIndex = contacts.findIndex((item) => item.id == id);
     let data = {
        id: Number(id),
        ...contact
     };
     contacts.splice(extIndex,1,data)
     updateStorage(contacts)
     toast.success('successfully updated');
     window.location.href = "/";
}

//delete
export const deleteContact = (id) => {
    let extIndex = contacts.findIndex((item) => item.id == id)
    contacts.splice(extIndex,1)
    updateStorage(contacts)
    toast.success('contact deleted successfully');
    window.location.href = "/"
}