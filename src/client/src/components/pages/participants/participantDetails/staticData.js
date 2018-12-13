import validator from 'validator';
import { getDate, checkNI } from '../../../../helpers';

export const state = {
  surename: '',
  forename: '',
  date_of_birth: '',
  address: '',
  gender: '',
  martial_status: '',
  sexual_orientatuin: '',
  dependents: '',
  ethincity: '',
  nationality: '',
  borough: '',
  postcode: '',
  mobile: '',
  landline: '',
  kin_contact: '',
  email: '',
  ni_number: '',
  support_required: '',
  cscs_number: '',
  cscs_support: '',
  leteracy_level: '',
  case_worker: '',
  numeracy_level: '',
  disability_and_medical: '',
  employment_outcomes: '',
  reoffending: '',
  error: '',
  prisonerId: '',
  loading: true,
};
export const fields = [
  [
    {
      tag: '',
      value: 'empty',
      color: '#272727',
      staticField: true,
    },
    {
      tag: '',
      value: 'empty',
      color: '#FF4800',
      staticField: true,
    },
    {
      tag: '',
      value: 'empty',
      color: '#FF4800',
      staticField: true,
    },
    {
      tag: 'Button',
      value: 'Prison Details',
      display: 'none',
      color: '#FF4800',
      staticField: true,
    },
    {
      tag: 'Button',
      value: 'Follow Up',
      color: '#272727',
      staticField: true,
    },
    {
      tag: 'Button',
      value: 'View Interventions',
      color: '#272727',
      staticField: true,
    },

  ],
  [
    {
      tag: 'Input',
      label: 'Forename',
      name: 'forename',
      width: '20rem',
      placeholder: 'forename',
    },
    {
      tag: 'Input',
      label: 'Surname',
      name: 'surename',
      width: '20rem',
      placeholder: 'surname',
    },
  ],
  [
    {
      tag: 'Input',
      label: 'Date Of Birth',
      name: 'date_of_birth',
      width: '20rem',
      type: 'date',
      placeholder: 'date of birth',
      max: getDate(),
      min: '1920-01-01',
    },
  ],
  [
    {
      tag: 'DropDown',
      label: 'Gender',
      name: 'gender',
      width: '12rem',
      options: ['male', 'female', 'prefer not to say'],
    },
    {
      tag: 'DropDown',
      label: 'Marital Status',
      name: 'martial_status',
      width: '12rem',
      options: ['single', 'married', 'widowed', 'separated', 'divorced', 'cff'],
    },
    {
      tag: 'DropDown',
      label: 'Sexual Orientation ',
      name: 'sexual_orientatuin',
      width: '12rem',
      options: ['lesbian', 'gay', 'bisexual', 'queer', 'straight', 'something else', 'decline to answer'],
    },
  ],
  [
    {
      tag: 'DropDown',
      label: 'Ethnicity ',
      name: 'ethincity',
      width: '20rem',
      placeholder: 'ethnicity',
      options: [
        'Asian or Asian British – Bangladeshi',
        'Mixed – White and Asian',
        'Asian or Asian British – Indian',
        'Mixed - White and Black African',
        'Asian or Asian British – Pakistani',
        'Mixed – White and Black Caribbean',
        'Asian or Asian British – Any other',
        'Mixed - any other mixed background',
        'Black or Black British – African',
        'White – British',
        'Black or Black British – Caribbean',
        'White – Irish',
        'Black or Black British – Any Other',
        'White – Any Other Background',
        'Chinese',
        'Any Other',
        'Not Known or Provided',
      ],
    },
    {
      tag: 'DropDown',
      label: 'Dependents ',
      name: 'dependents',
      width: '20rem',
      placeholder: 'dependents',
      options: ['no dependent', 'from 1 to 5', 'from 5 to 10', 'more than 10'],
    },
  ],
  [
    {
      tag: 'Input',
      label: 'Full Address ',
      name: 'address',
      width: '35rem',
      placeholder: 'full address',
    },
  ],
  [
    {
      tag: 'Input',
      label: 'Nationality ',
      name: 'nationality',
      width: '15rem',
      placeholder: 'nationality',
    },
    {
      tag: 'Input',
      label: 'Borough ',
      name: 'borough',
      width: '15rem',
      placeholder: 'borough',
    },
    {
      tag: 'Input',
      label: 'Postcode ',
      name: 'postcode',
      width: '15rem',
      placeholder: 'postcode',
    },
  ],
  [
    {
      tag: 'Input',
      label: 'Mobile No ',
      name: 'mobile',
      width: '15rem',
      placeholder: 'mobile no',
    },
    {
      tag: 'Input',
      label: 'Landline ',
      name: 'landline',
      width: '15rem',
      placeholder: 'landline',
    },
    {
      tag: 'Input',
      label: 'Next Of Kin Contact',
      name: 'kin_contact',
      width: '15rem',
      placeholder: 'next of kin contact',
    },
  ],
  [
    {
      tag: 'Input',
      label: 'Email Address',
      name: 'email',
      width: '35rem',
    },
  ],
  [
    {
      tag: 'Input',
      label: 'NI No',
      name: 'ni_number',
      width: '15rem',
      placeholder: 'ni no',
    },
    {
      tag: 'DropDown',
      label: 'CSCS No',
      name: 'cscs_number',
      width: '15rem',
      placeholder: 'cscs no',
      options: ['yes', 'no'],
    },
    {
      tag: 'DropDown',
      label: 'CSCS Support ',
      name: 'cscs_support',
      width: '15rem',
      placeholder: 'cscs support',
      options: ['yes', 'no'],
    },
  ],
  [
    {
      tag: 'DropDown',
      label: 'Literacy Level ',
      name: 'leteracy_level',
      width: '15rem',
      placeholder: 'literacy level',
      options: [
        'Entry Level 1',
        'Entry Level 2',
        'Entry Level 3',
        'Level 1',
        'Level 2',
        'GCSE',
        'A-Level',
      ],
    },
    {
      tag: 'Input',
      label: 'Numeracy Level',
      name: 'numeracy_level',
      width: '15rem',
      type: 'number',
      placeholder: 'numeracy level',
    },
  ],
  [
    {
      tag: 'Input',
      label: 'Disability & Medical',
      name: 'disability_and_medical',
      width: '35rem',
      placeholder: 'disability',
    },
  ],
  [
    {
      tag: 'DropDown',
      label: 'Case Worker',
      name: 'case_wroker',
      width: '20rem',
      options: ['jp', 'sr', 'tim', 'cff'],
    },
    {
      tag: 'Input',
      label: 'Support Required',
      name: 'support_required',
      width: '20rem',
      placeholder: 'support required',
    },
  ],
  [
    {
      tag: 'DropDown',
      label: 'Employment Outcomes',
      name: 'employment_outcomes',
      width: '20rem',
      options: ['not employed yet', 'employed'],
    },
    {
      tag: 'DropDown',
      label: 'Reoffending',
      name: 'reoffending',
      width: '20rem',
      options: ['no', 'yes'],
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
    }, {
      tag: 'Button',
      value: 'Download CV',
      color: '#272727',
      staticField: true,
    },

  ],
];


export const validationForm = (Fields) => {
  const requiredFields = [
    'forename',
    'surename',
    'date_of_birth',
    'gender',
    'mobile',
    'email',
    'borough',
  ];
  for (let index = 0; index < requiredFields.length; index += 1) {
    const key = requiredFields[index];
    if (Fields[key] === '') { return `Please check ${key}`; }
  }

  if (!validator.isEmail(Fields.email)) {
    return `${Fields.email} is not a valid email.`;
  }

  if (!checkNI(Fields.ni_number)) { return 'An NI Number should be two letters, six numbers, and a letter'; }
};
