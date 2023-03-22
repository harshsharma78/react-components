import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};
	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button
				onClick={handleClose}
				primary
			>
				I Accept
			</Button>
		</div>
	);
	const modal = (
		<Modal
			actionBar={actionBar}
			onClose={handleClose}
		>
			<p>Here is an important agreement for you to accept!</p>
		</Modal>
	);
	return (
		<div>
			<Button
				onClick={handleClick}
				primary
			>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	);
}
export default ModalPage;
