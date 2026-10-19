// --- AMBIL ELEMEN DOM ---
const sourceText = document.getElementById("source-text");
const findInput = document.getElementById("find-input");
const replaceInput = document.getElementById("replace-input");
const caseSensitiveCheckbox = document.getElementById("case-sensitive");
const matchCounter = document.getElementById("match-counter");
const btnReplace = document.getElementById("btn-replace");
const btnClear = document.getElementById("btn-clear");
const outputBox = document.getElementById("output-box");
const copyBtn = document.getElementById("copy-btn");
const toast = document.getElementById("toast");

// --- FUNGSI PROSES PENCARIAN & PENGGANTIAN ---
function processFindAndReplace() {
    const text = sourceText.value;
    const findWord = findInput.value;
    const replaceWord = replaceInput.value;
    const isCaseSensitive = caseSensitiveCheckbox.checked;

    if (!text || !findWord) {
        outputBox.innerHTML = text 
            ? `<span>${text}</span>` 
            : `<span class="placeholder-text">Hasil teks akan muncul di sini...</span>`;
        matchCounter.textContent = "Ditemukan: 0 kata";
        return;
    }

    // Buat RegExp secara dinamis
    // Flag 'g' untuk global (semua kemunculan), 'i' untuk abaikan case jika tidak dicentang
    const flags = isCaseSensitive ? "g" : "gi";
    
    try {
        // Escape karakter khusus regex agar aman dicari
        const escapedFind = findWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedFind, flags);

        // Hitung jumlah kecocokan (matches)
        const matches = text.match(regex);
        const count = matches ? matches.length : 0;
        matchCounter.textContent = `Ditemukan: ${count} kata`;

        // Lakukan penggantian kata
        const updatedText = text.replace(regex, replaceWord);
        outputBox.textContent = updatedText;

    } catch (e) {
        outputBox.textContent = text;
        matchCounter.textContent = "Ditemukan: 0 kata";
    }
}

// --- FITUR COPY TO CLIPBOARD ---
copyBtn.addEventListener("click", () => {
    const textToCopy = outputBox.textContent;

    if (!textToCopy || outputBox.querySelector(".placeholder-text")) {
        showToast("Tidak ada teks untuk disalin!");
        return;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Teks berhasil disalin! 🚀");
    }).catch(() => {
        showToast("Gagal menyalin teks.");
    });
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// --- TOMBOL BERSIHKAN ---
btnClear.addEventListener("click", () => {
    sourceText.value = "";
    findInput.value = "";
    replaceInput.value = "";
    outputBox.innerHTML = `<span class="placeholder-text">Hasil teks akan muncul di sini...</span>`;
    matchCounter.textContent = "Ditemukan: 0 kata";
    sourceText.focus();
});

// --- EVENT LISTENERS ---
sourceText.addEventListener("input", processFindAndReplace);
findInput.addEventListener("input", processFindAndReplace);
replaceInput.addEventListener("input", processFindAndReplace);
caseSensitiveCheckbox.addEventListener("change", processFindAndReplace);
btnReplace.addEventListener("click", processFindAndReplace);

// Inisialisasi awal
processFindAndReplace();