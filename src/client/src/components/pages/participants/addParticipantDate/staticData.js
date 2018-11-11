export const state = {
    dateName: "",
    dateId: "",
    startDate: "",
    endDate: ""
};
export const fields = [
    [{
            tag: "Input",
            label: "Date Name",
            name: "dateName",
            width: "20rem",
            placeholder: "date name"
        },
        {
            tag: "Input",
            label: "Date ID",
            name: "dateId",
            width: "20rem",
            placeholder: "date ID"
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
