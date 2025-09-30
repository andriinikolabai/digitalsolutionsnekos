document.querySelector('.scroll__top').addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger_menu");
    const mobileMenu = document.querySelector(".mobile__menu");
    const closeBtn = document.querySelector(".mobile__menu svg");

    burger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const servicesLink = document.querySelector('.mobile__menu .services-dropdown > a');
    const dropdownParent = document.querySelector('.mobile__menu .services-dropdown');

    servicesLink.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownParent.classList.toggle('active');
    });

    document.addEventListener('click', function () {
        dropdownParent.classList.remove('active');
    });

    dropdownParent.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});

document.querySelectorAll('.mobile__nav a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.mobile__nav a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

const token = '8074685330:AAEghj2LpELgaH9zhcdfryvGtfOWAdx9EUM';
const chat_id = '-4956144682';

document.getElementById('tgForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value;
    const phone = this.phone.value;
    const email = this.email.value;
    const message = this.message.value;

    const lang = document.documentElement.lang || 'ua';

    const application = lang === 'en'
        ? `New application:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
        : `Нова заявка:\nІм'я: ${name}\nТелефон: ${phone}\nEmail: ${email}\nПовідомлення: ${message}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: chat_id,
            text: application
        })
    })
        .then(res => {
            if (res.ok) {
                alert(lang === 'en' ? 'Application sent!' : 'Заявка відправлена!');
                this.reset();
            } else {
                alert(lang === 'en' ? 'Sending failed.' : 'Помилка відправлення.');
            }
        });
});
