export const state = {
    surname: "",
    forename: "",
    username: "",
    date: "",
    gender: "",
    matrialStatus: "",
    email: "",
};
export const fields = [
    [
        {
            tag: "Input",
            label: "Surname",
            name: "surname",
            width: "20rem",
            placeholder: "surname",
            value: "mohanned"
        },
        {
            tag: "Input",
            label: "Forename",
            name: "forename",
            width: "20rem",
            placeholder: "forename",
            value: "al-hanafi",
        }
    ],
    [
        {
            tag: "Input",
            label: "username",
            name: "username",
            width: "20rem",
            placeholder: "username",
            value: "mohannadhanafi",
        },
        {
            tag: "Input",
            label: "Day Of Birth",
            name: "date",
            width: "20rem",
            type: "date",
            value: "12/2/1995",
        }
    ],
    [
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "22rem",
            options: ["Male", "Female"],
            value: "Male"
        },
        {
            tag: "DropDown",
            label: "Matrial Status ",
            name: "matrialStatus",
            width: "22rem",
            options: ["Single", "Married"],
            value: "Single"
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