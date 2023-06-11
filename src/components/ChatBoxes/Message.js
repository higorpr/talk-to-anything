import styled from "styled-components";

export default function Message({ text, from }) {
	let backgroundColor = "#9560e8";
	let position = "flex-start";
	let customMargin = "0 5px 0 0";
	let fontColor = "#f3fff4";
	if (from === "TalkToAnything") {
		backgroundColor = "#e8f1f5";
		position = "flex-end";
		customMargin = "0 0 0 5px";
		fontColor = "#0b0e18";
	}
	return (
		<StyledEntry position={position}>
			{from !== "TalkToAnything" ? (
				<StyledNameCircle customMargin={customMargin}>
					Y
				</StyledNameCircle>
			) : (
				""
			)}

			<StyledMessage
				backgroundColor={backgroundColor}
				fontColor={fontColor}
			>
				<p>{text}</p>
			</StyledMessage>

			{from === "TalkToAnything" ? (
				<StyledNameCircle customMargin={customMargin}>
					T
				</StyledNameCircle>
			) : (
				""
			)}
		</StyledEntry>
	);
}

const StyledEntry = styled.div`
	display: flex;
	justify-content: ${(props) => props.position};
	width: 100%;
	margin-bottom: 20px;
	/* border: 1px solid white; */
`;

const StyledMessage = styled.div`
	max-width: 80%;
	word-break: break-word;
	border: 1px solid transparent;
	border-radius: 5px;
	background-color: ${(props) => props.backgroundColor};
	padding: 5px 5px;
	p {
		color: ${(props) => props.fontColor};
		font-size: 15px;
	}
`;

const StyledNameCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	color: black;
	background-color: #f4f5ff;
	font-size: 10px;
	margin: ${(props) => props.customMargin};
`;
