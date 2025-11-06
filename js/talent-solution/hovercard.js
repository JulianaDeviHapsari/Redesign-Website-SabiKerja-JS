function selectCard(element) {
    document.querySelectorAll('.card1').forEach(card => {
        card.classList.remove('border-[#EC6227]', 'border-2');
        card.classList.add('border-2', 'border-gray-300');
    });
                
    element.classList.remove('border-2', 'border-gray-300');
    element.classList.add('border-[#EC6227]', 'border-2');
    document.querySelectorAll('.card2').forEach(card => {
        card.classList.remove('border-[#EC6227]', 'border-4');
        card.classList.add('border-2', 'border-gray-300');
    });
                
    element.classList.remove('border-2', 'border-gray-300');
    element.classList.add('border-[#EC6227]', 'border-4');
    document.querySelectorAll('.card3').forEach(card => {
        card.classList.remove('border-[#EC6227]', 'border-4');
        card.classList.add('border-2', 'border-gray-300');
    });
                
    element.classList.remove('border-2', 'border-gray-300');
    element.classList.add('border-[#EC6227]', 'border-4');
    document.querySelectorAll('.card4').forEach(card => {
        card.classList.remove('border-[#EC6227]', 'border-4');
        card.classList.add('border-2', 'border-gray-300');
    });
    
    element.classList.remove('border-2', 'border-gray-300');
    element.classList.add('border-[#EC6227]', 'border-4');
}