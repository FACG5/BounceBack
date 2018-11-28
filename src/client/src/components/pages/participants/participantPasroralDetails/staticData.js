export const state = {
    course_start: "",
    course_end: "",
    details: "",
    course_name: "",
    loading: true
};
export const fields = [
    [{
        tag: "Input",
        label: "Name",
        name: "course_name",
        width: "40rem",
        placeholder: "course name",
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
            tag: "Textarea",
            label: "Details/ Notes (optional)",
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
