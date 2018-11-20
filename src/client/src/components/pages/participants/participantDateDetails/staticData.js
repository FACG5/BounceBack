export const state = {
    participant_id: "",
    worker_id: "",
    date_start: "",
    date_end: "",
    note: ""
};
export const fields = [
    [{
            tag: "Input",
            label: "Participant_id/name",
            name: "participant_id",
            width: "20rem",
            placeholder: "date name",
        },
        {
            tag: "Input",
            label: "worker_id/name",
            name: "worker_id",
            width: "20rem",
            placeholder: "date Id",
        }
    ],
    [
        {
            tag: "Input",
            label: "Date start",
            name: "date_start",
            width: "20rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "Date end",
            name: "date_end",
            width: "20rem",
            type: "date",
        }
    ],
    [
        {
            tag: "Textarea",
            label: "Note",
            name: "note",
            width: "45rem",
            height: "10rem"
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
