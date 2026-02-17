/*
 * GŁÓWNY SKRYPT - ZUZA: Modern Witchcraft & Gemstones
 * Obsługa koszyka, wyświetlanie produktów i wysyłka zamówień.
 */

// --- KONFIGURACJA ---
// Klucz pod którym zapisujemy koszyk w przeglądarce
const KLUCZ_KOSZYKA = 'zuza_koszyk';

// --- FUNKCJE POMOCNICZE ---

// Pobierz koszyk z localStorage
// Pobierz koszyk z localStorage
// Funkcja parsuje JSON z pamięci przeglądarki. Jeśli pusty -> zwraca pustą tablicę [].
function pobierzKoszyk() {
    const koszyk = localStorage.getItem(KLUCZ_KOSZYKA);
    return koszyk ? JSON.parse(koszyk) : [];
}

// Zapisz koszyk do localStorage
function zapiszKoszyk(koszyk) {
    localStorage.setItem(KLUCZ_KOSZYKA, JSON.stringify(koszyk));
    aktualizujLicznikKoszyka();
}

// Aktualizacja licznika w menu
// Aktualizacja licznika w menu
// Pobiera aktualną długość tablicy koszyka i wstawia do nawigacji (np. "(2)")
function aktualizujLicznikKoszyka() {
    const koszyk = pobierzKoszyk();
    const licznik = document.getElementById('licznik-koszyka');
    if (licznik) {
        licznik.textContent = `(${koszyk.length})`;
    }
}

// Dodawanie do koszyka
function dodajDoKoszyka(idProduktu) {
    const produkt = produkty.find(p => p.id === idProduktu);
    if (!produkt) return;

    const koszyk = pobierzKoszyk();
    koszyk.push(produkt);
    zapiszKoszyk(koszyk);

    alert(`Dodano do koszyka: ${produkt.nazwa}`);
}

// Usuwanie z koszyka (po indeksie, żeby można było usunąć jeden z wielu takich samych)
function usunZKoszyka(index) {
    const koszyk = pobierzKoszyk();
    koszyk.splice(index, 1); // Usuwa 1 element od podanego indeksu
    zapiszKoszyk(koszyk);
    wyswietlKoszyk(); // Odśwież widok koszyka
}

// --- WIDOKI (RENDEROWANIE) ---

// Wyświetlanie produktów w sklepie
// Wyświetlanie produktów w sklepie
// Generuje karty HTML dla każdego produktu w tablicy (z pliku dane.js).
// Obsługuje też filtrowanie po kategorii (kamienie/kadzidla/wszystkie).
function wyswietlProdukty(kategoria = 'wszystkie') {
    const kontener = document.getElementById('lista-produktow');
    if (!kontener) return;

    kontener.innerHTML = ''; // Wyczyść obecne

    const produktyDoWyswietlenia = kategoria === 'wszystkie'
        ? produkty
        : produkty.filter(p => p.kategoria === kategoria);

    produktyDoWyswietlenia.forEach(p => {
        const karta = document.createElement('div');
        karta.className = 'karta-produktu';
        karta.innerHTML = `
            <img src="${p.obrazek}" alt="${p.nazwa}">
            <h3>${p.nazwa}</h3>
            <span class="cena">${p.cena.toFixed(2)} PLN</span>
            <p>${p.opis}</p>
            <button class="btn" onclick="dodajDoKoszyka('${p.id}')">Dodaj do koszyka</button>
        `;
        kontener.appendChild(karta);
    });
}

// Wyświetlanie zawartości koszyka
function wyswietlKoszyk() {
    const tabela = document.getElementById('tabela-koszyka-body');
    const sumaElement = document.getElementById('suma-koszyka');
    if (!tabela) return;

    const koszyk = pobierzKoszyk();
    tabela.innerHTML = '';

    let suma = 0;

    if (koszyk.length === 0) {
        tabela.innerHTML = '<tr><td colspan="4" style="text-align:center">Twój koszyk jest pusty.</td></tr>';
    } else {
        koszyk.forEach((produkt, index) => {
            suma += produkt.cena;
            const wiersz = document.createElement('tr');
            wiersz.innerHTML = `
                <td>${produkt.nazwa}</td>
                <td>${produkt.cena.toFixed(2)} PLN</td>
                <td>1</td>
                <td><button class="btn" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;" onclick="usunZKoszyka(${index})">Usuń</button></td>
            `;
            tabela.appendChild(wiersz);
        });
    }

    if (sumaElement) {
        sumaElement.textContent = `${suma.toFixed(2)} PLN`;
    }
}

// Wyświetlanie zodiaku (Zachodni i Chiński)
function wyswietlZodiak() {
    // Zachodni
    const kontenerZachodni = document.getElementById('lista-zodiak');
    if (kontenerZachodni) {
        zodiakZachodni.forEach(z => {
            const div = document.createElement('div');
            div.className = 'karta-zodiaku';
            div.innerHTML = `
                <h1>${z.znak}</h1>
                <p>${z.data}</p>
                <p style="color: #ccc; font-size: 0.9rem; margin-top: 0.5rem;">Kamienie:</p>
                <p style="color: var(--accent-color); font-weight: 600;">${z.kamien}</p>
            `;
            kontenerZachodni.appendChild(div);
        });
    }

    // Chiński
    const kontenerChinski = document.getElementById('lista-zodiak-chinski');
    if (kontenerChinski) {
        zodiakChinski.forEach(z => {
            const div = document.createElement('div');
            div.className = 'karta-zodiaku';
            div.innerHTML = `
                <h1>${z.znak}</h1>
                <p style="font-size: 0.85rem; color: #aaa; margin-bottom: 0.5rem;">${z.lata}</p>
                <p>${z.opis}</p>
            `;
            kontenerChinski.appendChild(div);
        });
    }
}

// --- EMAILJS (WYSYŁKA ZAMÓWIENIA) ---

function wyslijZamowienie(e) {
    e.preventDefault(); // Zatrzymaj standardowe wysyłanie formularza (przeładowanie strony)

    const koszyk = pobierzKoszyk();
    if (koszyk.length === 0) {
        alert("Twój koszyk jest pusty!");
        return;
    }

    // Pobierz dane z formularza
    const imie = document.getElementById('imie').value;
    const email = document.getElementById('email').value;
    const adres = document.getElementById('adres').value;
    const wiadomosc = document.getElementById('wiadomosc').value;

    // 1. Grupujemy produkty, żeby policzyć ilość sztuk
    const zgrupowane = {};
    let sumaKoszyka = 0;

    koszyk.forEach(p => {
        sumaKoszyka += p.cena;
        if (!zgrupowane[p.id]) {
            zgrupowane[p.id] = { ...p, ilosc: 0, sumaLinii: 0 };
        }
        zgrupowane[p.id].ilosc++;
        zgrupowane[p.id].sumaLinii += p.cena;
    });

    // 2. Obliczamy wysyłkę
    const KOSZT_WYSYLKI = 15.00;
    const DARMOWA_WYSYLKA_OD = 150.00;
    let kosztWysylki = 0;

    if (sumaKoszyka > DARMOWA_WYSYLKA_OD) {
        kosztWysylki = 0;
    } else {
        kosztWysylki = KOSZT_WYSYLKI;
    }

    const doZaplaty = sumaKoszyka + kosztWysylki;

    // 3. Generujemy uproszczoną tabelkę HTML (bez zdjęć, tylko tekst)
    // UWAGA: Używamy style="border-bottom: 1px solid #eee" dla czytelności
    let listaZakupowHTML = `
    <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; text-align: left; color: #f7d9d7;">
        <thead style="background-color: rgba(255,255,255,0.05);">
            <tr>
                <th style="padding: 10px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1);">Produkt</th>
                <th style="padding: 10px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">Ilość</th>
                <th style="padding: 10px; text-align: right; border-bottom: 1px solid rgba(255,255,255,0.1);">Cena</th>
            </tr>
        </thead>
        <tbody>
    `;

    Object.values(zgrupowane).forEach(p => {
        listaZakupowHTML += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 10px; color: #f7d9d7;">
                    <strong>${p.nazwa}</strong>
                </td>
                <td style="padding: 10px; text-align: center; color: #ccc;">
                    ${p.ilosc} szt.
                </td>
                <td style="padding: 10px; text-align: right; white-space: nowrap; color: #f7d9d7;">
                    ${p.sumaLinii.toFixed(2)} PLN
                </td>
            </tr>
        `;
    });

    listaZakupowHTML += `</tbody></table>`;

    const params = {
        to_name: "Zuza",
        from_name: imie,
        from_email: email,
        address: adres,
        message: wiadomosc,
        order_items_html: listaZakupowHTML,
        shipping_cost: kosztWysylki.toFixed(2),
        total_price: doZaplaty.toFixed(2) // Łączna kwota z wysyłką
    };

    // --- KONFIGURACJA API EMAILJS ---
    const SERVICE_ID = "service_1ygu1mp";
    const TEMPLATE_ID = "template_4hj5i57"; // ID szablonu zamówienia (HTML)
    const PUBLIC_KEY = "x58tg4EfJxOyCAuol";

    // Wysłanie maila
    // Używamy globalnego obiektu emailjs (załączonego w HTML)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
        .then(function () {
            // --- TUTAJ DODAJEMY LOGIKĘ POWIADOMIEŃ ---
            // Zapisz datę ostatniego zakupu dla produktu 'kadzidla' (jeśli były w koszyku)
            const czyBylyKadzidla = koszyk.some(p => p.kategoria === 'kadzidla');
            if (czyBylyKadzidla) {
                localStorage.setItem('astrumi_ostatni_zakup_kadzidla', new Date().toISOString());
            }
            // ------------------------------------------

            alert('Dziękujemy za zamówienie! Skontaktujemy się wkrótce.');
            localStorage.removeItem(KLUCZ_KOSZYKA); // Wyczyść koszyk
            window.location.href = 'index.html'; // Wróć na stronę główną
        }, function (error) {
            alert('Wystąpił błąd podczas wysyłania zamówienia. Spróbuj ponownie.');
            console.error('Błąd EmailJS:', error);
        });
}

// --- OBSŁUGA NEWSLETTERA ---
function wyslijNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    if (!email) return;

    // Parametry dla EmailJS (wymaga stworzenia nowego szablonu o ID np. 'template_newsletter')
    // Jeśli nie masz drugiego szablonu, możesz użyć tego samego co do zamówień, 
    // ale lepiej stworzyć prosty: "Nowy subskrybent: {{from_email}}"
    const params = {
        from_email: email,
        message: "Prośba o dołączenie do newslettera ASTRUMI"
    };
    
    // Używamy tych samych kluczy co wyżej (chyba że stworzysz inne)
    const SERVICE_ID = "service_1ygu1mp";
    const TEMPLATE_ID_NEWSLETTER = "template_wljp6dh"; // Tu wpisz ID szablonu newslettera, jeśli masz inny, lub użyj tego samego
    const PUBLIC_KEY = "x58tg4EfJxOyCAuol";

    emailjs.send(SERVICE_ID, TEMPLATE_ID_NEWSLETTER, params, PUBLIC_KEY)
        .then(() => {
            alert("Dziękujemy za zapis do newslettera! Niech gwiazdy Ci sprzyjają. ✨");
            document.getElementById('newsletter-form').reset();
        }, (error) => {
            console.error(error);
            alert("Błąd zapisu. Spróbuj ponownie.");
        });
}

// --- SYSTEM POWIADOMIEŃ (REMINDER) ---
function sprawdzPrzypomnienie() {
    const ostatniZakup = localStorage.getItem('astrumi_ostatni_zakup_kadzidla');
    if (!ostatniZakup) return;

    const dataZakupu = new Date(ostatniZakup);
    const dzis = new Date();
    
    // Oblicz różnicę dni
    const roznicaCzasu = dzis - dataZakupu;
    const roznicaDni = Math.ceil(roznicaCzasu / (1000 * 60 * 60 * 24));

    // Jeśli minęło 7 dni i użytkownik nie zamknął powiadomienia na stałe (opcjonalne)
    if (roznicaDni >= 7 && !sessionStorage.getItem('astrumi_powiadomienie_zamkniete')) {
        // Stwórz prosty modal lub alert
        // (Dla prostoty użyjemy confirm, ale można zrobić ładny div)
        const komunikat = `Minęło ${roznicaDni} dni od zakupu kadzideł.\nCzy Twoje zapasy się kończą? Sprawdź nową dostawę!`;
        const czyPrzejsc = confirm(komunikat);
        
        // Zapisz w sesji, żeby nie męczyć użytkownika przy każdym odświeżeniu w tej samej sesji
        // sessionStorage czyści się po zamknięciu karty przeglądarki
        sessionStorage.setItem('astrumi_powiadomienie_zamkniete', 'true');

        if (czyPrzejsc) {
            window.location.href = 'sklep.html';
        }
    }
}

// --- INICJALIZACJA ---
// Uruchamia się po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    aktualizujLicznikKoszyka();
    sprawdzPrzypomnienie(); // Sprawdź czy wyświetlić przypomnienie

    // Sprawdź na jakiej jesteśmy stronie i uruchom odpowiednie funkcje
    if (document.getElementById('lista-produktow')) {
        wyswietlProdukty();

        // Obsługa filtrów
        const przyciski = document.querySelectorAll('.filtry button');
        przyciski.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Usuń klasę aktywny ze wszystkich
                przyciski.forEach(b => b.classList.remove('aktywny'));
                // Dodaj do klikniętego
                e.target.classList.add('aktywny');
                // Filtruj
                wyswietlProdukty(e.target.dataset.kategoria);
            });
        });
        
        // Obsługa Newslettera (jeśli jest na stronie sklepu)
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', wyslijNewsletter);
        }
    }

    if (document.getElementById('tabela-koszyka-body')) {
        wyswietlKoszyk();

        const formularz = document.getElementById('formularz-zamowienia');
        if (formularz) {
            formularz.addEventListener('submit', wyslijZamowienie);
        }
    }

    // Jeśli jesteśmy na podstronie zodiaku (sprawdzamy którykolwiek kontener)
    if (document.getElementById('lista-zodiak')) {
        wyswietlZodiak();
    }

    generujGwiazdy(); // Uruchomienie generowania gwiazd
});

// --- FUNKCJA GENERUJĄCA GWIAZDY (DODATKOWA) ---
function generujGwiazdy() {
    // 1. Stwórz kontener, jeśli nie istnieje
    let starContainer = document.getElementById('star-container');
    if (!starContainer) {
        starContainer = document.createElement('div');
        starContainer.id = 'star-container';
        document.body.prepend(starContainer);
    }

    // 2. Skonfiguruj ilość gwiazd (im więcej, tym gęściej, ale może mulić na starych telefonach)
    const starCount = 200;

    // 3. Generuj gwiazdy
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Losowa pozycja
        const x = Math.random() * 100; // %
        const y = Math.random() * 100; // %

        // Losowa wielkość (od 1px do 3px)
        const size = Math.random() * 2 + 1;

        // Losowy czas animacji (od 2s do 6s) i opóźnienie
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 5;
        
        // Losowa jasność maksymalna (od 0.5 do 1)
        const opacity = Math.random() * 0.5 + 0.5;

        // Przypisz style
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        star.style.setProperty('--opacity', opacity);

        starContainer.appendChild(star);
    }
}
