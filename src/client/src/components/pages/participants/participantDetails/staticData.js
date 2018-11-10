export const state = {
    surname: "",
    forename: "",
    fullname: "",
    date: "",
    gender: "Male",
    matrialStatus: "Single",
    sexualOrientation: "Normal",
    dependents: "",
    ethnicity: "",
    address: "",
    nationality: "",
    borough: "",
    postcode: "",
    mobile: "",
    landline: "",
    nextMobile: "",
    email: "",
    ni: "",
    als: "",
    cscsNo: "",
    cscsSupport: "",
    caseWroker: "",
    literacy: "",
    numeracy: "",
    disability: "",
    error: ""
  };
  export const fields = [
      [{
              tag: "Input",
              label: "Surname",
              name: "surname",
              width: "20rem",
              placeholder: "surname",
              value: "Mohannad"
          },
          {
              tag: "Input",
              label: "Forename",
              name: "forename",
              width: "20rem",
              placeholder: "forename",
              value: "Al-Hanafi"
          }
      ],
      [{
          tag: "Input",
          label: "fullname",
          name: "fullname",
          width: "35rem",
          placeholder: "fullname",
          value: "Mohannad Al-Hanafi"
      }],
      [{
              tag: "Input",
              label: "Day Of Birth",
              name: "date",
              width: "12rem",
              type: "date",
              value: ''
          },
          {
              tag: "DropDown",
              label: "Gender",
              name: "gender",
              width: "12rem",
              options: ["Male", "Female"],
              value: ''
          },
          {
              tag: "DropDown",
              label: "Matrial Status ",
              name: "matrialStatus",
              width: "12rem",
              options: ["Single", "Married"],
              value: ''
          },
          {
              tag: "DropDown",
              label: "Sexual Orientation ",
              name: "sexualOrientation",
              width: "12rem",
              options: ["Normal", "Gay"],
              value: ''
          }
      ],
      [{
              tag: "Input",
              label: "Ethnicity ",
              name: "ethnicity",
              width: "20rem",
              placeholder: "ethnicity",
              value: "White"
          },
          {
              tag: "Input",
              label: "Dependents ",
              name: "dependents",
              width: "20rem",
              placeholder: "dependents",
              value: "Y"
          }
      ],
      [{
          tag: "Input",
          label: "Full Address ",
          name: "address",
          width: "35rem",
          placeholder: "full address",
          value: "NewYork"
      }],
      [{
              tag: "Input",
              label: "Nationality ",
              name: "nationality",
              width: "15rem",
              placeholder: "nationality",
              value: "Palestinian"
          },
          {
              tag: "Input",
              label: "Borough ",
              name: "borough",
              width: "15rem",
              placeholder: "borough",
              value: "EASTHAM"
          },
          {
              tag: "Input",
              label: "Postcode ",
              name: "postcode",
              width: "15rem",
              placeholder: "postcode",
              value: "E6 6FY"
          }
      ],
      [{
              tag: "Input",
              label: "Mobile No ",
              name: "mobile",
              width: "15rem",
              placeholder: "mobile no",
              value: "0055054840"
          },
          {
              tag: "Input",
              label: "Landline ",
              name: "landline",
              width: "15rem",
              placeholder: "landline",
              value: "21212121"
          },
          {
              tag: "Input",
              label: "Next Of Kin Contact",
              name: "nextMobile",
              width: "15rem",
              placeholder: "next of kin contact",
              value: "202020"
          }
      ],
      [{
          tag: "Input",
          label: "Email Address",
          name: "email",
          width: "35rem",
          value: "aaa@gmail.com"
      }, ],
      [{
              tag: "Input",
              label: "NI No",
              name: "ni",
              width: "12rem",
              placeholder: "ni no",
              value: "54545"
          },
          {
              tag: "Input",
              label: "ALS",
              name: "als",
              width: "10rem",
              placeholder: "als",
              value: '1'
          },
          {
              tag: "Input",
              label: "CSCS No",
              name: "cscsNo",
              width: "10rem",
              placeholder: "cscs no",
              value: "2121"
          },
          {
              tag: "Input",
              label: "CSCS Support ",
              name: "cscsSupport",
              width: "10rem",
              placeholder: "cscs support",
              value: '1'
          }
      ],
      [{
              tag: "Input",
              label: "Case Worker",
              name: "caseWroker",
              width: "15rem",
              placeholder: "case worker",
              value: 'JP'
          },
          {
              tag: "DropDown",
              label: "Literacy Level ",
              name: "literacy",
              width: "15rem",
              options: ['JP', 'SR'],
              value: ''
          },
          {
              tag: "Input",
              label: "Numeracy Level",
              name: "numeracy",
              width: "15rem",
              placeholder: "numeracy level",
              value: '1'
          },
  
      ],
      [{
          tag: "Input",
          label: "Disability & Medical",
          name: "disability",
          width: "35rem",
          placeholder: "disability",
          value: "Heart Attack"
      }, ],
      [
        {
            tag: 'Button',
            value: "Dates",
            color: "#272727",
            staticField: false,
            path: '/participants/dates'
        },
        {
            tag: 'Button',
            value: "Trainings",
            color: "#272727",
            staticField: false,
            path: '/participants/courses'
        }
      ],
      [{
          tag: 'Button',
          value: "edit & save",
          color: "#272727",
          staticField: true,
      }, {
          tag: 'Button',
          value: "Clear Fields",
          color: "#FF4800",
          staticField: true,
      }, ]
  ];
  
  export const validationForm = fields => {
    for (const key in fields) {
      if (fields[key] === "") return `Please Check ${key}`;
    }
  };
  