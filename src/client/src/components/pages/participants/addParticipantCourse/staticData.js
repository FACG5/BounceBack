export const state = {
  course_start: '',
  course_end: '',
  course_name: '',
  type: 'trainings',
};
export const fields = [
  [{
    tag: 'DropDown',
    label: 'Name',
    name: 'course_name',
    width: '40rem',
    options: [],
  },
  ],
  [
    {
      tag: 'Input',
      label: 'Start',
      name: 'course_start',
      width: '20rem',
      type: 'date',
    },
    {
      tag: 'Input',
      label: 'End',
      name: 'course_end',
      width: '20rem',
      type: 'date',
    },
  ],
  [
    {
      tag: 'Button',
      value: 'Add Intervention',
      color: '#272727',
      staticField: true,
    },
    {
      tag: 'Button',
      value: 'Back',
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
