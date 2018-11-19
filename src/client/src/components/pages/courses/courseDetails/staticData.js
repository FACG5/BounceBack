export const state = {
    course_name: "",
    course_category: "",
    course_start: "",
    course_end: "",
    description: "",
};
export const fields = [
    [{
            tag: "Input",
            label: "course name",
            name: "course_name",
            width: "20rem",
            placeholder: "course name",
        },
        {
            tag: "DropDown",
            label: "Course Category",
            name: "course_category",
            width: "20rem",
            options: ['level 1', 'level 2', 'cscs'],
        }
    ],
    [
        {
            tag: "Input",
            label: "Course start",
            name: "course_start",
            width: "20rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "Course end",
            name: "course_end",
            width: "20rem",
            type: "date",
        }
    ],
    [
        {
            tag: "Textarea",
            label: "Description",
            name: "description",
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
