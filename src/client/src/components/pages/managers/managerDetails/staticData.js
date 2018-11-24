export const state = {
    surname: "",
    forename: "",
    fullname: "",
    username: "",
    date_of_birth: "",
    gender: "",
    martial_status: "",
    email: "",
    full_address: "",
    postcode: "",
    mobile: "",
    landline: "",
    password: "",
    confirmPassword: "",
    loading: true
};
export const fields = [
    [{
            tag: "Input",
            label: "Surname",
            name: "surname",
            width: "15rem",
            placeholder: "surname",
        },
        {
            tag: "Input",
            label: "Forename",
            name: "forename",
            width: "15rem",
            placeholder: "forename",
        },
        {
            tag: "Input",
            label: "Username",
            name: "username",
            width: "15rem",
            placeholder: "type username",
        }
    ],
    [
        {
            tag: "Input",
            label: "Day Of Birth",
            name: "date_of_birth",
            width: "15rem",
            type: "date",
        },
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "15rem",
            options: ["male", "female"],
        },
        {
            tag: "DropDown",
            label: "Martial Status",
            name: "martial_status",
            width: "15rem",
            options: ["single", "married"],
        }
    ],
    [
        {
            tag: "Input",
            label: "Email Adress",
            name: "email",
            width: "35rem",
            placeholder: "type email adress",
        }
    ],
    [
        {
            tag: "Input",
            label: "Full Address",
            name: "full_address",
            width: "35rem",
            placeholder: "type full adress",
        },
        {
            tag: "Input",
            label: "postcode",
            name: "postcode",
            width: "15rem",
            placeholder: "postcode",
        }
    ],
    [
        {
            tag: "Input",
            label: "Mobile Number",
            name: "mobile",
            width: "20rem",
            placeholder: "Mobile Number",
        },
        {
            tag: "Input",
            label: "Land line",
            name: "landline",
            width: "20rem",
            placeholder: "Land Line",
        }
    ],
    [
        {
            tag: "Input",
            label: "Password",
            placeholder:'password',
            name: "password",
            width: "20rem",
            type: "password",
        },
        {
            tag: "Input",
            label: "Confirm Password",
            placeholder: "password",
            name: "confirmPassword",
            width: "20rem",
            type: "password",
        }
    ],
    [
        {
            tag: "Button",
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
