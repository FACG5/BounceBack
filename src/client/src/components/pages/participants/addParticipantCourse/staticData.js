export const state = {
    courseName: "",
    startDate: "",
    endDate: ""
};
export const fields = [
    [{
        tag: "DropDown",
        label: "Course Name",
        name: "courseName",
        width: "40rem",
        options: [  'Level 2 Diploma in Scaffolding', 
                    'Level 1 Certificate in Construction Skills (Painting & Decorating)',
                    'Level 2 Certificate in Preparation and Application of Paint Systems',
                    'Level 2 Diploma in Dry Lining',
                    'Level 1 Award in Construction Skills (Painting and Decorating)',
                    'Level 1 Award in  Employability',
                    'CSCS Card',
                ]
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
        tag: 'Button',
        value: "Add Course",
        color: "#272727",
        staticField: true
    },
    {
        tag: 'Button',
        value: "Cancel",
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
