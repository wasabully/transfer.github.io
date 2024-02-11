document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на все необходимые элементы формы
    let directionSelect = document.getElementById('direction'); // Выбор направления
    let dateSelect = document.getElementById('date'); // Выбор даты
    let timeSelect = document.getElementById('time'); // Выбор времени
    let pickupDropoffContainer = document.querySelector('.car-options'); // Контейнер для точек отправления и прибытия
    let seatsContainer = document.getElementById('seats'); // Количество мест
    let childSeatsContainer = document.getElementById('child-seats'); // Количество детских кресел
    let luggageContainer = document.getElementById('luggage'); // Количество багажа
    let additionalInfoContainer = document.querySelector('.additional-info-container'); // Контейнер для дополнительной информации
    let submitButton = document.getElementById('submit-button'); // Кнопка отправки формы
    let pickupInput = document.getElementById('pickup'); // Поле ввода точки отправления
    let dropoffInput = document.getElementById('dropoff'); // Поле ввода точки прибытия

    // Функция для скрытия всех ненужных элементов формы
    function hideAllFields() {
        timeSelect.style.display = 'none';
        pickupDropoffContainer.style.display = 'none';
        seatsContainer.style.display = 'none';
        childSeatsContainer.style.display = 'none';
        luggageContainer.style.display = 'none';
        additionalInfoContainer.style.display = 'none';
        submitButton.style.display = 'none';
        pickupInput.style.display = 'none';
        dropoffInput.style.display = 'none';
    }

    // Функция для сброса значений всех полей формы
    function resetForm() {
        directionSelect.value = '';
        dateSelect.value = '';
        timeSelect.value = '';
        pickupInput.value = '';
        dropoffInput.value = '';
        seatsContainer.value = '0';
        childSeatsContainer.value = '0';
        luggageContainer.value = '0';
        document.getElementById('contact-number').value = '';
        document.getElementById('comment').value = '';
    }

    // Скрываем ненужные контейнеры
    hideAllFields();

    // Обработчик изменения даты
    dateSelect.addEventListener('change', function() {
        if (dateSelect.value) {
            // Если выбрана дата, то показываем список времени
            if (dateSelect.value === '8') {
                populateTimeSelect(0, 23, 30); // Заполняем список времени в зависимости от даты
            } else {
                populateTimeSelect(17, 22, 30); // Заполняем список времени в зависимости от даты
            }
            timeSelect.style.display = 'block'; // Показываем список времени
        } else {
            hideAllFields(); // Скрываем все поля формы
        }
    });

    // Обработчик изменения времени
    timeSelect.addEventListener('change', function() {
        if (timeSelect.value) {
            // Если выбрано время, то показываем контейнеры для дополнительной информации и кнопку отправки формы
            pickupDropoffContainer.style.display = 'grid';
            seatsContainer.style.display = 'block';
            childSeatsContainer.style.display = 'block';
            luggageContainer.style.display = 'block';
            additionalInfoContainer.style.display = 'block';
            submitButton.style.display = 'block';
            pickupInput.style.display = 'block';
            dropoffInput.style.display = 'block';
        } else {
            hideAllFields(); // Скрываем все поля формы
        }
    });

    // Обработчик события отправки формы
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем стандартное действие отправки формы

        // Получаем данные из формы
        const formData = {
            direction: directionSelect.value,
            date: dateSelect.value,
            time: timeSelect.value,
            pickup: pickupInput.value,
            dropoff: dropoffInput.value,
            seats: seatsContainer.value,
            childSeats: childSeatsContainer.value,
            luggage: luggageContainer.value,
            contactNumber: document.getElementById('contact-number').value,
            comment: document.getElementById('comment').value
        };

        // Проверяем, заполнены ли все обязательные поля
        if (!directionSelect.value || !dateSelect.value || !timeSelect.value || !pickupInput.value || !dropoffInput.value || !seatsContainer.value || !childSeatsContainer.value || !luggageContainer.value) {
            alert('Пожалуйста, заполните все обязательные поля!'); // Показываем сообщение об ошибке
            return; // Прерываем выполнение функции, чтобы форма не отправлялась
        }

        // Вывод данных в консоль
        console.log(formData);

        // Сбрас формы
        resetForm();

        // Обновляем форму, скрывая все поля, кроме направления и даты
        hideAllFields();
    });

    // Функция для заполнения списка времени с заданными параметрами
    function populateTimeSelect(startHour, endHour, interval) {
        let timeOptions = '<option value="">Выберите время</option>';
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let min = 0; min < 60; min += interval) {
                let time = (hour < 10 ? '0' : '') + hour + ':' + (min === 0 ? '00' : min);
                timeOptions += '<option value="' + time + '">' + time + '</option>';
            }
        }
        timeSelect.innerHTML = timeOptions; // Заполняем список времени
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    // Открывать/закрывать сайдбар по клику на гамбургер
    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-open');
    });

    // Закрывать сайдбар при клике на любое место вне
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnHamburger) {
            sidebar.classList.remove('sidebar-open');
        }
    });
});


