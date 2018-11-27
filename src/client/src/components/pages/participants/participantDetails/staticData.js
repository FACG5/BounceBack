export const state = {
  surename: "",
  forename: "",
  fullname: "",
  date_of_birth: "",
  address:"",
  gender: "",
  martial_status: "",
  sexual_orientatuin: "",
  dependents: "",
  ethincity: "",
  nationality: "",
  borough: "",
  postcode: "",
  mobile: "",
  landline: "",
  kin_contact:"",
  email: "",
  ni_number: "",
  als: "",
  cscs_number: "",
  cscs_support: "",
  leteracy_level: "",
  case_worker: "",
  numeracy_level: "",
  disability_and_medical: "",
  employment_outcomes: "",
  reoffending: "",
  error: "",
  loading: true
};
export const fields = [
  [
    {
      tag: "",
      value: "empty",
      color: "#272727",
      staticField: true
    },
    {
      tag: "",
      value: "empty",
      color: "#FF4800",
      staticField: true
    },  {
      tag: "Button",
      value: "Followup",
      color: "#272727",
      staticField: true
    },
    {
      tag: "Button",
      value: "View Interventions",
      color: "#272727",
      staticField: true
    }
  ],
  [
    {
      tag: "Input",
      label: "Surname",
      name: "surename",
      width: "20rem",
      placeholder: "surname",
    },
    {
      tag: "Input",
      label: "Forename",
      name: "forename",
      width: "20rem",
      placeholder: "forename",
    }
  ],
  [
    {
      tag: "Input",
      label: "fullname",
      name: "fullname",
      width: "35rem",
      placeholder: "fullname",
    }
  ],
  [
    {
      tag: "Input",
      label: "Date Of Birth",
      name: "date_of_birth",
      width: "20rem",
      type: "date",
      placeholder: "date of birth",
    },
  ],
  [
    {
      tag: "DropDown",
      label: "Gender",
      name: "gender",
      width: "12rem",
      options: ["male", "female"],
    },
    {
      tag: "DropDown",
      label: "Marital Status",
      name: "martial_status",
      width: "12rem",
      options: ["single", "married", "widowed", "separated", "divorced", "cff"],
    },
    {
      tag: "DropDown",
      label: "Sexual Orientation ",
      name: "sexual_orientatuin",
      width: "12rem",
      options: ["normal", "hetero", "lesbian / bisexual", "lesbian","other", "cff"],
    }
  ],
  [
    {
      tag: "Input",
      label: "Ethnicity ",
      name: "ethincity",
      width: "20rem",
      placeholder: "ethnicity",
    },
    {
      tag: "Input",
      label: "Dependents ",
      name: "dependents",
      width: "20rem",
      placeholder: "dependents",
    }
  ],
  [
    {
      tag: "Input",
      label: "Full Address ",
      name: "address",
      width: "35rem",
      placeholder: "full address",
    }
  ],
  [
    {
      tag: "Input",
      label: "Nationality ",
      name: "nationality",
      width: "15rem",
      placeholder: "nationality",
    },
    {
      tag: "Input",
      label: "Borough ",
      name: "borough",
      width: "15rem",
      placeholder: "borough",
    },
    {
      tag: "Input",
      label: "Postcode ",
      name: "postcode",
      width: "15rem",
      placeholder: "postcode",
    }
  ],
  [
    {
      tag: "Input",
      label: "Mobile No ",
      name: "mobile",
      width: "15rem",
      placeholder: "mobile no",
    },
    {
      tag: "Input",
      label: "Landline ",
      name: "landline",
      width: "15rem",
      placeholder: "landline",
    },
    {
      tag: "Input",
      label: "Next Of Kin Contact",
      name: "kin_contact",
      width: "15rem",
      placeholder: "next of kin contact",
    }
  ],
  [
    {
      tag: "Input",
      label: "Email Address",
      name: "email",
      width: "35rem",
    }
  ],
  [
    {
      tag: "Input",
      label: "NI No",
      name: "ni_number",
      width: "12rem",
      placeholder: "ni no",
    },
    {
      tag: "Input",
      label: "ALS",
      name: "als",
      width: "10rem",
      placeholder: "als",
    },
    {
      tag: "Input",
      label: "CSCS No",
      name: "cscs_number",
      width: "10rem",
      placeholder: "cscs no",
    },
    {
      tag: "Input",
      label: "CSCS Support ",
      name: "cscs_support",
      width: "10rem",
      placeholder: "cscs support",
    }
  ],
  [
    {
      tag: "Input",
      label: "Literacy Level ",
      name: "leteracy_level",
      width: "15rem",
      placeholder: "literacy level",
    },
    {
      tag: "DropDown",
      label: "Case Worker",
      name: "case_wroker",
      width: "15rem",
      options: ["jp", "sr", "tim", "cff"],
    },
    {
      tag: "Input",
      label: "Numeracy Level",
      name: "numeracy_level",
      width: "15rem",
      type: "number",
      placeholder: "numeracy level",
    }
  ],
  [
    {
      tag: "Input",
      label: "Disability & Medical",
      name: "disability_and_medical",
      width: "35rem",
      placeholder: "disability",
    }
  ],
  [
    {
      tag: "DropDown",
      label: "Employment Outcomes",
      name: "employment_outcomes",
      width: "15rem",
      options: ["not employed yet", "employed"],
    },
    {
      tag: "DropDown",
      label: "Reoffending",
      name: "reoffending",
      width: "15rem",
      options: ["no", "yes"],
    }
  ],
  [
    {
      tag: "Button",
      value: "Edit & Save",
      color: "#272727",
      staticField: true
    },
    {
      tag: "Button",
      value: "Back",
      color: "#FF4800",
      staticField: true
    },
  
  ]
];


export const validationForm = fields => {
  for (const key in fields) {
    if (fields[key] === "") return `Please Check ${key}`;
  }
};
