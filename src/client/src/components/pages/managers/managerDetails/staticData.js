export const state = {
    surname: "",
    forename: "",
    username: "",
    date: "",
    gender: "",
    matrialStatus: "",
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
            width: "15rem",
            placeholder: "surname",
            value: "mohanned"
        },
        {
            tag: "Input",
            label: "Forename",
            name: "forename",
            width: "15rem",
            placeholder: "forename",
            value: "al-hanafi"
        },
        {
            tag: "Input",
            label: "Username",
            name: "username",
            width: "15rem",
            placeholder: "type username",
            value: "mohannadhanafi"
        }
    ],
    [
        {
            tag: "Input",
            label: "Day Of Birth",
            name: "date",
            width: "15rem",
            type: "date",
            value: "23/2/1995"
        },
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "15rem",
            options: ["Male", "Female"],
            value: "Male"
        },
        {
            tag: "DropDown",
            label: "Martial Status",
            name: "status",
            width: "15rem",
            options: ["single", "married"],
            value: "Single"
        }
    ],
    [
        {
            tag: "Input",
            label: "Email Adress",
            name: "email",
            width: "35rem",
            placeholder: "type email adress",
            value: "mohannad@gmail.com"
        }
    ],
    [
        {
            tag: "Input",
            label: "Full Address",
            name: "address",
            width: "35rem",
            placeholder: "type full adress",
            value: "khan-younis"
        },
        {
            tag: "Input",
            label: "postcode",
            name: "postcode",
            width: "15rem",
            placeholder: "postcode",
            value: "00970"
        }
    ],
    [
        {
            tag: "Input",
            label: "Mobile Number",
            name: "Mobile",
            width: "20rem",
            placeholder: "Mobile Number",
            value: "0591234567"
        },
        {
            tag: "Input",
            label: "Land line",
            name: "landline",
            width: "20rem",
            placeholder: "Land Line",
            value: "082134569"
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
            value: "123123"
        },
        {
            tag: "Input",
            label: "Confirm Password",
            placeholder: "password",
            name: "confirmPassword",
            width: "20rem",
            type: "password",
            value: "123123"
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
