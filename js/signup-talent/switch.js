const talentBtn = document.getElementById("talentBtn");
const recruiterBtn = document.getElementById("recruiterBtn");
const talentForm = document.getElementById("talentForm");
const recruiterForm = document.getElementById("recruiterForm");

function switchForm(activeBtn, inactiveBtn, activeForm, inactiveForm) {
    activeForm.classList.remove("hidden");
    inactiveForm.classList.add("hidden");
    activeBtn.classList.add("bg-[#EC6227]", "text-white");
    activeBtn.classList.remove("text-[#EC6227]");
    inactiveBtn.classList.remove("bg-[#EC6227]", "text-white");
    inactiveBtn.classList.add("text-[#EC6227]");
}

talentBtn.addEventListener("click", () => {
    switchForm(talentBtn, recruiterBtn, talentForm, recruiterForm);
});

recruiterBtn.addEventListener("click", () => {
    switchForm(recruiterBtn, talentBtn, recruiterForm, talentForm);
});