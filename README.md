# ASTRUMI – Magia Kamieni i Kadzideł
Modern Witchcraft & Gemstones Store
Witaj w repozytorium projektu ASTRUMI. Jest to nowoczesny sklep internetowy stworzony z pasji do ezoteryki, minerałów i naturalnych kadzideł. Projekt wyróżnia się unikalnym designem łączącym estetykę Witchy Vibes z nowoczesnymi trendami webowymi.
## Główne Funkcje
*   **Dynamiczny Design**: Tło z generowanymi proceduralnie, migoczącymi gwiazdami (JS) i efekt Glassmorphism (szkło).
*   **Koszyk Zakupowy**: Pełna obsługa dodawania/usuwania produktów i podliczania sumy zamówienia. System oparty na LocalStorage, więc koszyk "pamięta" zawartość po odświeżeniu strony.
*   **Backendless Orders**: Składanie zamówień i zapis na newsletter odbywa się bez tradycyjnego serwera – wykorzystano API EmailJS do bezpośredniej komunikacji.
*   **Moduł Zodiakalny**: Interaktywna sekcja dopasowująca kamienie do znaków zodiaku Zachodniego i Chińskiego.
*   **Responsywność**: Strona w pełni dostosowana do urządzeń mobilnych (RWD).
## Technologie
Projekt został zbudowany zgodnie z filozofią Lightweight Performance i Clean Code:
*   **HTML5** – Semantyczna struktura.
*   **CSS3** – Zmienne CSS, Flexbox, Grid, Animacje Keyframes.
*   **JavaScript (ES6+)** – Logika koszyka, obsługa przypomnień (SessionStorage), generowanie DOM, API.
*   **EmailJS** – Integracja formularzy i automatyzacja e-maili bez backendu.
## Jak uruchomić projekt?
Wystarczy pobrać pliki i otworzyć index.html w dowolnej przeglądarce!
Projekt nie wymaga instalacji Node.js ani bazy danych. Działa od razu z pudełka ("Plug & Play").
### Struktura Plików
*   index.html – Strona główna (Hero, Kamień Miesiąca).
*   sklep.html – Lista produktów z filtrowaniem i newsletterem.
*   koszyk.html – Podsumowanie zamówienia i formularz wysyłki.
*   zodiak.html – Baza wiedzy o znakach zodiaku.
*   style.css – Główny arkusz stylów (Globalne zmienne, RWD).
*   skrypt.js – Logika aplikacji (Koszyk, Gwiazdy, EmailJS).
*   dane.js – Baza danych produktów w formacie JSON.
## Autor
**Zuzanna Wolanin**
---
(c) 2026 ASTRUMI. Wszelkie prawa zastrzeżone.
