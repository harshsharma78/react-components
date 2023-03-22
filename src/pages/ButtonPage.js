import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
	return (
		<div>
			<div>
				<Button
					primary
					rounded
					outline
					// className='mb-5'
				>
					<GoBell className='mr-1' />
					Click Here!
				</Button>
			</div>
			<div>
				<Button
					secondary
					rounded
				>
					<GoCloudDownload className='mr-1' />
					Buy
				</Button>
			</div>
			<div>
				<Button
					warning
					outline
				>
					<GoDatabase className='mr-1' /> Reserve
				</Button>
			</div>
			<div>
				<Button success>Hide</Button>
			</div>
			<div>
				<Button
					danger
					outline
				>
					Sell
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
