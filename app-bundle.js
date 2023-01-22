import 'flowbite';
import { Modal } from 'flowbite'

const $modalElement = document.querySelector('#modalEl');

const modalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    }
}

const modal = new Modal($modalElement, modalOptions);

modal.show();