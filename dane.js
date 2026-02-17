/*
 * BAZA DANYCH - ASTRUMI
 * Ten plik zawiera wszystkie dane produktów: Kadzidła i Kamienie
 * oraz informacje o znakach zodiaku (Zachodnie i Chińskie).
 */

// Baza Produktów (Kadzidła i Kamienie)
const produkty = [
    // --- KADZIDŁA ---
    // --- KADZIDŁA ---
    // Każdy produkt to obiekt {}. Kluczowe pola:
    // id: Unikalny identyfikator (k1, k2...) - musi być różny dla każdego!
    // kategoria: 'kadzidla' lub 'kamienie' (do filtrowania)
    // znaki: Lista znaków zodiaku, dla których ten produkt jest polecany
    {
        id: "k1",
        nazwa: "Palo Santo - Kadzidło Stożkowe",
        cena: 25.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Palosantostozkowe.png",
        opis: "Oczyszcza przestrzeń i aurę, usuwa ciężką energię, wprowadza spokój i lekkość. Idealne do medytacji i relaksu.",
        znaki: "Strzelec, Lew, Wodnik"
    },
    {
        id: "k2",
        nazwa: "Biała Szałwia - Kadzidło Stożkowe",
        cena: 25.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Bialaszalwiastozkowe.png",
        opis: "Silne oczyszczanie energetyczne, ochrona domu, usuwanie negatywnych energii po stresujących sytuacjach.",
        znaki: "Baran, Skorpion, Koziorożec"
    },
    {
        id: "k3",
        nazwa: "Lawenda - Kadzidło Stożkowe",
        cena: 22.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Lawendastozkowe.png",
        opis: "Uspokaja, wycisza, poprawia sen, redukuje napięcie i stres, wprowadza harmonię emocjonalną.",
        znaki: "Panna, Waga, Ryby"
    },
    {
        id: "k4",
        nazwa: "Drzewo Sandałowe - Kadzidło Stożkowe",
        cena: 24.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Drzewosandałowestorzkowe.png",
        opis: "Uziemia, pogłębia medytację, wspiera spokój umysłu i praktyki duchowe.",
        znaki: "Byk, Rak, Koziorożec"
    },
    {
        id: "k5",
        nazwa: "Cynamon - Kadzidło Stożkowe",
        cena: 20.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Cynamonstorzkowe.png",
        opis: "Przyciąga obfitość, sukces, energię działania, wzmacnia intencje i motywację.",
        znaki: "Baran, Lew, Strzelec"
    },
    {
        id: "k6",
        nazwa: "Smocza Krew - Kadzidło Stożkowe",
        cena: 28.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Smoczakrewstorzkowe.png",
        opis: "Bardzo silna ochrona, wzmacnia rytuały, intencje i manifestację, oczyszcza przestrzeń.",
        znaki: "Skorpion, Koziorożec, Rak"
    },
    {
        id: "k7",
        nazwa: "Róża - Kadzidło Stożkowe",
        cena: 23.00,
        kategoria: "kadzidla",
        obrazek: "zdjecia/produkty/kadzidła/Rozastozkowe.png",
        opis: "Wzmacnia energię miłości, harmonii, delikatności, idealne do pracy z sercem i relacjami.",
        znaki: "Byk, Waga, Rak"
    },

    // --- KAMIENIE ---
    // --- KAMIENIE ---
    // Kamienie mają dodatkowe pole 'aspektNaukowy'
    {
        id: "m1",
        nazwa: "Karneol",
        cena: 35.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Karneol.png",
        opis: "Wzmacnia siłę życiową, odwagę i motywację. Pomaga Baranowi kierować energię konstruktywnie.",
        aspektNaukowy: "Odmiana chalcedonu barwiona tlenkami żelaza.",
        znaki: "Baran"
    },
    {
        id: "m2",
        nazwa: "Kwarc Różowy",
        cena: 30.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Kwarcrozowy.png",
        opis: "Kamień miłości i spokoju. Otwiera serce, łagodzi lęk i wzmacnia relacje.",
        aspektNaukowy: "Różowa odmiana kwarcu (SiO2).",
        znaki: "Byk, Waga"
    },
    {
        id: "m3",
        nazwa: "Cytryn",
        cena: 40.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Cytryn.png",
        opis: "Rozjaśnia umysł, wspiera kreatywność i optymizm. Kamień sukcesu i bogactwa.",
        aspektNaukowy: "Żółta odmiana kwarcu.",
        znaki: "Bliźnięta, Lew"
    },
    {
        id: "m4",
        nazwa: "Kamień Księżycowy",
        cena: 45.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Kamienksiezycowy.png",
        opis: "Pogłębia intuicję, chroni wrażliwość, wspiera równowagę emocjonalną.",
        aspektNaukowy: "Skaleń potasowy (Ortoklaz) z efektem adularyzacji.",
        znaki: "Rak"
    },
    {
        id: "m5",
        nazwa: "Lapis Lazuli",
        cena: 50.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Lapizlazuli.png",
        opis: "Kamień prawdy i mądrości. Wspiera komunikację i podejmowanie decyzji w zgodzie z sercem.",
        aspektNaukowy: "Skała metamorficzna złożona głównie z lazurytu.",
        znaki: "Waga"
    },
    {
        id: "m6",
        nazwa: "Turkus",
        cena: 55.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Turkus.png",
        opis: "Wspiera podróże i ochronę. Pomaga zachować równowagę między wolnością a stabilnością.",
        aspektNaukowy: "Uwodniony fosforan glinu i miedzi.",
        znaki: "Strzelec"
    },
    {
        id: "m7",
        nazwa: "Obsydian",
        cena: 38.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Obsydian.png",
        opis: "Silny kamień ochronny. Pomaga przejść przez cienie i odbudować wewnętrzną siłę.",
        aspektNaukowy: "Szkliwo wulkaniczne.",
        znaki: "Skorpion"
    },
    {
        id: "m8",
        nazwa: "Fluoryt",
        cena: 32.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Fluoryt.png",
        opis: "Porządkuje myśli, uspokaja chaos, wspiera koncentrację i jasność decyzji.",
        aspektNaukowy: "Fluorek wapnia (CaF2).",
        znaki: "Panna"
    },
    {
        id: "m9",
        nazwa: "Hematyt",
        cena: 28.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Hematyt.png",
        opis: "Uziemia, stabilizuje i daje poczucie bezpieczeństwa. Chroni przed przeciążeniem.",
        aspektNaukowy: "Tlenek żelaza (Fe2O3).",
        znaki: "Koziorożec"
    },
    {
        id: "m10",
        nazwa: "Ametyst",
        cena: 42.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Ametyst.png",
        opis: "Kamień duchowości i intuicji. Uspokaja umysł, pomaga w wizjach i medytacji.",
        aspektNaukowy: "Fioletowa odmiana kwarcu.",
        znaki: "Wodnik, Ryby, Strzelec"
    },
    {
        id: "m11",
        nazwa: "Akwamaryn",
        cena: 60.00,
        kategoria: "kamienie",
        obrazek: "zdjecia/produkty/kamienie/Akwamaryn.png",
        opis: "Koi emocje, przywraca płynność i spokój. Kamień wody i łagodnej harmonii.",
        aspektNaukowy: "Niebieska odmiana berylu.",
        znaki: "Ryby, Wodnik"
    }
];

// ZNAKI ZODIAKU (ZACHODNIE)
// ZNAKI ZODIAKU (ZACHODNIE)
// Tablica obiektów wyświetlana w zodiak.html
const zodiakZachodni = [
    { znak: "Baran", data: "21.03 - 19.04", kamien: "Karneol, Cynamon" },
    { znak: "Byk", data: "20.04 - 20.05", kamien: "Kwarc Różowy, Drzewo Sandałowe" },
    { znak: "Bliźnięta", data: "21.05 - 20.06", kamien: "Cytryn" },
    { znak: "Rak", data: "21.06 - 22.07", kamien: "Kamień Księżycowy, Róża" },
    { znak: "Lew", data: "23.07 - 22.08", kamien: "Cytryn, Palo Santo" },
    { znak: "Panna", data: "23.08 - 22.09", kamien: "Fluoryt, Lawenda" },
    { znak: "Waga", data: "23.09 - 22.10", kamien: "Lapis Lazuli, Róża" },
    { znak: "Skorpion", data: "23.10 - 21.11", kamien: "Obsydian, Smocza Krew" },
    { znak: "Strzelec", data: "22.11 - 21.12", kamien: "Turkus, Palo Santo" },
    { znak: "Koziorożec", data: "22.12 - 19.01", kamien: "Hematyt, Biała Szałwia" },
    { znak: "Wodnik", data: "20.01 - 18.02", kamien: "Ametyst, Palo Santo" },
    { znak: "Ryby", data: "19.02 - 20.03", kamien: "Akwamaryn, Lawenda" }
];

// ZNAKI ZODIAKU (CHIŃSKIE)
// ZNAKI ZODIAKU (CHIŃSKIE)
// Tablica obiektów wyświetlana w zodiak.html
const zodiakChinski = [
    { znak: "Szczur", lata: "1984, 1996, 2008, 2020", opis: "Urodzony strateg. Błyskotliwy, szybki i czujny." },
    { znak: "Wół", lata: "1985, 1997, 2009, 2021", opis: "Siła i wytrwałość. Symbol cierpliwej pracy i lojalności." },
    { znak: "Tygrys", lata: "1986, 1998, 2010, 2022", opis: "Odwaga i pasja. Buntownik i lider z dziką energią." },
    { znak: "Królik", lata: "1987, 1999, 2011, 2023", opis: "Delikatność i harmonia. Znak pokoju i dyplomacji." },
    { znak: "Smok", lata: "1988, 2000, 2012, 2024", opis: "Moc i wizja. Potężna energia przywództwa i szczęścia." },
    { znak: "Wąż", lata: "1989, 2001, 2013, 2025", opis: "Mądrość i tajemnica. Cichy, przenikliwy, widzi więcej." },
    { znak: "Koń", lata: "1990, 2002, 2014, 2026", opis: "Wolność i ruch. Nie znosi ograniczeń, kocha podróże." },
    { znak: "Koza", lata: "1991, 2003, 2015, 2027", opis: "Wrażliwość i sztuka. Tworzy piękno i uzdrawia emocje." },
    { znak: "Małpa", lata: "1992, 2004, 2016, 2028", opis: "Inteligencja i zabawa. Mistrz improwizacji." },
    { znak: "Kogut", lata: "1993, 2005, 2017, 2029", opis: "Precyzja i porządek. Szczery, pracowity i odważny." },
    { znak: "Pies", lata: "1994, 2006, 2018, 2030", opis: "Lojalność i ochrona. Wierny strażnik serca." },
    { znak: "Świnia", lata: "1995, 2007, 2019, 2031", opis: "Obfitość i szczerość. Znak dobrobytu i otwartego serca." }
];
