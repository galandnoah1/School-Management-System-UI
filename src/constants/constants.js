  import {
  Book,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Layers,
  LayoutDashboardIcon,
  Megaphone,
  Settings,
  Shield,
  Users,
} from "lucide-react";

  export const nav_items = [
    {
      icon: LayoutDashboardIcon,
      label: "Acceuil",
      path:"home"
    },
    {
      icon: Users,
      label: "Eleves",
      path:"students"
    },
    {
      icon: Layers,
      label: "Classes",
      path:"classrooms"
    },
    {
      icon: Book,
      label: "Matieres",
      path:"subjects"
    },
    {
      icon: ClipboardList,
      label: "Notes",
      path:"grades"
    },
    {
      icon: FileText,
      label: "Bulletins",
      path:"report-cards"
    },
    {
      icon: Megaphone,
      label: "Annonces",
      path:"announces"
    },
    {
      icon: CreditCard,
      label: "Scolarite",
      path:"fees"
    },
    {
      icon: GraduationCap,
      label: "Enseignants",
      path:"teachers"
    },
    {
      icon: Shield,
      label: "Utilisateurs",
      path:"users"
    },
    {
      icon: Settings,
      label: "Parametres",
      path:"parameters"
    },
  ];

  export const sections = [
    {
      id: "1",
      name: "anglophone",
    },
    {
      id: "2",
      name: "francophone",
    },
  ];

  export const levels = [
    "Tle",
    "P",
    "2nde"
  ]
  export const series = [
    "C",
    "D",
    "A4"
  ]
  export const lv2s = [
    "All",
    "Esp"
  ]
 export const repartitions = ["A", "B"]