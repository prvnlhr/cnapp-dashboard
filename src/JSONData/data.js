export const categories = [
  {
    id: "1",
    name: "CSPM Executive Dashboard",
    widgets: [
      {
        id: "1-1",
        title: "Cloud Accounts",
        type: "gauge",
        dataEndpoint: "/api/cspm/compliance-overview",
        size: "small",
      },
      {
        id: "1-2",
        title: "Cloud Account Risk Assessment",
        type: "table",
        columns: ["Policy", "Severity", "Last Detected"],
        dataEndpoint: "/api/cspm/top-violations",
        size: "large",
      },
      {
        id: "1-3",
        title: "Risk Posture by Cloud Provider",
        type: "chart",
        chartType: "bar",
        dataEndpoint: "/api/cspm/risk-posture",
        size: "medium",
      },
    ],
  },
  {
    id: "2",
    name: "CWPP Dashboard",
    widgets: [
      {
        id: "2-1",
        title: "Top 5 Namespace Specific Alerts",
        type: "gauge",
        dataEndpoint: "/api/cwpp/security-status",
        size: "small",
      },
      {
        id: "2-2",
        title: "Workload Alerts",
        type: "table",
        columns: ["Vulnerability", "Severity", "Affected Instances"],
        dataEndpoint: "/api/cwpp/top-vulnerabilities",
        size: "large",
      },
    ],
  },
  {
    id: "3",
    name: "Registry Scan",
    widgets: [
      {
        id: "3-1",
        title: "Image Risk Assessments",
        type: "chart",
        chartType: "bar",
        dataEndpoint: "/api/registry-scan/vulnerability-summary",
        size: "medium",
      },
      {
        id: "3-2",
        title: "Image Security Issues",
        type: "table",
        columns: ["Image", "Vulnerabilities", "Last Scanned"],
        dataEndpoint: "/api/registry-scan/most-vulnerable",
        size: "large",
      },
    ],
  },
  {
    id: "4",
    name: "Ticket Dashboard",
    widgets: [
      {
        id: "4-1",
        title: "Open Tickets",
        type: "table",
        columns: ["Ticket ID", "Status", "Priority", "Last Updated"],
        dataEndpoint: "/api/ticket/open-tickets",
        size: "large",
      },
      {
        id: "4-2",
        title: "Ticket Resolution Time",
        type: "chart",
        chartType: "line",
        dataEndpoint: "/api/ticket/resolution-time",
        size: "medium",
      },
      {
        id: "4-3",
        title: "Tickets by Priority",
        type: "gauge",
        dataEndpoint: "/api/ticket/tickets-by-priority",
        size: "small",
      },
    ],
  },
];
