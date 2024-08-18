export const generateObjectId = () => {
  return [...Array(24)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
};

export const categories = [
  {
    id: generateObjectId(),
    name: "CSPM Executive Dashboard",
    shortName: "CSPM",
    widgets: [
      {
        id: generateObjectId(),
        name: "Cloud Accounts",
        status: true,
        text: "This is a gauge widget showing cloud accounts.",
      },
      {
        id: generateObjectId(),
        name: "Cloud Account Risk Assessment",
        status: false,
        text: "This table widget provides a risk assessment for cloud accounts.",
      },
      {
        id: generateObjectId(),
        name: "Risk Posture by Cloud Provider",
        status: true,
        text: "This bar chart shows the risk posture by cloud provider.",
      },
    ],
  },
  {
    id: generateObjectId(),
    name: "CWPP Dashboard",
    shortName: "CWPP",
    widgets: [
      {
        id: generateObjectId(),
        name: "Top 5 Namespace Specific Alerts",
        status: false,
        text: "Gauge showing top 5 namespace-specific alerts.",
      },
      {
        id: generateObjectId(),
        name: "Workload Alerts",
        status: false,
        text: "Table listing workload alerts with details.",
      },
    ],
  },
  {
    id: generateObjectId(),
    name: "Registry Scan",
    shortName: "Image",
    widgets: [
      {
        id: generateObjectId(),
        name: "Image Risk Assessments",
        status: false,
        text: "Bar chart for image risk assessments.",
      },
      {
        id: generateObjectId(),
        name: "Image Security Issues",
        status: false,
        text: "Table of security issues in images.",
      },
    ],
  },
  {
    id: generateObjectId(),
    name: "Ticket Dashboard",
    shortName: "Ticket",
    widgets: [
      {
        id: generateObjectId(),
        name: "Open Tickets",
        status: false,
        text: "Table of open tickets.",
      },
      {
        id: generateObjectId(),
        name: "Ticket Resolution Time",
        status: false,
        text: "Line chart for ticket resolution time.",
      },
      {
        id: generateObjectId(),
        name: "Tickets by Priority",
        status: false,
        text: "Gauge showing tickets by priority.",
      },
    ],
  },
];
