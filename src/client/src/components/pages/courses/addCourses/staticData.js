export const state = {
  course_name: "",
  type: "trainings",
  course_start: "",
  course_end: "",
  description: "",
  category: "Referral"
};
export const fields = [
  [
    {
      tag: "Input",
      label: "Intervention Name",
      name: "course_name",
      width: "20rem",
      placeholder: "intervention name"
    },
    {
      tag: "DropDown",
      label: "Intervention Type",
      name: "type",
      width: "20rem",
      options: ["trainings", "pastoral"]
    }
  ],
  [
    {
      tag: "DropDown",
      label: "Category",
      name: "category",
      width: "42rem",
      options: [
        "Referral",
        "Further Training",
        "Employment Engagement",
        "Phone Call",
        "Mentoring",
        "Interview Skills",
        "CV writing",
        "Probation Advocacy",
        "Self Employment workshops",
        "UTR Registration"
      ]
    }
  ],
  [
    {
      tag: "Input",
      label: "Intervention Start",
      name: "course_start",
      width: "20rem",
      type: "date"
    },
    {
      tag: "Input",
      label: "Intervention End",
      name: "course_end",
      width: "20rem",
      type: "date"
    }
  ],
  [
    {
      tag: "Textarea",
      label: "Description",
      name: "description",
      width: "42rem",
      height: "10rem"
    }
  ],
  [
    {
      tag: "Button",
      value: "Add Intervention",
      staticField: true,
      color: "#272727"
    },
    {
      tag: "Button",
      value: "Clear Fields",
      staticField: true,
      color: "#FF4800"
    }
  ]
];
export const validationForm = fields => {
  for (const key in fields) {
    if (fields[key] === "") return `Please Check ${key}`;
  }
};
