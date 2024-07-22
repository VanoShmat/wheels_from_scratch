const translations = {
    en: {
        address: "Matrosova Ln, 5, Odesa",
        "logo-text": "tire service",
        "menu-services": "services",
        "menu-pricing": "pricing",
        "menu-contacts": "contacts",
        "book-btn": "Book",
        "services-title": "Our services",
        "service-item": "Repair of tires",
        "pricing-title": "Pricing",
        "pricing-btn-cars": "Cars",
        "pricing-btn-minivan": "Parquet / Minivan",
        "pricing-btn-bus": "Bus / Jeep",
        "contacts-title": "Contacts",
        "testimonials-tripadvisor": "Tripadvisor",
        "testimonials-googlemaps": "Google Maps",
        "contact-msg": "Contact us via messenger and we will quickly provide you with all the necessary information.",
        "booking-title": "Fill out the form",
        "car-model": "Car model",
        "body-type": "Body type",
        radius: "Radius",
        "phone-number": "Phone number",
        problem: "Tell us about your problem",
        submit: "Submit",
        email: "tires_repair@gmail.com",
        "wheel-removal": "Wheel Removal and Installation",
        "tire-fitting": "Tire Fitting",
        balancing: "Balancing",
        "total-4-wheels": "Total for 4 Wheels",
        sandblasting: "Sandblasting of Metal Discs",
        "re-tiring": "Re-Tiring",
        "brake-pad-replacement": "Brake Pad Replacement",
        "alloy-wheel-repair": "Alloy Wheel Repair",
        "steel-wheel-repair": "Steel Wheel Repair",
        "rust-removal": "Rust Removal from Discs",
        "metal-valve": "Metal Valve",
        from: "from",
    },
    pl: {
        address: "ul. Matrosova 5, Odessa",
        "logo-text": "serwis opon",
        "menu-services": "usługi",
        "menu-pricing": "cennik",
        "menu-contacts": "kontakty",
        "book-btn": "Zarezerwuj",
        "services-title": "Nasze usługi",
        "service-item": "Naprawa opon",
        "pricing-title": "Cennik",
        "pricing-btn-cars": "Samochody",
        "pricing-btn-minivan": "Parkiet / Minivan",
        "pricing-btn-bus": "Autobus / Jeep",
        "contacts-title": "Kontakty",
        "testimonials-tripadvisor": "Tripadvisor",
        "testimonials-googlemaps": "Google Maps",
        "contact-msg": "Skontaktuj się z nami przez komunikator, a szybko dostarczymy wszelkie niezbędne informacje.",
        "booking-title": "Wypełnij formularz",
        "car-model": "Model samochodu",
        "body-type": "Typ nadwozia",
        radius: "Promień",
        "phone-number": "Numer telefonu",
        problem: "Opisz swój problem",
        submit: "Zatwierdź",
        email: "tires_repair@gmail.com",
        "wheel-removal": "Demontaż i montaż kół",
        "tire-fitting": "Montaż opon",
        balancing: "Wyważanie",
        "total-4-wheels": "Razem za 4 koła",
        sandblasting: "Piaskowanie metalowych dysków",
        "re-tiring": "Wymiana opon",
        "brake-pad-replacement": "Wymiana klocków hamulcowych",
        "alloy-wheel-repair": "Naprawa felg aluminiowych",
        "steel-wheel-repair": "Naprawa felg stalowych",
        "rust-removal": "Usuwanie rdzy z dysków",
        "metal-valve": "Zawór metalowy",
        from: "od",
    },
    ua: {
        address: "пров. Матросова, 5, Одеса",
        "logo-text": "шиномонтаж",
        "menu-services": "послуги",
        "menu-pricing": "ціни",
        "menu-contacts": "контакти",
        "book-btn": "Забронювати",
        "services-title": "Наші послуги",
        "service-item": "Ремонт шин",
        "pricing-title": "Ціни",
        "pricing-btn-cars": "Автомобілі",
        "pricing-btn-minivan": "Кросовер / Мінівен",
        "pricing-btn-bus": "Автобус / Джип",
        "contacts-title": "Контакти",
        "testimonials-tripadvisor": "Tripadvisor",
        "testimonials-googlemaps": "Google Maps",
        "contact-msg": "Зв'яжіться з нами через месенджер, і ми швидко надамо всю необхідну інформацію.",
        "booking-title": "Заповніть форму",
        "car-model": "Модель автомобіля",
        "body-type": "Тип кузова",
        radius: "Радіус",
        "phone-number": "Номер телефону",
        problem: "Розкажіть про вашу проблему",
        submit: "Відправити",
        email: "tires_repair@gmail.com",
        "wheel-removal": "Зняття та встановлення коліс",
        "tire-fitting": "Шиномонтаж",
        balancing: "Балансування",
        "total-4-wheels": "Загалом за 4 колеса",
        sandblasting: "Піскоструминна обробка металевих дисків",
        "re-tiring": "Заміна шин",
        "brake-pad-replacement": "Заміна гальмівних колодок",
        "alloy-wheel-repair": "Ремонт легкосплавних дисків",
        "steel-wheel-repair": "Ремонт сталевих дисків",
        "rust-removal": "Видалення іржі з дисків",
        "metal-valve": "Металевий клапан",
        from: "від",
    },
};

function setLanguage(lang) {
    $("[data-lang]").each(function () {
        const key = $(this).data("lang");
        if (translations[lang] && translations[lang][key]) {
            $(this).text(translations[lang][key]);
        }
    });
}

$(document).ready(function () {
    $("#language").change(function () {
        const selectedLang = $(this).val();
        setLanguage(selectedLang);
    });

    setLanguage("en"); // Встановлення мови за замовчуванням
});

$(document).ready(function () {
    $(".lang-selector__btn").click(function () {
        $(".lang-selector").toggleClass("show");
    });

    $(".lang-selector .lang-selector__item").click(function (e) {
        e.preventDefault();
        var lang = $(this).data("lang");
        var text = $(this).text();
        $("#selected-language").text(text);
        $(".lang-selector").removeClass("show");
        setLanguage(lang);
    });

    // Close the dropdown if the user clicks outside of it
    $(window).click(function (e) {
        if (!$(e.target).closest(".lang-selector").length) {
            $(".lang-selector").removeClass("show");
        }
    });
});
