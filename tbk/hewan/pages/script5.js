function showPopup(answer) {
    var popup;
    var popupText;
    var popupButton;
    var lanjutButton;
    var ulangButton;

    if (answer === 'Benar') {
        popup = document.getElementById("popup-benar");
        popupText = document.getElementById("popup-text-benar");
        popupButton = document.getElementById("popup-button-benar");
        lanjutButton = document.getElementById("lanjut-button-benar");

        popupText.textContent = 'Selamat! Jawaban Anda benar.';
        popupButton.style.display = 'none';
        lanjutButton.style.display = 'block';
        lanjutButton.onclick = function() {
            window.location.href = 'halaman6.html';
        };
    } else if (answer === 'Salah') {
        popup = document.getElementById("popup-salah");
        popupText = document.getElementById("popup-text-salah");
        popupButton = document.getElementById("popup-button-salah");
        ulangButton = document.getElementById("ulang-button");

        popupText.textContent = 'Oops! Jawaban Anda salah.';
        popupButton.style.display = 'none';
        ulangButton.style.display = 'block';
        ulangButton.onclick = ulang;
    } else {
        
        return;
    }

    popup.style.display = "block";
}


function closePopup() {
    var popups = document.querySelectorAll(".popup");
    popups.forEach(function(popup) {
        popup.style.display = "none";
    });
}

function lanjut() {
    window.location.href = 'page2/index.html';
}

function ulang() {
    closePopup();
}