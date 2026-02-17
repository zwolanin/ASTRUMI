# 🔮 K&T (Kamienie i Tarot) – Magiczny Sklep Internetowy

Witaj w repozytorium projektu **K&T**! Jest to nowoczesna, w pełni responsywna strona internetowa stworzona dla sklepu oferującego kamienie szlachetne, kadzidła i akcesoria ezoteryczne.

![Banner](https://images.unsplash.com/photo-1567605690379-257e3119011f?auto=format&fit=crop&w=1200&q=80)

## 📖 O Projekcie

Celem projektu było stworzenie estetycznej i funkcjonalnej wizytówki sklepu z możliwością składania zamówień bez konieczności wdrażania skomplikowanego backendu czy systemów płatności. Strona łączy w sobie elegancję, mistycyzm i nowoczesne technologie webowe.

Strona działa jako **aplikacja typu SPA (Single Page Application)** w kontekście koszyka i przeglądania produktów, choć oparta jest na klasycznej strukturze plików HTML.

## 🛠️ Technologie

Projekt został zbudowany przy użyciu czystych technologii webowych, stawiając na wydajność i prostotę modyfikacji.

*   **HTML5** – Semantyczna struktura strony.
*   **CSS3** – Nowoczesne style:
    *   Zmienne CSS (Custom Properties) dla łatwej zmiany motywu.
    *   Flexbox & Grid Layout dla responsywności.
    *   Efekt **Glassmorphism** (półprzezroczyste panele).
    *   Animacje i przejścia (transitions).
*   **JavaScript (ES6+)** – Logika biznesowa:
    *   Renderowanie produktów z bazy danych (plik JS).
    *   Obsługa koszyka (dodawanie, usuwanie, sumowanie).
    *   **LocalStorage** – zapisywanie zawartości koszyka w przeglądarce użytkownika.
*   **EmailJS** – System obsługi zamówień on-line (wysyłka maili bez backendu).

## 🌟 Główne Funkcjonalności

### 🛍️ Sklep i Produkty
*   Dynamiczne generowanie listy produktów.
*   Filtrowanie produktów po kategoriach (Kamienie, Kadzidła, Wszystkie).
*   Przejrzyste karty produktów ze zdjęciami i cenami.

### 🛒 Inteligentny Koszyk
*   Dodawanie produktów do koszyka jednym kliknięciem.
*   Agregacja produktów (zliczanie sztuk tego samego produktu).
*   Możliwość usuwania produktów.
*   Zapamiętywanie zawartości koszyka po odświeżeniu strony.

### 🚚 System Zamówień i Dostaw
*   Automatyczne obliczanie kosztów dostawy:
    *   **15.00 PLN** dla zamówień poniżej 150 PLN.
    *   **Darmowa dostawa (0.00 PLN)** dla zamówień powyżej 150 PLN.
*   Formularz zamówienia z walidacją danych.

### 📧 Powiadomienia Email (EmailJS)
*   Automatyczne potwierdzenie zamówienia dla klienta.
*   Powiadomienie o nowym zamówieniu dla sprzedawcy.
*   Elegancki szablon HTML wiadomości zawierający podsumowanie zamówienia i dane do płatności.

---
Moc natury w nowoczesnym wydaniu. ✨
