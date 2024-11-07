import { Contact } from './contact.model';

export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  contact: Contact;
}
