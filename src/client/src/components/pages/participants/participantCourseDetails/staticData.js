export const state = {
  course_start: '',
  course_end: '',
  details: '',
  enrollment_status: '',
  course_name: '',
  loading: true,
};
export const fields = [
  [{
    tag: 'Input',
    label: 'Name',
    name: 'course_name',
    width: '40rem',
    placeholder: 'course name',
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
      tag: 'DropDown',
      label: 'Enrollment Status',
      name: 'enrollment_status',
      width: '40rem',
      options: ['not completed yet', 'completed'],
    },
  ],

  [
    {
      tag: 'Textarea',
      label: 'Details/ Notes (optional)',
      name: 'details',
      width: '45rem',
      height: '10rem',
    },
  ],
  [
    {
      tag: 'Button',
      value: 'Edit & Save',
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
  const startDate = new Date(Fields.course_start).getTime();
  const endDate = new Date(Fields.course_end).getTime();
  if (startDate > endDate) return 'Please check the start date and the end date';
  return null;
};
