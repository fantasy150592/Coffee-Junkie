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
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;
        let value = ui.checkEmpty(name, lastName, email);
        //console.log(value);
        if (value) {
            let customer = new Customer(name, lastName, email)
            console.log(customer);
            ui.addCustomer(customer);
            ui.showFeedback('customer added to the list', 'success');
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
UI.prototype.checkEmpty = function(name, lastname, email) {
    let result;
    if (name === '' || lastname === '' || email === '') {
        result = false;
    } else {
        result = true;
    }
    return result;
}

UI.prototype.showFeedback = function(text, type) {
    if (type === 'success') {
        let feedback = document.querySelector('.drink-form_feedback');
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    } else if (type === 'error') {
        let feedback = document.querySelector('.drink-form_feedback');
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
    return result;
}

//remove Alert
UI.prototype.removeAlert = function(type) {
    setTimeout(function() {
        document.querySelector('.drink-form_feedback').classList.remove(type)
    }, 3000);
}

// add customer
UI.prototype.addCustomer = function(customer) {
    const images = [6, 7, 8, 9, 10];
    let random = Math.floor(Math.random() * images.length);
    console.log(random);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<img src="./images/coffee-${random}.jpg" alt="" class="person-thumbnail">
    <h4 class="person-name">${Customer.name}</h4>
    <h4 class="person-lastname">${Customer.lastname}</h4>`
}

function Customer(name, lastname, email) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
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