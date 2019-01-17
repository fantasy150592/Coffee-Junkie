// hide preloader
// all the images scripts links have finished loading

//Cach 1
eventListeners();

function eventListeners() {
    const ui = new UI();
    window.addEventListener('load', function() {
        ui.hidePreloader();
    });

    //nav btn
    document.querySelector('.navBtn').addEventListener('click', function() {
        ui.showNav();
    });
    //control the video
    document.querySelector('.video_switch').addEventListener('click', function() {
        ui.videoControls();
    })
}

function UI() {

}

UI.prototype.hidePreloader = function() {
    document.querySelector('.preloader').style.display = "none";
}

UI.prototype.showNav = function() {
    document.querySelector('.nav').classList.toggle('nav-show');
}

UI.prototype.videoControls = function() {
    let btn = document.querySelector('.video_switch-btn');
    if (!btn.classList.contains('btnSlide')) {
        btn.classList.add('btnSlide');
        document.querySelector('.video_item').pause();
    } else {
        btn.classList.remove('btnSlide');
        document.querySelector('.video_item').play();
    }
}



// // Cach 2
// class UI {
//     hidePreloader() {
//         document.querySelector('.preloader').style.display = 'none';
//     }
//     showNav() {
//         document.querySelector('.nav').classList.toggle('nav-show');
//     }
// }

// //event Listeners
// eventListeners()

// function eventListeners() {
//     const ui = new UI();
//     //preloader
//     window.addEventListener('load', () => ui.hidePreloader());
//     //navBtn
//     document.querySelector('.navBtn').addEventListener('click', () => ui.showNav());
// }