const btn = document.getElementById('dropdownButton');
const menu = document.getElementById('dropdownMenu');
const options = menu.querySelectorAll('li');
const hiddenInput = document.getElementById('inquiryInput');
const form = document.getElementById('bookingForm');
const successModal = document.getElementById('successModal');

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        btn.firstChild.textContent = option.textContent; 
        hiddenInput.value = option.textContent; 
        btn.classList.remove('text-red-500');
        menu.classList.add('hidden'); 
    });
});

document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // cegah reload halaman

    if (!hiddenInput.value) {
        btn.classList.add('text-red-500');
        btn.firstChild.textContent = 'Please select an option *';
        return;
    }

    if (form.checkValidity()) {
        successModal.classList.remove('hidden');
    } else {
        form.reportValidity();
    }
});

function closeSuccessModal() {
    successModal.classList.add('hidden');
    form.reset(); 
    hiddenInput.value = ''; 
    btn.firstChild.textContent = 'Select Inquiry'; 
}