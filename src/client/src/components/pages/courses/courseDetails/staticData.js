export const state = {
    courseName: "The Scaffolding Course",
    category: "vocational",
    startDate: "",
    endDate: "",
    description: "With thanks to Alandale who have provided the equipment, and Land Securities who have worked with us to facilitate the course, we are able to offer a further valuable, much sought after construction industry skill."
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
            options: ['vocational', 'other'],
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
            height: "10rem",
            value: "With thanks to Alandale who have provided the equipment, and Land Securities who have worked with us to facilitate the course, we are able to offer a further valuable, much sought after construction industry skill."
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
