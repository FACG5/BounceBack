export const state = {
    surename: "",
    forename: "",
    username: "",
    date_of_birth: "",
    gender: "",
    martial_status: "",
    loading: true
};
export const fields = [
    [
        {
            tag: "Input",
            label: "Surname",
            name: "surename",
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
            label: "Date of Birth",
            name: "date_of_birth",
            width: "20rem",
            type: "date",
        }
    ],
    [
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "20rem",
            options: ["male", "female"],
        },
        {
            tag: "DropDown",
            label: "Matrial Status ",
            name: "martial_status",
            width: "20rem",
            options: ["single", "married", "widowed", "separated", "divorced", "cff"],
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