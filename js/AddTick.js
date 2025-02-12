// dark mode
const themeToggle = document.getElementById('theme-toggle');  

document.addEventListener('DOMContentLoaded', () => {  
    const currentTheme = localStorage.getItem('theme');  
    if (currentTheme) {  
        document.body.classList.add(currentTheme);  
        themeToggle.checked = currentTheme === 'dark';  
    }  

    themeToggle.addEventListener('change', () => {  
        if (themeToggle.checked) {  
            document.body.classList.add('dark');  
            document.body.classList.remove('light');  
            localStorage.setItem('theme', 'dark');  
        } else {  
            document.body.classList.remove('dark');  
            document.body.classList.add('light');  
            localStorage.setItem('theme', 'light');  
        }  
    });  
});

// dropdown 1  
const selected = document.querySelector('.selected');  
const optionsContainer = document.querySelector('.options');  
const optionsList = document.querySelectorAll('.option');  
const arrow = document.querySelector('.arrow');  

selected.addEventListener('click', () => {  
    optionsContainer.classList.toggle('active');  
    arrow.classList.toggle('rotate');  
});  

optionsList.forEach(option => {  
    option.addEventListener('click', () => {  
        selected.innerText = option.innerText;  
        optionsContainer.classList.remove('active');  
        arrow.classList.remove('rotate');  
    });  
});  

document.addEventListener('click', (event) => {  
    if (!event.target.closest('.custom-select')) {  
        optionsContainer.classList.remove('active');  
        arrow.classList.remove('rotate');  
    }  
});  

// dropdown 2  
const selected2 = document.querySelector('.selected2');  
const optionsContainer2 = document.querySelector('.options2');  
const optionsList2 = document.querySelectorAll('.option2');  
const arrow2 = document.querySelector('.arrow2');  

selected2.addEventListener('click', () => {  
    optionsContainer2.classList.toggle('active'); 
    arrow2.classList.toggle('rotate');   
});  

optionsList2.forEach(option2 => {  
    option2.addEventListener('click', () => {  
        selected2.innerText = option2.innerText;  
        optionsContainer2.classList.remove('active'); 
        arrow2.classList.remove('rotate');  
    });  
});  

document.addEventListener('click', (event) => {  
    if (!event.target.closest('.custom-select2')) {  
        optionsContainer2.classList.remove('active'); 
        arrow2.classList.remove('rotate');  
    }  
});



//********save button********** */

document.getElementById("myForm").addEventListener("submit", function(event) {  
    event.preventDefault();

    const button = document.getElementById("saveButton");  
    const spinner = button.querySelector(".spinner");  
    const successIcon = button.querySelector(".success-icon");  

    button.innerHTML = ' '; 
    spinner.classList.remove("hidden"); 
    button.appendChild(spinner); 

    setTimeout(() => {  
        spinner.classList.add("hidden"); 
        successIcon.classList.remove("hidden");   
        button.appendChild(successIcon);  

        document.getElementById("myForm").submit(); 

        
    }, 3000);
});