export const state = {
    courseName: "",
    category: "",
    startDate: "",
    endDate: "",
    description: ""
};
export const fields = [
    [{
            tag: "Input",
            label: "course name",
            name: "courseName",
            width: "20rem",
            placeholder: "course name"
        },
        {
            tag: "DropDown",
            label: "Course Category",
            name: "category",
            width: "20rem",
            options: ['N/A', 'wawa']
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
            name: "description",
            width: "45rem",
            height: "10rem"
        }
    ],
    [
        {
        tag: 'Button',
        value: "Add Course",
        staticField: true,
        color: "#272727",
    },
    {
        tag: 'Button',
        value: "Clear Fields",
        staticField: true,
        color: "#FF4800",
    }
    ]
];
export const validationForm = (fields) => {
    for (const key in fields) {
        if (fields[key] === "")
            return `Please Check ${key}`;
    }
}