import HomeIcon from "@mui/icons-material/Home";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
//import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "初来ページ",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "プロフィール作成",
    icon: <PersonAddIcon />,
    link: "/profile",
  },
  {
    title: "予約",
    icon: <EditCalendarIcon />,
    link: "/booking",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/",
  },
  {
    title: "動作確認用",
    icon: <CreateIcon />,
    link: "/user",
  },
];
