export const state = {
  utr_number: "",
  prison_name: "",
  prison_number: "",
  officer_name: "",
  prison_in: "",
  prison_release: "",
  rotl_hdc: "",
  offence: "",
  point_of_contact: ""
};
export const fields = [
  [
    {
      tag: "Input",
      label: "UTR. No.",
      name: "utr_number",
      width: "15rem",
      placeholder: "UTR. No",
      type: "number"
    },
    {
      tag: "Input",
      label: "Prison",
      name: "prison_name",
      width: "15rem",
      placeholder: "prison"
    },
    {
      tag: "Input",
      label: "Prison No",
      name: "prison_number",
      width: "15rem",
      placeholder: "prison number",
      type: "number"
    }
  ],
  [
    {
      tag: "Input",
      label: "Probation officer name",
      name: "officer_name",
      width: "35rem",
      placeholder: "probation officer name"
    }
  ],

  [
    {
      tag: "Input",
      label: "Length of Sentence",
      name: "prison_in",
      width: "15rem",
      type: "number"
    },
    {
      tag: "Input",
      label: "Prison Release",
      name: "prison_release",
      width: "15rem",
      type: "date"
    },
    {
      tag: "Input",
      label: "ROTL/HDC",
      name: "rotl_hdc",
      width: "15rem",
      placeholder: "ROTL / HDC"
    }
  ],
  [
    {
      tag: "Input",
      label: "Offence",
      name: "offence",
      width: "20rem",
      placeholder: "offence"
    },
    {
      tag: "Input",
      label: "Prison Point Of Contact",
      name: "point_of_contact",
      width: "20rem",
      placeholder: "prison point of contact"
    }
  ],
  [
    {
      tag: "Button",
      value: "Add Prison Details",
      color: "#272727",
      staticField: true
    },
    {
      tag: "Button",
      value: "Cancel",
      color: "#FF4800",
      staticField: true
    }
  ]
];

export const validationForm = fields => {
  for (const key in fields) {
    if (fields[key] === "") return `Please Check ${key}`;
  }
};
