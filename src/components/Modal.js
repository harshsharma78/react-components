import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	return ReactDOM.createPortal(
		<div>
			<div
				onClick={onClose}
				className='fixed inset-0 bg-gray-300 opacity-80'
			></div>
			<div className='fixed inset-40 p-10 bg-white'>
				<div className='flex flex-col h-full justify-between'>
					{children}
					<div className='flex justify-end'>{actionBar}</div>
				</div>
			</div>
		</div>,
		document.querySelector('.modal-container') // check index.html file

		/*  Portals are used to put the container somewhere else in the file or to isolate the element so that the it has position property relative to the html and not to any other element.Used to create Modal,
        etc. */
	);
}
export default Modal;
