export const state = {
  worker_name: '',
  date: '',
  note: '',
};
export const fields = [
  [
    {
      tag: 'DropDown',
      label: 'Worker Name',
      name: 'worker_name',
      width: '20rem',
      options: [],
    },
    {
      tag: 'Input',
      label: 'Date start',
      name: 'date',
      width: '20rem',
      type: 'date',
    },
  ],
  [
    {
      tag: 'Textarea',
      label: 'Description',
      name: 'note',
      width: '42rem',
      height: '11rem',
      type: 'date',
    },
  ],
  [
    {
      tag: 'Button',
      value: 'Add New Date',
      color: '#272727',
      staticField: true,
    },
    {
      tag: 'Button',
      value: 'Cancel',
      color: '#FF4800',
      staticField: true,
    },
  ],
];

export const validationForm = (Fields) => {
  const keys = Object.keys(Fields);
  for (let index = 0; index < keys.length; index += 1) {
    if (Fields[keys[index]] === '') { return `Please check ${keys[index]}`; }
  }
  return null;
};
