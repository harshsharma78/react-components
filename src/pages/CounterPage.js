import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import produce from 'immer';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';
const SET_VALUE_TO_ADD = 'set-value-to-add';

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			state.count = state.count + 1;
			return;
		// Directly mutating state (which is not advisable) using immer library but do not use it too often.

		/* 	return {
				...state,
				count: state.count + 1,
			}; */

		case DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1,
			};

		case SET_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload,
			};
		case ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0,
			};
		default:
			return;
		// return state;
	}
	/* if (action.type === INCREMENT_COUNT) {
		return {
			...state,
			count: state.count + 1,
		};
	}
	if (action.type === DECREMENT_COUNT) {
		return {
			...state,
			count: state.count - 1,
		};
	}
	if (action.type === SET_VALUE_TO_ADD) {
		return {
			...state,
			valueToAdd: action.payload,
		};
	}
	if (action.type === ADD_TOTAL_TO_COUNT) {
		return {
			...state,
			count: action.payload,
		};
	} */
};

function CounterPage({ initialCount }) {
	/* const [count, setCount] = useState(initialCount);
	const [valueToAdd, setValueToAdd] = useState(0);
 */
	const [state, dispatch] = useReducer(produce(reducer), {
		count: initialCount,
		valueToAdd: 0,
	});
	// produce -> from immer library

	const increment = () => {
		// setCount(count + 1);
		dispatch({
			type: INCREMENT_COUNT,
		});
	};
	const decrement = () => {
		// setCount(count - 1);
		dispatch({
			type: DECREMENT_COUNT,
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			type: ADD_VALUE_TO_COUNT,
		});
		// setCount(count + valueToAdd);
		// setValueToAdd(0);
	};
	const handleChange = e => {
		const value = parseInt(e.target.value) || 0;
		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value,
		});
		// setValueToAdd(value);
	};

	return (
		<Panel className='m-3'>
			<h1 className='text-lg'>Count is {state.count}</h1>
			<div className='flex flex-row'>
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>Decrement</Button>
			</div>

			<form onClick={handleSubmit}>
				<label>Add a lot!</label>
				<input
					className='p-1 m-3 bg-gray-50 border border-gray-300'
					value={state.valueToAdd || ''}
					onChange={handleChange}
					type='number'
				/>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
}

export default CounterPage;
