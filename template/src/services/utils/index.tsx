import {
  CheckCircleIcon,
  CloseCircleIcon,
  DocumentTextIcon,
  MinusCircleIcon,
  RefreshCircleIcon
} from "../../assets/icon/components/solar-line-duotone-icons";

const applicationStatus: {
  value: string | null;
  label: string;
  color: string;
  icon?: any;
  headBackgroundColor: string;
  bodyBackgroundColor: string;
}[] = [
  {
    value: null,
    label: "Barchasi",
    color: "#fff",
    icon: <DocumentTextIcon className={"!text-white"} />,
    headBackgroundColor: "#8A9499",
    bodyBackgroundColor: "#8A949920"
  },
  {
    value: "processing",
    label: "Ko'rib chiqilmoqda",
    color: "#fff",
    icon: <RefreshCircleIcon className={"!text-white"} />,
    headBackgroundColor: "#1890ff",
    bodyBackgroundColor: "#1890ff20"
  },
  {
    value: "approved",
    label: "Tasdiqlangan",
    color: "#fff",

    icon: <CheckCircleIcon className={"!text-white"} />,
    headBackgroundColor: "#52C41A",
    bodyBackgroundColor: "#52C41A20"
  },
  {
    value: "payment_progress",
    label: "To'lov jarayonida",
    color: "#fff",

    icon: <CheckCircleIcon className={"!text-white"} />,
    headBackgroundColor: "#1890ff",
    bodyBackgroundColor: "#1890ff20"
  },
  {
    value: "draft",
    label: "Qoralama",
    color: "#fff",
    icon: <CloseCircleIcon className={"!text-white"} />,
    headBackgroundColor: "#909090",
    bodyBackgroundColor: "#90909020"
  },
  {
    value: "rejected",
    label: "Rad etilgan",
    color: "#fff",
    icon: <CloseCircleIcon className={"!text-white"} />,
    headBackgroundColor: "#ff4d4f",
    bodyBackgroundColor: "#ff4d4f20"
  },
  {
    value: "cancelled",
    label: "Bekor qilingan",
    color: "#fff",
    icon: <MinusCircleIcon className={"!text-white"} />,
    headBackgroundColor: "#1c1919",
    bodyBackgroundColor: "#1c191920"
  }
];

const companyType = [
  {
    value: 1,
    label: "Mahalliy tashkilot"
  },
  {
    value: 2,
    label: "Xalqaro tashkilot"
  }
];

const currencyTypes = [
  {
    value: 0,
    label: "UZS"
  },
  {
    value: 1,
    label: "USD"
  },
  {
    value: 2,
    label: "RUB"
  },
  {
    value: 3,
    label: "EUR"
  },
  {
    value: 4,
    label: "FRANK"
  },
  {
    value: 5,
    label: "FUNT"
  }
];

const genders = [
  {
    label: "Erkak",
    value: "male"
  },
  {
    label: "Ayol",
    value: "female"
  }
];

const applicationTypes = [
  {
    value: 1,
    label: "Eksport"
  },
  {
    value: 2,
    label: "Reeksport"
  }
];

const rentType = [
  {
    label: "Xususiy",
    value: 1
  },
  {
    label: "Ijara",
    value: 2
  }
];

const localGoodsType = [
  {
    label: "Import qilinadigan xomashyo va komplektlar",
    value: 1
  },
  {
    label: "Mahalliy xomashyo va komponentlar",
    value: 2
  }
];

const certificateTypes = [
  {
    label: "Haqiqiy",
    value: 1
  },
  {
    label: "Takroriy nusxa",
    value: 2
  },
  {
    label: "O'rnini bosivchi",
    value: 3
  }
]

const roles = [
  {
    label: "Tasischi",
    value: "founder"
  },
  {
    label: "Korxona rahbari",
    value: "director"
  },
  {
    label: "Bugalter",
    value: "accountant"
  },
  {
    label: "Xodim",
    value: "employee"
  },
  {
    label: "Boshqa",
    value: "other"
  }
];

export default {
  roles,
  localGoodsType,
  applicationTypes,
  companyType,
  genders,
  currencyTypes,
  rentType,
  applicationStatus,
  certificateTypes
};
