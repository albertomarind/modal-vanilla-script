var ModalPositon;
(function (ModalPositon) {
    ModalPositon[ModalPositon["TopCenter"] = 1] = "TopCenter";
    ModalPositon[ModalPositon["Center"] = 2] = "Center";
    ModalPositon[ModalPositon["BottomCenter"] = 3] = "BottomCenter";
})(ModalPositon || (ModalPositon = {}));
var Modal = /** @class */ (function () {
    function Modal(ref, position) {
        this.ref = ref;
        this.setPosition(position);
    }
    Modal.prototype.show = function () {
        this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose');
        this.btnClose.addEventListener('click', this.hide.bind(this));
    };
    Modal.prototype.hide = function () {
        this.ref.style.display = 'none';
    };
    Modal.prototype.setPosition = function (position) {
        switch (position) {
            case ModalPositon.Center:
                this.ref.classList.add('modal-top-center');
                break;
            case ModalPositon.TopCenter:
                this.ref.classList.add('modal-center');
                break;
            case ModalPositon.BottomCenter:
                this.ref.classList.add('modal-bottom-center');
                break;
        }
    };
    return Modal;
}());
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
var btnOpenModal = document.getElementById('btnOpenModal');
btnOpenModal.addEventListener('click', function () {
    modal.show();
});
var modalRef = document.getElementById('modal');
var modal = new Modal(modalRef, ModalPositon.TopCenter);
// modal.setPosition(ModalPositon.TopCenter)
