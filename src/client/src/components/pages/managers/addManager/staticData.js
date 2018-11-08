export const state = {
    surname: "",
    forename: "",
    username: "",
    date: "",
    gender: "Male",
    matrialStatus: "Single",
    email: "",
    address: "",
    postcode: "",
    mobile: "",
    landline: "",
    password: "",
    confirmPassword: ""
};
export const fields = [
    [{
            tag: "Input",
            label: "Surname",
            name: "surname",
            width: "150px",
            placeholder: "surname"
        },
        {
            tag: "Input",
            label: "Forename",
            name: "forename",
            width: "150px",
            placeholder: "forename"
        },
        {
            tag: "Input",
            label: "Username",
            name: "username",
            width: "150px",
            placeholder: "type username"
        }
    ],
    [
        {
            tag: "Input",
            label: "Day Of Birth",
            name: "date",
            width: "150px",
            type: "date",
        },
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "150px",
            options: ["Male", "Female"]
        },
        {
            tag: "DropDown",
            label: "Martial Status",
            name: "status",
            width: "150px",
            options: ["single", "married"]
        }
    ],
    [
        {
            tag: "Input",
            label: "Email Adress",
            name: "email",
            width: "400px",
            placeholder: "type email adress"
        }
    ],
    [
        {
            tag: "Input",
            label: "Full Address",
            name: "address",
            width: "400px",
            placeholder: "type full adress"
        },
        {
            tag: "Input",
            label: "postcode",
            name: "postcode",
            width: "100px",
            placeholder: "postcode"
        }
    ],
    [
        {
            tag: "Input",
            label: "Mobile Number",
            name: "Mobile",
            width: "100px",
            placeholder: "Mobile Number"
        },
        {
            tag: "Input",
            label: "Land line",
            name: "landline",
            width: "100px",
            placeholder: "Land Line"
        }
    ],
    [
        {
            tag: "Input",
            label: "Password",
            placeholder:'password',
            name: "password",
            width: "300px",
            type: "password",
        },
        {
            tag: "Input",
            label: "Confirm Password",
            placeholder: "password",
            name: "confirmPassword",
            width: "300px",
            type: "password",
        }
    ],
    [
        {
            tag: "Button",
            value: "Add manager",
            staticField: true
        },
        {
            tag: 'Button',
            value: "Clear Fields",
            color: "red",
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