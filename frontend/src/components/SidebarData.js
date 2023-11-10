import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "ユーザ名作成",
    icon: <CreateIcon />,
    link: "/user",
  },
  {
    title: "未定",
    icon: <AssessmentIcon />,
    link: "/useradd",
  },
  {
    title: "未定",
    icon: <PersonAddIcon />,
    link: "/userdelete",
  },
  {
    title: "未定",
    icon: <AddCardIcon />,
    link: "/",
  },
  {
    title: "未定",
    icon: <BackupIcon />,
    link: "/",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/",
  },
];
