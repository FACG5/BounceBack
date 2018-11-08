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
            width: "10rem",
            options: ['N/A', 'wawa']
        }
    ],
    [
        {
            tag: "Input",
            label: "Course start",
            name: "startDate",
            width: "15rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "Course end",
            name: "endDate",
            width: "15rem",
            type: "date",
        }
    ],
    [
        {
            tag: "Textarea",
            label: "Description",
            name: "description",
            width: "15rem",
        }
    ],
    [
        {
        tag: 'Button',
        value: "Add Participant",
    },
    {
        tag: 'Button',
        value: "Clear Fields",
        color: "red",
    }
    ]
];

export const validationForm = (fields) => {
    for (const key in fields) {
        if (fields[key] === "")
            return `Please Check ${key}`;
    }
}