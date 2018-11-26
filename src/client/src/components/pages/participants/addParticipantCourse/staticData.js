export const state = {
    course_start: "",
    course_end: "",
    course_name: "",  
};
export const fields = [
    [{
        tag: "DropDown",
        label: "Name",
        name: "course_name",
        width: "40rem",
        options: [],
    }
    ],
    [
        {
            tag: "Input",
            label: "Start",
            name: "course_start",
            width: "20rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "End",
            name: "course_end",
            width: "20rem",
            type: "date",
        }
    ],
    [
    {
        tag: 'Button',
        value: "Add Intervention",
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
