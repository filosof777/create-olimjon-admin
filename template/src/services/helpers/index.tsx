import {get} from "lodash";
import {
    CheckCircleIcon,
    CloseCircleIcon,
    DocumentTextIcon,
    MinusCircleIcon,
    NotificationUnreadLinesIcon,
    RefreshCircleIcon
} from "../../assets/icon/components/solar-line-duotone-icons";


const roles = [
    {
        value: "admin",
        label: "Admin"
    },
    {
        value: "department-head",
        label: "Bo'lim boshlig'i"
    },
    {
        value: "executor",
        label: "Ijroji"
    }
];

const departments = [
    {
        value: "transport",
        label: "Transport"
    },
    {
        value: 2,
        label: "Ijroji"
    }
];

const currencyTypes = [
    {value: 0, label: "UZS"},
    {value: 1, label: "USD"},
    {value: 2, label: "RUB"},
    {value: 3, label: "EURO"},
    {value: 4, label: "FRANK"},
    {value: 5, label: "FUNT"}
];

// ISO 4217 valyuta kodlari
const currencyCodes: Record<string, string> = {
    "860": "UZS",  // O'zbek so'mi
    "840": "USD",  // AQSH dollari
    "978": "EUR",  // Yevro
    "643": "RUB",  // Rossiya rubli
    "826": "GBP",  // Britaniya funti
    "756": "CHF",  // Shveytsariya franki
    "392": "JPY",  // Yaponiya iyenasi
    "156": "CNY",  // Xitoy yuani
    "398": "KZT",  // Qozog'iston tengesi
    "417": "KGS",  // Qirg'iziston somi
    "972": "TJS",  // Tojikiston somoniysi
    "934": "TMT",  // Turkmaniston manati
    "949": "TRY",  // Turkiya lirasi
    "784": "AED",  // BAA dirhami
    "356": "INR",  // Hindiston rupiyasi
    "410": "KRW",  // Janubiy Koreya voni
    "036": "AUD",  // Avstraliya dollari
    "124": "CAD",  // Kanada dollari
    "702": "SGD",  // Singapur dollari
    "344": "HKD",  // Gonkong dollari
    "458": "MYR",  // Malayziya ringgiti
    "764": "THB",  // Tailand bati
    "704": "VND",  // Vetnam dongi
    "818": "EGP",  // Misr funti
    "682": "SAR",  // Saudiya Arabistoni riyoli
    "364": "IRR",  // Eron riyoli
    "586": "PKR",  // Pokiston rupiyasi
    "050": "BDT",  // Bangladesh takasi
    "944": "AZN",  // Ozarbayjon manati
    "981": "GEL",  // Gruziya larisi
    "933": "BYN",  // Belarus rubli
    "980": "UAH",  // Ukraina grivnasi
    "985": "PLN",  // Polsha zlotiysi
    "203": "CZK",  // Chexiya kronasi
    "348": "HUF",  // Vengriya forinti
    "946": "RON",  // Ruminiya leyi
    "975": "BGN",  // Bolgariya levi
    "941": "RSD",  // Serbiya dinori
    "051": "AMD",  // Armaniston drami
};

const getCurrencyName = (code: string | null): string => {
    if (!code) return "";
    return currencyCodes[code] || code;
};

const formatCurrencyAmount = (amount: string | number | null, currCode: string | null): string => {
    if (!amount) return "-";
    const numAmount = typeof amount === "string" ? Number(amount) : amount;
    if (isNaN(numAmount)) return "-";
    const currency = currCode ? getCurrencyName(currCode) : "";
    return `${numAmount.toLocaleString("ru-RU")}${currency ? ` ${currency}` : ""}`;
};

// Sana formatlash funksiyasi
const formatDate = (
    date: string | null,
    toFormat: string = "d.m.Y",
    fromFormat: string = "Y-m-d"
): string => {
    if (!date) return "-";

    // Parse the date based on fromFormat
    const formatMap: Record<string, number> = {};
    const formatParts = fromFormat.split(/[-./]/);
    const dateParts = date.split(/[-./]/);

    if (formatParts.length !== dateParts.length) return date;

    formatParts.forEach((part, index) => {
        formatMap[part] = parseInt(dateParts[index], 10);
    });

    const year = formatMap["Y"] || formatMap["y"] || 0;
    const month = formatMap["m"] || formatMap["M"] || 0;
    const day = formatMap["d"] || formatMap["D"] || 0;

    if (!year || !month || !day) return date;

    // Format to output
    return toFormat
        .replace("Y", String(year))
        .replace("y", String(year).slice(-2))
        .replace("m", String(month).padStart(2, "0"))
        .replace("d", String(day).padStart(2, "0"));
};

const unitTypes = [
    {label: "тонна", value: 1},
    {label: "штук", value: 2},
    {label: "метр", value: 3},
    {label: "литр", value: 4},
    {label: "килограмм", value: 5},
    {label: "рулон", value: 6}
];

const activityCategories = [
    {label: "Eksport", value: 1},
    {label: "Import", value: 2}
];

const appealTypes = [
    {label: "Ariza", value: 1},
    {label: "Taklif", value: 2},
    {label: "Shikoyat", value: 3}
];

const deliveryTypes = [
    {label: "Avtomobil transporti", value: 1},
    {label: "Temir yo'l transporti", value: 2},
    {label: "Havo transporti", value: 3}
];

const formatBytes = (bytes: any, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const formatInputPhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/;

    const cleaned = phoneNumber.replace(/\D/g, "");

    const fullNumber = cleaned.startsWith("998") ? cleaned : `998${cleaned}`;

    const x = fullNumber.match(phoneRegex);

    if (!x) {
        return "+998";
    }

    return `+${x[1]} ${x[2]} ${x[3]} ${x[4]} ${x[5]}`.trim();
};

const beatifyPrice = (x: any, decimalPlaces: number = 0) => {
    const _x = Number(x);
    if (isNaN(_x)) return "";

    const parts = String(
        decimalPlaces > 0 ? _x.toFixed(decimalPlaces) : Math.floor(_x)
    ).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return parts.join(decimalPlaces > 0 ? "," : "");
};

const getNestedValue = (obj: any, path: string) => {
    const keys = path.split(".");
    let current = obj;

    for (let i = 0; i < keys.length; i++) {
        if (current && current[keys[i]] !== undefined) {
            current = current[keys[i]];
        } else {
            return undefined;
        }
    }

    return current;
};

const getGender = (type: any) => {
    switch (type) {
        case 1:
            return "Erkak";
        case 2:
            return "Ayol";
        default:
            return "Erkak";
    }
};

const spaceNumber = (number: number, decimalPlaces: number = 4) => {
    if (!number) return "";

    const regex = new RegExp(`(\\d{${decimalPlaces}})(?=\\d)`, "g");
    return number.toString().replace(regex, "$1 ");
};

const totalAmountBeautify = (data: any, name: string) => {
    return beatifyPrice(
        data.reduce((acc: any, item: any) => acc + Number(get(item, name, 0)), 0)
    );
};
const getFile = (file: any) => {
    const generateColor = (extension: string): string => {
        let hash = 0;
        for (let i = 0; i < extension.length; i++) {
            hash = extension.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = hash % 360;
        return `hsl(${hue}, 70%, 50%)`;
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} bayt`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const extension = file.ext || "";
    const color = generateColor(extension);
    const byte = formatFileSize(file.size);

    return {color, byte, extension};
};

const genders = [
    {
        label: "Erkak",
        value: 1
    },
    {
        label: "Ayol",
        value: 2
    }
];
const workTypes = [
    {
        label: "Asosiy ish",
        value: 1
    },
    {
        label: "Asosiy bo'lmagan ish",
        value: 2
    }
];

const deadlineType = [
    {
        label_uz: "Kalendar kuni",
        label_ru: "Календарный день",
        label_en: "Calendar day",
        label_oz: "Календарь куни",
        value: 0
    },
    {
        label_uz: "Ish kuni",
        label_ru: "Рабочий день",
        label_en: "Work day",
        label_oz: "Иш куни",
        value: 1
    }
];

const directionStatus = [
    {
        value: "0",
        label: "Tugatilgan"
    },
    {
        value: 1,
        label: "Faol"
    },
    {
        value: 2,
        label: "Tez kunda"
    },
    {
        value: 3,
        label: "Texnik ishlar olib borilmoqda"
    }
];

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
        icon: <DocumentTextIcon className={"!text-white"}/>,
        headBackgroundColor: "#8A9499",
        bodyBackgroundColor: "#8A949920"
    },
    {
        value: "new",
        label: "Yangi",
        color: "#fff",
        icon: <DocumentTextIcon className={"!text-white"}/>,
        headBackgroundColor: "#7ccf00",
        bodyBackgroundColor: "#7ccf0020"
    },
    {
        value: "progressing",
        label: "Ko'rib chiqilmoqda",
        color: "#fff",
        icon: <RefreshCircleIcon className={"!text-white"}/>,
        headBackgroundColor: "#1890ff",
        bodyBackgroundColor: "#1890ff20"
    },
    {
        value: "task",
        label: "Vazifa",
        color: "#fff",
        icon: <NotificationUnreadLinesIcon className={"!text-white"}/>,
        headBackgroundColor: "#615fff",
        bodyBackgroundColor: "#615fff20"
    },
    {
        value: "approved",
        label: "Tasdiqlangan",
        color: "#fff",

        icon: <CheckCircleIcon className={"!text-white"}/>,
        headBackgroundColor: "#52C41A",
        bodyBackgroundColor: "#52C41A20"
    },
    {
        value: "rejected",
        label: "Rad etilgan",
        color: "#fff",
        icon: <CloseCircleIcon className={"!text-white"}/>,
        headBackgroundColor: "#ff4d4f",
        bodyBackgroundColor: "#ff4d4f20"
    },
    {
        value: "canceled",
        label: "Bekor qilingan",
        color: "#fff",
        icon: <MinusCircleIcon className={"!text-white"}/>,
        headBackgroundColor: "#1c1919",
        bodyBackgroundColor: "#1c191920"
    }
];

const socials = [
    {label: "VK", value: "vk"},
    {label: "Facebook", value: "fb"},
    {label: "Instagram", value: "instagram"},
    {label: "Twitter", value: "twitter"},
    {label: "Youtube", value: "youtube"},
    {label: "Telegram", value: "telegram"},
    {label: "Whatsapp", value: "whatsapp"},
    {label: "Linkedin", value: "linkedin"},
    {label: "Email", value: "email"},
    {label: "Phone", value: "phone"}
];


function filterRoutesByPermissions(
    routes: any,
    userPermissions: string[]
): any {
    return routes
        .map((route: any) => {
            const filteredChildren = route.children
                ? filterRoutesByPermissions(route.children, userPermissions)
                : undefined;

            const hasPermission =
                !route.permissions ||
                route.permissions.some((permission: any) =>
                    userPermissions.includes(permission)
                );
            if (!hasPermission) return null;
            if (hasPermission || (filteredChildren && filteredChildren.length > 0)) {
                return {
                    ...route,
                    children: filteredChildren
                };
            }

            return null;
        })
        .filter((route: any) => route !== null);
}


export default {
    roles,
    genders,
    workTypes,
    departments,
    unitTypes,
    getFile,
    directionStatus,
    totalAmountBeautify,
    deliveryTypes,
    getGender,
    activityCategories,
    appealTypes,
    getNestedValue,
    formatInputPhoneNumber,
    formatBytes,
    beatifyPrice,
    currencyTypes,
    currencyCodes,
    getCurrencyName,
    formatCurrencyAmount,
    formatDate,
    spaceNumber,
    applicationStatus,
    socials,
    deadlineType,
    filterRoutesByPermissions
};
