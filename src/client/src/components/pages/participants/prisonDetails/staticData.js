export const state = {
    utrNo: "",
    prison: "",
    prisonNo: "",
    username: "",
    prisonIn: "",
    prisonRelease: "",
    rotlHdc: "",
    offence: "",
    prisonPointOfContact: ""
  };
  export const fields = [
      [{
              tag: "Input",
              label: "UTR. No",
              name: "utrNo",
              width: "15rem",
              placeholder: "UTR. No"
          },
          {
              tag: "Input",
              label: "Prison",
              name: "prison",
              width: "15rem",
              placeholder: "prison"
  
          },
          {
            tag: "Input",
            label: "Prison No",
            name: "prisonNo",
            width: "15rem",
            placeholder: "prison No"
    
        }
      ],
      [{
          tag: "Input",
          label: "User Name",
          name: "username",
          width: "35rem",
          placeholder: "username"
  
      }],
      
      [{
              tag: "Input",
              label: "Prison In",
              name: "prisonIn",
              width: "15rem",
              type: "date",
  
          },
          {
              tag: "Input",
              label: "Prison Release",
              name: "prisonRelease",
              width: "15rem",
              type: "date",
          },
          {
              tag: "Input",
              label: "ROTL/HDC",
              name: "rotlHdc",
              width: "15rem",
              placeholder: "ROTL/HDC"
          }
      ],
      [{
          tag: "Input",
          label: "Offence",
          name: "offence",
          width: "20rem",
          placeholder: "offence"
  
      },
      {
        tag: "Input",
        label: "Prison Point Of Contact",
        name: "prisonPointOfContact",
        width: "20rem",
        placeholder: "prison point of contact"

    }],
      [{
          tag: 'Button',
          value: "Add Prison Details",
          color: "#272727",
      }, {
          tag: 'Button',
          value: "Clear Fields",
          color: "#FF4800",
      },
      {
        tag: 'Button',
        value: "Cancle",
        color: "#272727ab",
    }, ]
  ];
  
  export const validationForm = fields => {
    for (const key in fields) {
      if (fields[key] === "") return `Please Check ${key}`;
    }
  };
  