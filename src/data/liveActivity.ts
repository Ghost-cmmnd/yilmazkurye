// Eski sitedeki sahte "canlı aktivite" bildirim kutusunun veri havuzları.
// Gerçek sipariş verisi DEĞİLDİR — rastgele üretilen sosyal-kanıt metinleridir.

export const FIRST_NAMES = [
  "Ahmet", "Mehmet", "Ali", "Mustafa", "Hasan", "Hüseyin", "İbrahim", "Emre",
  "Burak", "Kemal", "Serkan", "Oğuz", "Tolga", "Deniz", "Can", "Ayşe",
  "Fatma", "Elif", "Zeynep", "Merve", "Selin", "Derya", "Ebru", "Gül",
  "Sibel", "Ece", "Defne", "Buse", "Özge", "Pınar",
];

export const LAST_INITIALS = "ABCDEFGHIKLMNORSTYZ".split("");

export const DISTRICTS = [
  "Kadıköy", "Ataşehir", "Üsküdar", "Beşiktaş", "Şişli", "Bakırköy",
  "Maltepe", "Kartal", "Pendik", "Beylikdüzü", "Başakşehir", "Sarıyer",
  "Fatih", "Beyoğlu", "Bağcılar", "Ümraniye", "Çekmeköy", "Beykoz",
  "Avcılar", "Esenyurt", "Levent", "Maslak", "Kozyatağı", "Taksim",
  "Mecidiyeköy", "Kağıthane", "Bahçelievler", "Zeytinburnu",
];

export const PACKAGE_TYPES = ["evrak", "dosya", "paket", "sözleşme", "belge", "kargo", "zarf"];

export const TIME_AGO = [
  "az önce", "1 dk önce", "2 dk önce", "3 dk önce", "5 dk önce", "8 dk önce",
  "12 dk önce", "15 dk önce", "25 dk önce", "30 dk önce", "45 dk önce", "1 saat önce",
];

export const EVENT_TYPES = ["pickup", "delivered", "enroute"] as const;

// Zamanlama (eski sitenin git geçmişindeki commit 9deb63a ile birebir aynı)
export const TOAST_INITIAL_DELAY_MS = 15000;
export const TOAST_INTERVAL_MS = 90000;
export const TOAST_VISIBLE_MS = 8000;
