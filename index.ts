enum ModalPositon {
    TopCenter = 1,
    Center = 2,
    BottomCenter = 3
}


class Modal {

    ref: HTMLDivElement;
    btnClose: HTMLButtonElement;

    constructor(ref: HTMLDivElement, position: ModalPositon) {
        this.ref = ref;
        this.setPosition(position);
    }

    show() {
        this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose')
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }

    hide() {
        this.ref.style.display = 'none';
    }

    setPosition(position) {
        switch (position) {
            case ModalPositon.Center:
                this.ref.classList.add('modal-top-center')
                break;
            case ModalPositon.TopCenter:
                this.ref.classList.add('modal-center')
                break;
            case ModalPositon.BottomCenter:
                this.ref.classList.add('modal-bottom-center')
                break;
        }
    }
}

//
// function Modal(ref: HTMLDivElement)  {
//     this.ref = ref;
//     this.btnClose = null;
//
//
//     this.show = function () {
//         this.ref.style.display = 'block';
//         this.btnClose = this.ref.querySelector('#btnClose')
//         this.btnClose.addEventListener('click', this.hide.bind(this));
//     }
//
//     this.hide = function() {
//         this.ref.style.display = 'none';
//     }
//
//     this.setPosition = function (position) {
//         switch (position) {
//             case ModalPositon.Center:
//                 this.ref.classList.add('modal-top-center')
//                 break;
//             case ModalPositon.TopCenter:
//                 this.ref.classList.add('modal-center')
//                 break;
//             case ModalPositon.BottomCenter:
//                 this.ref.classList.add('modal-bottom-center')
//                 break;
//         }
//     }
// }


const btnOpenModal: HTMLButtonElement = document.getElementById('btnOpenModal') as HTMLButtonElement;

btnOpenModal.addEventListener('click', () => {
    modal.show();
})

const modalRef: HTMLDivElement = document.getElementById('modal') as HTMLDivElement;

const modal = new Modal(modalRef,ModalPositon.TopCenter);
// modal.setPosition(ModalPositon.TopCenter)




