document.addEventListener('DOMContentLoaded', () => { 
    const galleryItems = document.querySelectorAll('.gallery-item img'); 
    galleryItems.forEach(item => { 
        item.addEventListener('click', event => { 
            event.preventDefault(); 

            // Проверка, существует ли уже lightbox
            if (document.querySelector('.lightbox')) return;

            // Создание lightbox
            const lightbox = document.createElement('div'); 
            lightbox.classList.add('lightbox'); 
            lightbox.innerHTML = ` 
                <div class="lightbox-content"> 
                    <img src="${item.src}" alt="Gallery Image"> 
                    <span class="close-lightbox">&times;</span> 
                </div> 
            `; 
            document.body.appendChild(lightbox); 

            // Закрытие lightbox 
            lightbox.addEventListener('click', event => { 
                if (event.target.classList.contains('lightbox') || 
                    event.target.classList.contains('close-lightbox')) { 
                    lightbox.remove(); 
                } 
            }); 
        },); // Добавлено, чтобы обработчик срабатывал только один раз
    }); 
});