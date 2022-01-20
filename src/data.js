// Arrow characters to use: ▼ ▶ •

/* The task is to use the data returned from the fetchdata function
  to build a dynamic tree component that can display Pages like this

  • Office Map
  ▼ New Employee Onboarding
    • Onboarding Materials
    • Training
  ▼ Office Events
    ▼ 2018
      • Summer Picnic
      • Valentine's Day Party
      • New Year's Party
    ▼ 2017
      • Company Anniversary Celebration
  • Public Holidays
  • Vacations and Sick Leaves

  To start - Dynamically show the pages at the top level

*/

const backendData = [
  {
    id: "1",
    name: "Office Map"
  },
  {
    id: "2",
    name: "New Employee Onboarding",
    children: [
      {
        id: "8",
        name: "Onboarding Materials"
      },
      {
        id: "9",
        name: "Training"
      }
    ]
  },
  {
    id: "3",
    name: "Office Events",
    children: [
      {
        id: "6",
        name: "2018",
        children: [
          {
            id: "10",
            name: "Summer Picnic"
          },
          {
            id: "11",
            name: "Valentine's Day Party"
          },
          {
            id: "12",
            name: "New Year's Party"
          }
        ]
      },
      {
        id: "7",
        name: "2017",
        children: [
          {
            id: "13",
            name: "Company Anniversary Celebration"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Public Holidays"
  },
  {
    id: "5",
    name: "Vacations and Sick Leaves"
  }
];

export default function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });
}
