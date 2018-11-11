export const state = {
    utrNo: "",
    prison: "",
    prisonNo: "",
    officerName: "",
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
          label: "Probation officer name",
          name: "officerName",
          width: "35rem",
          placeholder: "Probation officer name"
  
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
          staticField: true
      }, {
          tag: 'Button',
          value: "Cancel",
          color: "#FF4800",
          staticField: true
      }, ]
  ];
  
  export const validationForm = fields => {
    for (const key in fields) {
      if (fields[key] === "") return `Please Check ${key}`;
    }
  };
  