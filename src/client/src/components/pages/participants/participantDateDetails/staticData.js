export const state = {
    worker_name: "",
    date: "",
    note: ""
};
export const fields = [
    [{
        tag: "Input",
        label: "worker Name",
        name: "worker_name",
        width: "20rem",
        placeholder: "date Id",
    },
    {
        tag: "Input",
        label: "Date:",
        name: "date",
        width: "20rem",
        type: "date",
    },
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
