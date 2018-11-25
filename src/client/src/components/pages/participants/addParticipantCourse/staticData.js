export const state = {
    course_start: "",
    course_end: "",
    details: "",
    enrollment_status: "not stated yet",
    course_name: "",  
};
export const fields = [
    [{
        tag: "DropDown",
        label: "Course Name",
        name: "course_name",
        width: "40rem",
        options: [],
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
        tag: "DropDown",
        label: "Enrollment Status",
        name: "enrollment_status",
        width: "40rem",
        options: [ 'not stated yet', 'started', 'dropped', 'passed', 'failed', 'reset' ]
       },
    ],

    [
        {
            tag: "Textarea",
            label: "Details/ Notes",
            name: "details",
            width: "45rem",
            height: "10rem",
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
