export const state = {
    surname: "mohanned",
    forename: "al-hanafi",
    username: "mohannadhanafi",
    date: "12/2",
    gender: "Male",
    matrialStatus: "Single"
};
export const fields = [
    [
        {
            tag: "Input",
            label: "Surname",
            name: "surname",
            width: "20rem",
            placeholder: "surname",
        },
        {
            tag: "Input",
            label: "Forename",
            name: "forename",
            width: "20rem",
            placeholder: "forename",
        }
    ],
    [
        {
            tag: "Input",
            label: "username",
            name: "username",
            width: "20rem",
            placeholder: "username",
        },
        {
            tag: "Input",
            label: "Day Of Birth",
            name: "date",
            width: "20rem",
            type: "date",
        }
    ],
    [
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "22rem",
            options: ["Male", "Female"],
        },
        {
            tag: "DropDown",
            label: "Matrial Status ",
            name: "matrialStatus",
            width: "22rem",
            options: ["Single", "Married"],
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