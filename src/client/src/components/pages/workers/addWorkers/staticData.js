export const state = {
    surname: "",
    forename: "",
    username: "",
    date: "",
    gender: "Male",
    matrialStatus: "Single",
    email: "",
};
export const fields = [
    [
        {
            tag: "Input",
            label: "Surname",
            name: "surname",
            width: "20rem",
            placeholder: "surname"
        },
        {
            tag: "Input",
            label: "Forename",
            name: "forename",
            width: "20rem",
            placeholder: "forename"
        }
    ],
    [
        {
            tag: "Input",
            label: "username",
            name: "username",
            width: "20rem",
            placeholder: "username"
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
            options: ["Male", "Female"]
        },
        {
            tag: "DropDown",
            label: "Matrial Status ",
            name: "matrialStatus",
            width: "22rem",
            options: ["Single", "Married"]
        }
    ],
    [
        {
            tag: 'Button',
            value: "Add Worker",
            staticField: true,
            color: "#272727",
        },
        {
            tag: 'Button',
            value: "Clear Fields",
            staticField: true,
            color: "#FF4800",
        }
    ]
];

export const validationForm = (fields) => {
    for (const key in fields) {
        if (fields[key] === "")
            return `Please Check ${key}`;
    }
}