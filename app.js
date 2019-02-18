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
                ui.clearFields();

            } else {
                ui.showFeedback('some form values empty', 'error');
            }
        })
        //display modal
    const links = document.querySelectorAll('.work-item-icon');
    //console.log(links);

    links.forEach(function(item) {
            item.addEventListener('click', function(event) {
                ui.showModal(event)
            })
        })
        // hide modal
    document.querySelector('.work-modal_close').addEventListener('click', function() {
        ui.closeModal();
    })

}
//constructor function
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
    const feedback = document.querySelector('.drink-form_feedback');
    if (type === 'success') {
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    } else if (type === 'error') {
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}

//remove Alert
UI.prototype.removeAlert = function(type) {
    setTimeout(function() {
        document.querySelector('.drink-form_feedback').classList.remove(type)
    }, 3000);
}

// add customer
UI.prototype.addCustomer = function(customer) {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let random = Math.floor(Math.random() * images.length);
    console.log(random);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<img src="./images/coffee-${random}.jpg" alt="" class="person-thumbnail">
    <h4 class="person-name">${customer.name}</h4>
    <h4 class="person-lastname">${customer.lastname}</h4>`
    document.querySelector('.drink-card_list').appendChild(div);
}


// clear fields
UI.prototype.clearFields = function() {
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';
}

// show modal

UI.prototype.showModal = function(event) {
        event.preventDefault();
        if (event.target.parentElement.classList.contains('work-item-icon'));
        let id = event.target.parentElement.dataset.id;

        const modal = document.querySelector('.work-modal');
        const modalItem = document.querySelector('.work-modal_item')

        modal.classList.add('work-modal-show');
        modalItem.style.backgroundImage = `url(images/coffee-${id}.jpg)`
    }
    // hide modal
UI.prototype.closeModal = function() {
    document.querySelector('.work-modal').classList.remove('work-modal-show');
}

//customer
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