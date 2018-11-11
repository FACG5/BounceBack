export const state = {
    dateName: "special date",
    dateId: "112",
    startDate: "",
    endDate: "",
    note: "GOING TO THE CLINK TO SEE GG - WENT TO THE CLINK, AS GG WAS THERE. DISCUSSED MY SUPPORT AND HE WAS HAPPY TO SEE ME."
};
export const fields = [
    [{
            tag: "Input",
            label: "Date Name",
            name: "dateName",
            width: "20rem",
            placeholder: "date name",
        },
        {
            tag: "Input",
            label: "Date ID",
            name: "dateId",
            width: "20rem",
            placeholder: "date Id",
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
