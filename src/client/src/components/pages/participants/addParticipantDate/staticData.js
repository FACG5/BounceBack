export const state = {
    participantName: "",
    workerName: "",
    startDate: "",
    endDate: ""
};
export const fields = [
    [{
            tag: "Input",
            label: "Participant Name",
            name: "participantName",
            width: "20rem",
            placeholder: "Participant Name"
        },
        {
            tag: "Input",
            label: "Worker Name",
            name: "workerName",
            width: "20rem",
            placeholder: "Worker Name"
        }
    ],
    [
        {
            tag: "Input",
            label: "Date start",
            name: "startDate",
            width: "20rem",
            type: "date",
        },
        {
            tag: "Input",
            label: "Date end",
            name: "endDate",
            width: "20rem",
            type: "date",
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
