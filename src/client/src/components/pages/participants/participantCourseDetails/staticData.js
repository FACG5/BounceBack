export const state = {
    course_start: "",
    course_end: "",
    details: "",
    enrollment_status: "",
    employment_outcomes: "",
    course_name: "",  
};
export const fields = [
    [{
        tag: "Input",
        label: "Course Name",
        name: "course_name",
        width: "40rem",
        placeholder: "course name",
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
        width: "20rem",
        options: [ 'not stated yet', 'started', 'dropped', 'passed', 'faild', 'reset' ]
       },
       {
        tag: "DropDown",
        label: "Employment Outcomes",
        name: "employment_outcomes",
        width: "20rem",
        options: [ 'employed' , 'not employed yet']
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
