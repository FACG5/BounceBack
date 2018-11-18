export const state = {
    courseName: "",
    category: "",
    startDate: "",
    endDate: "",
    desc: "",
};
export const fields = [
    [{
            tag: "Input",
            label: "course name",
            name: "courseName",
            width: "20rem",
            placeholder: "course name",
        },
        {
            tag: "DropDown",
            label: "Course Category",
            name: "category",
            width: "20rem",
            options: ['level 1', 'level 2', 'cscs'],
        }
    ],
    [
        {
            tag: "Input",
            label: "Course start",
            name: "startDate",
            width: "20rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "Course end",
            name: "endDate",
            width: "20rem",
            type: "date",
        }
    ],
    [
        {
            tag: "Textarea",
            label: "Description",
            name: "desc",
            width: "45rem",
            height: "10rem",
      }
    ],
    [
        {
        tag: 'Button',
        value: "Edit & Save",
        color: "#272727",
        staticField: true
    },
    {
        tag: 'Button',
        value: "Back",
        color: "#FF4800",
        staticField: true
    }
    ]
];
export const validationForm = (fields) => {
    for (const key in fields) {
        if (fields[key] === "")
            return `Please Check ${key}`;
    }
}
