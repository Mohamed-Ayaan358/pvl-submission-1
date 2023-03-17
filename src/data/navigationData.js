import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PostAdd,
} from "@material-ui/icons";

export const mainNavigation = [
  {
    name: "My reports",
    icon: Dashboard,
    url: `/dashboard`,
    navigationData: [
      {
        name: "My dashboard",
        icon: MenuBook,
        url: `/posts/all`,
      },
      {
        name: "Skillwise data",
        icon: PostAdd,
        url: `/posts/editor`,
      },
      {
        name: "View Schedule",
        icon: MenuBook,
        url: `/posts/all`,
      },
    ],
  },
  {
    name: "Assessments",
    icon: Dashboard,
    url: `/dashboard`,
    navigationData: [
      {
        name: "Explore skills",
        icon: MenuBook,
        url: `/posts/all`,
      },
      {
        name: "Placement tests",
        icon: PostAdd,
        url: `/posts/editor`,
      },
      {
        name: "Pre assessment",
        icon: MenuBook,
        url: `/posts/all`,
      },
    ],
  },
  {
    name: "Organization",
    icon: Dashboard,
    url: `/dashboard`,
    navigationData: [
      {
        name: "Assign skills",
        icon: MenuBook,
        url: `/posts/all`,
      },
      {
        name: "Manage students",
        icon: PostAdd,
        url: `/posts/editor`,
      },
      {
        name: "Report",
        icon: MenuBook,
        url: `/posts/all`,
      },
    ],
  },

];
