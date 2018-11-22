export const state = {
    course_name: "",
    course_category: "wawa",
    course_start: "",
    course_end: "",
    description: ""
};
export const fields = [
    [{
            tag: "Input",
            label: "Course Name",
            name: "course_name",
            width: "20rem",
            placeholder: "course name"
        },
        {
            tag: "DropDown",
            label: "Course Category",
            name: "course_category",
            width: "20rem",
            options: ['N/A', 'wawa']
        }
    ],
    [
        {
            tag: "Input",
            label: "Course Start",
            name: "course_start",
            width: "20rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "Course End",
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