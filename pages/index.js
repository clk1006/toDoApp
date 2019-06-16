import React from 'react';
let items = [];
const IndexPage = () => {
	const [ name, setName ] = React.useState('');
	const [ load, setLoad ] = React.useState(true);
	return (
		<div className="root">
			<h1>ToDo</h1>
			<div className="input">
				<input
					type="text"
					id="inputField"
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}
					placeholder="What do you want to do?"
				/>
				<button
					id="submit"
					onClick={() => {
						items.push([ name, false ]);
						setName('');
						setLoad(!load);
					}}
				>
					Submit
				</button>
			</div>
			<div className="list">
				{(() => {
					console.log(items);
					console.log('t');
				})()}
				{items.map((x, index) => {
					return (
						<div className="item">
							<input
								type="checkbox"
								style={{
									marginRight: '3%',
									padding: 0,
									msTransform: 'scale(2)',
									mozTransform: 'scale(2)',
									webkitTransform: 'scale(2)',
									oTransform: 'scale(2)',
									transform: 'scale(2)'
								}}
								checked={items[index][1]}
								onChange={() => {
									items[index][1] = !items[index][1];
									setLoad(!load);
								}}
							/>

							{items[index][1] || (
								<input
									style={{
										borderWidth: '0',
										fontSize: '20px',
										margin: '0',
										height: '85%',
										width: '80%'
									}}
									className="Name"
									type="text"
									value={items[index][0]}
									disabled
								/>
							)}
							{items[index][1] && (
								<input
									style={{
										borderWidth: '0',
										fontStyle: 'italic',
										color: 'lightgrey',
										textDecoration: 'line-through',
										fontSize: '20px',
										margin: '0',
										height: '85%',
										width: '80%'
									}}
									className="Name"
									type="text"
									value={items[index][0]}
									disabled
								/>
							)}
							<img
								className="Delete"
								src="Delete.png"
								onClick={() => {
									items.splice(index, 1);
									setLoad(!load);
								}}
							/>
						</div>
					);
				})}
			</div>
			<style jsx>{`
				:global(body) {
					margin: 0;
					background: lightgrey;
				}
				.root {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				h1 {
					text-align: center;
					color: rgb(212, 175, 55);
					font-weight: 350;
					font-size: 10vw;
					margin-top: 0;
					margin-bottom: 3vh;
				}
				.input {
					height: 7vh;
					width: 30vw;
					display: flex;
				}
				#inputField {
					height: 100%;
					width: 65%;
					font-size: 18px;
				}
				#submit {
					height: 110%;
					width: 35%;
					fot-size: 19px;
				}
				.list {
					width: 30vw;
					height: 50vh;
					display: flex;
					flex-direction: column;
					alig-items: center;
				}
				.item {
					width: 100%;
					padding: 0;
					height: 5vh;
					background: white;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.Delete {
					margin-right: 0;
					height: 5vh;
					width: 5vh;
				}
			`}</style>
		</div>
	);
};
export default IndexPage;
