import React from 'react';
const IndexPage = () => {
	const [ items, setItems ] = React.useState([]);
	const [ name, setName ] = React.useState('');
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
						let newItems = items.push([ name, false ]);
						setItems(newItems);
						setName('');
					}}
				>
					Submit
				</button>
			</div>
			<div className="list">
				{items.map((x, index) => {
					return (
						<div className="item">
							<input
								type="checkbox"
								checked={items[index][1]}
								onChange={() => {
									let newItems = items;
									newItems[index][1] = !newItems[index][1];
									setItems(newItems);
								}}
							/>
							<label value={items[index][0]} />
							<button
								value="Delete"
								onClick={() => {
									let newItems = items;
									newItems.splice(index, 1);
									setItems(newItems);
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
					height: 5vh;
				}
			`}</style>
		</div>
	);
};
export default IndexPage;
