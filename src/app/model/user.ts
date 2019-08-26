export class User {
  name: string;
  organization: string;
  contact: Contact;
}

export class Contact {
  type: string;
  label: string;
  value: string;
}