import { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const divEl = useRef();

	// useEffect and useRef(to get reference to a desired element) for when user clicks outside the dropdown or when the user opens up another dropdown then one of the dropdowns should be closed
	useEffect(() => {
		const handler = event => {
			if (!divEl.current) return;
			if (!divEl.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handler, true); // true for the Capture Phase

		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);

	const handleClick = () => {
		setIsOpen(currentIsOpen => !currentIsOpen);
	};

	const handleOptionClick = option => {
		setIsOpen(!isOpen);
		onChange(option);
	};

	const renderedOptions = options.map(option => {
		return (
			<div
				className='hover:bg-sky-100 rounded cursor p-1'
				onClick={() => handleOptionClick(option)}
				key={option.value}
			>
				<div>{option.label}</div>
			</div>
		);
	});

	/* let content = 'Select...';
	if (value) {
		content = value.label;
	} */
	return (
		<div
			ref={divEl}
			className='w-48 relative'
		>
			<Panel
				className='flex justify-between items-center cursor-pointer '
				onClick={handleClick}
			>
				{value?.label || 'Select...'} <GoChevronDown className='text-lg' />
			</Panel>
			{isOpen && (
				<Panel className='absolute top-full '>{renderedOptions}</Panel>
			)}
		</div>
	);
}
export default Dropdown;
