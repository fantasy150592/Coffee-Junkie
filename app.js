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
    document.querySelector('.drink-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastname = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;
        let value = ui.checkEmpty(name, lastname, email);
        //console.log(value);
        if (value) {

        } else {
            ui.showFeedback('some form values empty', 'error');
        }
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
    //check for empty values
UI.prototype.checkEmpty = function() {
    let result;
    if (name === '' || lastname === '' || email === '') {
        result = false;
    } else {
        result = true;
    }
    return result;
}

UI.prototype.showFeedback = function(text, type) {
    if (type === 'success') {} else if (type === 'error') {

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