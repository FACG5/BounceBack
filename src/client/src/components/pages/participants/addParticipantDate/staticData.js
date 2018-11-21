export const state = {
    worker_name: "",
    date: "",
    note: ""
};
export const fields = [
    [
        {
            tag: "Input",
            label: "Worker Name",
            name: "worker_name",
            width: "20rem",
            placeholder: "Worker Name"
        },
        {
            tag: "Input",
            label: "Date",
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
            width: "42rem",
            height: "10rem"
        }
    ],
    [
        {
            tag: 'Button',
            value: "Add New Date",
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
