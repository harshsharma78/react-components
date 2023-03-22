import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	// How to use handle function outside the mapping function
	const handleClick = nextIndex => {
		// As the exandedIndex's value is not being updated by react quickly, we use Functional State Update (OPTIONAL FOR BASIC APPS)
		setExpandedIndex(currentExpandedIndex => {
			if (currentExpandedIndex === nextIndex) return -1;
			else return nextIndex;
		});
		/* expandedIndex === nextIndex
			? setExpandedIndex(-1)
			: setExpandedIndex(nextIndex); */
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = (
			<span className='text-2xl'>
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);

		return (
			<div key={item.id}>
				<div
					className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
					onClick={() => handleClick(index)}
				>
					{item.label} {icon}
				</div>
				{/* <div onClick={() => setExpandedIndex(index)}>{item.label}</div> */}
				{/*Conditional Rendering */}
				{isExpanded && <div className='border-b p-5'>{item.content}</div>}
			</div>
		);
	});
	return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default Accordion;
