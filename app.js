window.addEventListener("scroll", function() {
    var body = document.querySelector("body");

    if (window.scrollY > 0) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});

// CONTACT ME START

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini önler

        // Form alanlarını al
        const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
        const phone = document.querySelector('input[placeholder="Your Phone"]').value.trim();
        const subject = document.querySelector('input[placeholder="Your Subject"]').value.trim();
        const message = document.querySelector("textarea").value.trim();

        // Hata mesajlarını gösterecek div'i al veya oluştur
        let messageBox = document.querySelector(".message-box");
        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.className = "message-box";
            form.prepend(messageBox);
        }

        // Form doğrulama kontrolü
        if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
            showMessage("Please fill in all fields!", "error");
            return;
        }

        if (!validateEmail(email)) {
            showMessage("Please enter a valid email address!", "error");
            return;
        }

        if (!validatePhone(phone)) {
            showMessage("Please enter a valid phone number!", "error");
            return;
        }

        // Eğer her şey doğruysa, başarı mesajı göster
        showMessage("Your message has been sent succesfully!", "success");

        // Formu temizle
        form.reset();
    });

    // Email doğrulama fonksiyonu
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Telefon doğrulama fonksiyonu (Sadece rakam ve en az 10 haneli olacak)
    function validatePhone(phone) {
        const phoneRegex = /^\d{10,}$/;
        return phoneRegex.test(phone);
    }

    // Kullanıcıya mesaj gösterme fonksiyonu
    function showMessage(message, type) {
        const messageBox = document.querySelector(".message-box");
        messageBox.textContent = message;
        messageBox.className = `message-box ${type}`;
    }
});

// CONTACT ME END