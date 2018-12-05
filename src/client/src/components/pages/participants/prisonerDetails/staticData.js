export const state = {
  utr_number: '',
  prison_name: '',
  prison_number: '',
  contact_details: '',
  officer_name: '',
  prison_in: '',
  prison_release: '',
  rotl_hdc: '',
  offence: '',
  point_of_contact: '',
};
export const fields = [
  [{
    tag: 'Input',
    label: 'UTR. No.',
    name: 'utr_number',
    width: '15rem',
    placeholder: 'UTR. No',
  },
  {
    tag: 'Input',
    label: 'Prison',
    name: 'prison_name',
    width: '15rem',
    placeholder: 'prison',

  },
  {
    tag: 'Input',
    label: 'Prison No',
    name: 'prison_number',
    width: '15rem',
    placeholder: 'prison number',

  },
  ],
  [{
    tag: 'Input',
    label: 'Probation officer name',
    name: 'officer_name',
    width: '15rem',
    placeholder: 'probation officer name',
  },
  {
    tag: 'Input',
    label: 'Contact Details',
    name: 'contact_details',
    width: '15rem',
    placeholder: 'probation officer name',
  }],

  [{
    tag: 'Input',
    label: 'Length of Sentence',
    name: 'prison_in',
    width: '15rem',
    type: 'number',
    placeholder: 'Length of Sentence',
  },
  {
    tag: 'Input',
    label: 'Prison Release',
    name: 'prison_release',
    width: '15rem',
    type: 'date',
  },
  {
    tag: 'Input',
    label: 'ROTL/HDC',
    name: 'rotl_hdc',
    width: '15rem',
    placeholder: 'ROTL / HDC',
  },
  ],
  [{
    tag: 'Input',
    label: 'Offence',
    name: 'offence',
    width: '20rem',
    placeholder: 'offence',

  },
  {
    tag: 'Input',
    label: 'Prison Point Of Contact',
    name: 'point_of_contact',
    width: '20rem',
    placeholder: 'prison point of contact',

  },
  {
    tag: 'Input',
    label: 'Prison No',
    name: 'prison_number',
    width: '15rem',
    placeholder: 'prison number',

  },
  ],
  [{
    tag: 'Input',
    label: 'Probation officer name',
    name: 'officer_name',
    width: '15rem',
    placeholder: 'probation officer name',
  },
  {
    tag: 'Input',
    label: 'Contact Details',
    name: 'contact_details',
    width: '15rem',
    placeholder: 'probation officer name',
  }],

  [{
    tag: 'Input',
    label: 'Length of Sentence',
    name: 'prison_in',
    width: '15rem',
    type: 'number',

  },
  {
    tag: 'Input',
    label: 'Prison Release',
    name: 'prison_release',
    width: '15rem',
    type: 'date',
  },
  {
    tag: 'Input',
    label: 'ROTL/HDC',
    name: 'rotl_hdc',
    width: '15rem',
    placeholder: 'ROTL / HDC',
  },
  ],
  [{
    tag: 'Input',
    label: 'Offence',
    name: 'offence',
    width: '20rem',
    placeholder: 'offence',

  },
  {
    tag: 'Input',
    label: 'Prison Point Of Contact',
    name: 'point_of_contact',
    width: '20rem',
    placeholder: 'prison point of contact',

  }],
  [{
    tag: 'Button',
    value: 'Edit & Save',
    color: '#272727',
    staticField: true,
  }, {
    tag: 'Button',
    value: 'Back',
    color: '#FF4800',
    staticField: true,
  }],
];

export const validationForm = (Fields) => {
  const keys = Object.keys(Fields);
  for (let index = 0; index < keys.length; index += 1) {
    if (Fields[keys[index]] === '') { return `Please check ${keys[index]}`; }
  }
  return null;
};
