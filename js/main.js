//loader
jQuery(document).ready( function(e) {
    e(window).on('load', function () {
        let $preloader = $('.preloader');
        $preloader.delay(250).fadeOut(200);
    });
});

//валидация формы
let $name = $('.header-feedback__form [name="name"]');
let $email = $('.header-feedback__form [name="email"]');
let $error = $('.form-error');

$('.header-feedback__form').submit( function () {
    if ($name.val() == '') {
        $name.addClass('error');
    } else {
        $name.removeClass('error');
    }

    if ($email.val() == '') {
        $email.addClass('error');
    } else {
        $email.removeClass('error');
    }

    if (!$name.hasClass('error') && !$email.hasClass('error')) {
        $error.css('display', 'none');

        $('.header-feedback-answer').fadeOut(300);
        $('.header-feedback-success h3').html($name.val() + ', Ваш запрос отправлен!');
        $('.header-feedback-success p').html('С Вами скоро свяжутся по почте: ' + $email.val());
        $('.header-feedback-success').delay(300).fadeIn(300);
        
        this.reset();
    } else {
        $error.css('display', 'block');
    }

    return false;
});

$('.header-feedback__form [name="name"], .header-feedback__form [name="email"]').keyup(function () {
    if ($(this).val() == '') {
        $(this).addClass('error');
    } else {
        $(this).removeClass('error');
    }

    if (!$name.hasClass('error') && !$email.hasClass('error')) {
        $error.css('display', 'none');
    } else {
        $error.css('display', 'block');
    }

});

//валидация формы-2
// let $name2 = $('.contacts-request__form [name="name2"]');
// let $email2 = $('.contacts-request__form [name="email2"]');
// let $message = $('.contacts-request__form [name="message"]');
// let $error2 = $('.request-error');

// $('.contacts-request__form').submit( function () {
//     if ($name2.val() == '') {
//         $name2.addClass('error2');
//     } else {
//         $name2.removeClass('error2');
//     }

//     if ($email2.val() == '') {
//         $email2.addClass('error2');
//     } else {
//         $email2.removeClass('error2');
//     }

//     if ($message.val() == '') {
//         $message.addClass('error2');
//     } else {
//         $message.removeClass('error2');
//     }

//     if (!$name.hasClass('error2') && !$email.hasClass('error2') && !$message.hasClass('error2')) {
//         $error2.css('display', 'none');

//         $('.contacts-request__form').fadeOut(300);
//         $('.contacts-request-success h3').html($name2.val() + ', Ваш запрос отправлен!');
//         $('.contacts-request-success p').html('С Вами скоро свяжутся по почте: ' + $email2.val());
//         $('.contacts-request-success').delay(300).fadeIn(300);

//         this.reset();
//     } else {
//         $error2.css('display', 'block');
//     }

//     return false;
// });

// $('.contacts-request__form [name="name2"], .contacts-request__form [name="email2"], .contacts-request__form [name="message"]').keyup(function () {
//     if ($(this).val() == '') {
//         $(this).addClass('error2');
//     } else {
//         $(this).removeClass('error2');
//     }

//     if (!$name2.hasClass('error2') && !$email2.hasClass('error2') && !$message.hasClass('error2')) {
//         $error2.css('display', 'none');
//     } else {
//         $error2.css('display', 'block');
//     }
// });

//burger 
$('.burger').click(function () {
    $('.menu-info').slideToggle(200);
    $('.menu-info').css('display', 'flex');
});

//scroll
$('.menu-logo').click(function () {
    $('html, body').animate({
        scrollTop: $('.header').offset().top,
    }, 1000)

    return false;
})

$('.up').click(function () {
    $('html, body').animate({
        scrollTop: $('.header').offset().top,
    }, 1000)

    return false;
})

$('.header__button-about').click( function () {
    $('html, body').animate({
        scrollTop: $('.task').offset().top,
    }, 1000)
});

$('.menu-info-item-about').click(function () {
    $('html, body').animate({
        scrollTop: $('.task').offset().top,
    }, 1000)

    return false;
});

$('.header__button-price').click( function () {
    $('html, body').animate({
        scrollTop: $('.cost').offset().top,
    }, 1000)
});

$('.menu-info-item-case').click(function () {
    $('html, body').animate({
        scrollTop: $('.cost').offset().top,
    }, 1000)

    return false;
})

$('.timeWork-content__button').click(function () {
    $('html, body').animate({
        scrollTop: $('.cost').offset().top,
    }, 1000)

    return false;
})

$('.task-info__button').click(function () {
    $('html, body').animate({
        scrollTop: $('.servises').offset().top,
    }, 1000)

    return false;
})

$('.menu-info-item-advantages').click(function () {
    $('html, body').animate({
        scrollTop: $('.servises').offset().top,
    }, 1000)

    return false;
})

$('.menu-info-item-order').click(function () {
    $('html, body').animate({
        scrollTop: $('.connection').offset().top,
    }, 1000)

    return false;
})

$('.menu-info-item-reviews').click(function () {
    $('html, body').animate({
        scrollTop: $('.reviews').offset().top,
    }, 1000)

    return false;
})

$('.menu-info-item-contacts').click(function () {
    $('html, body').animate({
        scrollTop: $('.contacts').offset().top,
    }, 1000)

    return false;
})

$('.connection-content__button').click(function () {
    $('html, body').animate({
        scrollTop: $('.contacts').offset().top,
    }, 1000)

    return false;
})

$('.cost-content-item__button').click(function () {
    $('html, body').animate({
        scrollTop: $('.contacts').offset().top,
    }, 1000)

    return false;
})

//Появление
let topWindow = window.innerHeight;

let $headerLogo = document.querySelector('.header__logo');
let $headerTitle = document.querySelector('.header__title');
let $headerText = document.querySelector('.header__text');
let $headerButton = document.querySelector('.header__button');
let $headerFeedback = document.querySelector('.header-feedback');

window.addEventListener('load', function () {
    $headerLogo.style.transform = 'translateY(0%)';
    $headerLogo.style.opacity = '1';

    $headerTitle.style.transform = 'translateX(0%)';
    $headerTitle.style.opacity = '1';

    $headerText.style.transform = 'translateY(0%)';
    $headerText.style.opacity = '1';

    $headerButton.style.transform = 'translateX(0%)';
    $headerButton.style.opacity = '1';

    $headerFeedback.style.transform = 'translateY(0%)';
    $headerFeedback.style.opacity = '1';
})

let $taskImg = document.querySelector('.task-img');
let $taskInfo = document.querySelector('.task-info');
window.addEventListener('scroll', function () {
    let top = $taskInfo.getBoundingClientRect().top = $taskImg.getBoundingClientRect().top;

    if (top <= topWindow) {
        $taskImg.style.transform = 'translateX(0%)';
        $taskImg.style.opacity = '1';
        $taskInfo.style.transform = 'translateX(0%)';
        $taskInfo.style.opacity = '1';
    }
})

let $servisesImg = document.querySelector('.servises__img');
window.addEventListener('scroll', function () {
    let top = $servisesImg.getBoundingClientRect().top;

    if (top <= topWindow) {
        $servisesImg.style.transform = 'translateX(0%)';
        $servisesImg.style.opacity = '1';
    }
})

let $servisesNameItemImg = document.querySelectorAll('.servises-name-item__img');
window.addEventListener('scroll', function () {
    let delay = 0.5;

    $servisesNameItemImg.forEach(function (item) {
        let top = item.getBoundingClientRect().top;

        if (top <= topWindow) {
            item.style.transform = 'translatey(0)';
            item.style.opacity = '1'; 
            item.style.transition = `transform ${delay}s, opacity ${delay}s`;

            delay += 0.5;
        } 
    }) 
})

let $timeWorkContent = document.querySelector('.timeWork-content');
let $timeWorkImg = document.querySelector('.timeWork-img');
window.addEventListener('scroll', function () {
    let top =  $timeWorkContent.getBoundingClientRect().top =$timeWorkImg.getBoundingClientRect().top;

    if (top <= topWindow) {
        $timeWorkContent.style.transform = 'translateX(0%)';
        $timeWorkContent.style.opacity = '1';
        $timeWorkImg.style.transform = 'translateX(0%)';
        $timeWorkImg.style.opacity = '1';
    }
})

let $connectionContentTitle = document.querySelector('.connection-content__title');
window.addEventListener('scroll', function () {
    let top = $connectionContentTitle.getBoundingClientRect().top;

    if (top <= topWindow) {
        $connectionContentTitle.style.transform = 'translateX(0%)';
        $connectionContentTitle.style.opacity = '1';
    }
})

let $connectionContentText = document.querySelector('.connection-content__text');
window.addEventListener('scroll', function () {
    let top = $connectionContentText.getBoundingClientRect().top;

    if (top <= topWindow) {
        $connectionContentText.style.transform = 'translateX(0%)';
        $connectionContentText.style.opacity = '1';
    }
})

let $connectionContentButton = document.querySelector('.connection-content__button');
window.addEventListener('scroll', function () {
    let top = $connectionContentButton.getBoundingClientRect().top;

    if (top <= topWindow) {
        $connectionContentButton.style.transform = 'translateX(0%)';
        $connectionContentButton.style.opacity = '1';
    }
})

let $costTitle = document.querySelector('.cost__title');
window.addEventListener('scroll', function () {
    let top = $costTitle.getBoundingClientRect().top;

    if (top <= topWindow) {
        $costTitle.style.transform = 'translateX(0%)';
        $costTitle.style.opacity = '1';
    }
})

let $titleHr = document.querySelectorAll('.title__hr');
window.addEventListener('scroll', function () {
    $titleHr.forEach(function (item) {
        let top = item.getBoundingClientRect().top;

        if (top <= topWindow) {
            item.style.transform = 'translatey(0)';
            item.style.opacity = '1'; 
        }
    }) 
})

let $costContentItem = document.querySelectorAll('.cost-content-item');
window.addEventListener('scroll', function () {
    let delay = 0;

    $costContentItem.forEach(function (item) {
        let top = item.getBoundingClientRect().top - 500;

        if (top <= topWindow) {
            item.style.transform = 'translatey(0)';
            item.style.opacity = '1'; 
            item.style.transitionDelay = `${delay}s`;

            delay += 0.2;
        }
    }) 
})

let $clientsTitle = document.querySelector('.clients__title');
window.addEventListener('scroll', function () {
    let top = $clientsTitle.getBoundingClientRect().top;

    if (top <= topWindow) {
        $clientsTitle.style.transform = 'translateX(0%)';
        $clientsTitle.style.opacity = '1';
    }
})

let $clientsImagesimg = document.querySelectorAll('.clients__images-img');
window.addEventListener('scroll', function () {
    let delay = 0;

    $clientsImagesimg.forEach(function (item) {
        let top = item.getBoundingClientRect().top;

        if (top <= topWindow) {
            item.style.transform = 'translatey(0)';
            item.style.opacity = '1'; 
            item.style.transitionDelay = `${delay}s`;

            delay += 0.2;
        }
    }) 
})

let $reviewsTitle = document.querySelector('.reviews__title');
window.addEventListener('scroll', function () {
    let top = $reviewsTitle.getBoundingClientRect().top;

    if (top <= topWindow) {
        $reviewsTitle.style.transform = 'translateX(0%)';
        $reviewsTitle.style.opacity = '1';
    }
})

let $swiperContainer = document.querySelector('.swiper-container');
window.addEventListener('scroll', function () {
    let top = $swiperContainer.getBoundingClientRect().top;

    if (top <= topWindow) {
        $swiperContainer.style.transform = 'translateY(0%)';
        $swiperContainer.style.opacity = '1';
    }
})

let $contactsContent = document.querySelector('.contacts-content');
window.addEventListener('scroll', function () {
    let top = $contactsContent.getBoundingClientRect().top;

    if (top <= topWindow) {
        $contactsContent.style.transform = 'translateY(0%)';
        $contactsContent.style.opacity = '1';
    }
})

let $contactsRequestFormItem = document.querySelectorAll('.contacts-request__form-item');
window.addEventListener('scroll', function () {
    $contactsRequestFormItem.forEach(function (item) {
        let top = item.getBoundingClientRect().top;

        if (top <= topWindow) {
            item.style.transform = 'translatey(0)';
            item.style.opacity = '1'; 
        }
    }) 
})

let $footerContentItem = document.querySelectorAll('.footer-content-item');
window.addEventListener('scroll', function () {
    let delay = 0;

    $footerContentItem.forEach(function (item) {
        let top = item.getBoundingClientRect().top;

        if (top <= topWindow) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1'; 
            item.style.transitionDelay = `${delay}s`;

            delay += 0.2;
        }
    }) 
})

//up
let $servises = document.querySelector('.servises');
let $up = document.querySelector('.up');
window.addEventListener('scroll', function () {
    let top = $servises.getBoundingClientRect().top;

    if (top <= topWindow) {
        $up.classList.add('up-active');
    } else {
        $up.classList.remove('up-active');
    }
})

//menu
let $header = document.querySelector('.header');
let $headerHeight = -$header.offsetHeight;
let $menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
    let top = $header.getBoundingClientRect().top;

    if (top <= $headerHeight) {
        $menu.classList.add('menu-fixed');
    } else {
        $menu.classList.remove('menu-fixed');
    }
})

//menu-active-color
let $task = document.querySelector('.task');
let $taskHeight = -$task.offsetHeight;
let $menuInfoItemAbout = document.querySelector('.menu-info-item-about');

window.addEventListener('scroll', function () {
    let top = $task.getBoundingClientRect().top;

    if ((top <= 0) && (top >= $taskHeight)) {
        $menuInfoItemAbout.classList.add('menu-info-item-active');
    } else {
        $menuInfoItemAbout.classList.remove('menu-info-item-active');
    }
})

let $timeWork= document.querySelector('.timeWork');
let $servisesHeight = -$servises.offsetHeight -$timeWork.offsetHeight;
let $menuInfoItemAdvantages = document.querySelector('.menu-info-item-advantages');

window.addEventListener('scroll', function () {
    let top = $servises.getBoundingClientRect().top;

    if ((top <= 0) && (top >= $servisesHeight)) {
        $menuInfoItemAdvantages.classList.add('menu-info-item-active');
    } else {
        $menuInfoItemAdvantages.classList.remove('menu-info-item-active');
    }
})

let $сonnection = document.querySelector('.connection');
let сonnectionHeight = -$сonnection.offsetHeight;
let $menuInfoItemOrder = document.querySelector('.menu-info-item-order');

window.addEventListener('scroll', function () {
    let top = $сonnection.getBoundingClientRect().top;

    if ((top <= 0) && (top >= сonnectionHeight)) {
        $menuInfoItemOrder.classList.add('menu-info-item-active');
    } else {
        $menuInfoItemOrder.classList.remove('menu-info-item-active');
    }
})

let $cost = document.querySelector('.cost');
let costHeight = -$cost.offsetHeight;
let $menuInfoItemCase = document.querySelector('.menu-info-item-case');

window.addEventListener('scroll', function () {
    let top = $cost.getBoundingClientRect().top;

    if ((top <= 0) && (top >= costHeight)) {
        $menuInfoItemCase.classList.add('menu-info-item-active');
    } else {
        $menuInfoItemCase.classList.remove('menu-info-item-active');
    }
})

let $clients = document.querySelector('.clients');
let $footer = document.querySelector('.footer');
let $menuInfoItemReviews = document.querySelector('.menu-info-item-reviews');

window.addEventListener('scroll', function () {
    let topClients = $clients.getBoundingClientRect().top;
    let topFooter = $footer.getBoundingClientRect().top;

    if ((topClients <= 0) && (topFooter >= topWindow)) {
        $menuInfoItemReviews.classList.add('menu-info-item-active');
    } else {
        $menuInfoItemReviews.classList.remove('menu-info-item-active');
    }
})

let $footerContacts = document.querySelector('.footer');
let $menuInfoItemContacts = document.querySelector('.menu-info-item-contacts');
window.addEventListener('scroll', function () {
    let top = $footerContacts.getBoundingClientRect().top;

    if (top <= topWindow) {
        $menuInfoItemContacts.classList.add('menu-info-item-active');
    } else {
        $menuInfoItemContacts.classList.remove('menu-info-item-active');
    }
})

// Отправка данных формы на сервер без перезагрузки
document.querySelector('.contacts-request__form').addEventListener('submit', function (e) {
    e.preventDefault();
 
    let params = '';
 
    for(i = 0; this.elements.length > i;i++) {
        params += `${this.elements[i].name}=${this.elements[i].value}&`;
    }
 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/project_3/question.php?${params}`);
    xhr.send();
 
    xhr.addEventListener('load', function () {
        let formaSuccess = document.querySelector('.contacts-request').innerHTML = xhr.responseText;
    })
 })