export const state = {
    surname: "",
    forename: "",
    fullname: "",
    date: "",
    gender: "Male",
    matrialStatus: "Single",
    sexualOrientation: "Normal",
    dependents: "",
    ethnicity: "",
    address: "",
    nationality: "",
    borough: "",
    postcode: "",
    mobile: "",
    landline: "",
    nextMobile: "",
    email: "",
    ni: "",
    als: "",
    cscsNo: "",
    cscsSupport: "",
    caseWroker: "",
    literacy: "",
    numeracy: "",
    disability: "",
    error: ""
};
export const fields = [
    [{
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
    [{
        tag: "Input",
        label: "fullname",
        name: "fullname",
        width: "35rem",
        placeholder: "fullname"

    }],
    [{
            tag: "Input",
            label: "Day Of Birth",
            name: "date",
            width: "15rem",
            type: "date",

        },
        {
            tag: "DropDown",
            label: "Gender",
            name: "gender",
            width: "10rem",
            options: ["Male", "Female"]
        },
        {
            tag: "DropDown",
            label: "Matrial Status ",
            name: "matrialStatus",
            width: "10rem",
            options: ["Single", "Married"]
        },
        {
            tag: "DropDown",
            label: "Sexual Orientation ",
            name: "sexualOrientation",
            width: "10rem",
            options: ["Normal", "Gay"]
        }
    ],
    [{
            tag: "Input",
            label: "Ethnicity ",
            name: "ethnicity",
            width: "15rem",
            placeholder: "ethnicity"

        },
        {
            tag: "Input",
            label: "Dependents ",
            name: "dependents",
            width: "20rem",
            placeholder: "dependents"
        }
    ],
    [{
        tag: "Input",
        label: "Full Address ",
        name: "address",
        width: "25rem",
        placeholder: "full address"

    }],
    [{
            tag: "Input",
            label: "Nationality ",
            name: "nationality",
            width: "20rem",
            placeholder: "nationality"

        },
        {
            tag: "Input",
            label: "Borough ",
            name: "borough",
            width: "20rem",
            placeholder: "borough"

        },
        {
            tag: "Input",
            label: "Postcode ",
            name: "postcode",
            width: "5rem",
            placeholder: "postcode"

        }
    ],
    [{
            tag: "Input",
            label: "Mobile No ",
            name: "mobile",
            width: "15rem",
            placeholder: "mobile no"

        },
        {
            tag: "Input",
            label: "Landline ",
            name: "landline",
            width: "15rem",
            placeholder: "landline"

        },
        {
            tag: "Input",
            label: "Next Of Kin Contact",
            name: "nextMobile",
            width: "15rem",
            placeholder: "next of kin contact"

        }
    ],
    [{
        tag: "Input",
        label: "Email Address",
        name: "email",
        width: "30rem"
    }, ],
    [{
            tag: "Input",
            label: "NI No",
            name: "ni",
            width: "10rem",
            placeholder: "ni no"

        },
        {
            tag: "Input",
            label: "ALS",
            name: "als",
            width: "10rem",
            placeholder: "als"

        },
        {
            tag: "Input",
            label: "CSCS No",
            name: "cscsNo",
            width: "10rem",
            placeholder: "cscs no"

        },
        {
            tag: "Input",
            label: "CSCS Support ",
            name: "cscsSupport",
            width: "10rem",
            placeholder: "cscs support"

        }
    ],
    [{
            tag: "Input",
            label: "Case Worker",
            name: "caseWroker",
            width: "20rem",
            placeholder: "case worker"

        },
        {
            tag: "Input",
            label: "Literacy Level ",
            name: "literacy",
            width: "15rem",
            placeholder: "literacy"

        },
        {
            tag: "Input",
            label: "Numeracy Level",
            name: "numeracy",
            width: "15rem",
            placeholder: "numeracy level"

        },

    ],
    [{
        tag: "Input",
        label: "Disability & Medical",
        name: "disability",
        width: "30rem",
        placeholder: "disability"

    }, ],
    [{
        tag: 'Button',
        value: "Add Participant",
    }, {
        tag: 'Button',
        value: "Clear Fields",
        color: "red",
    }, ]
];

export const validationForm = (fields) => {
    console.log('fields ', fields);
    for (const key in fields) {
        if (fields[key] === "")
            return `Please Check ${key}`;
    }
}