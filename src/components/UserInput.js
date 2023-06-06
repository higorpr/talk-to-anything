import styled from "styled-components";
import { TbSend } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function UserInput() {
	const [userMessage, setUserMessage] = useState("");

	function handleChange(event) {
		event.preventDefault();
		setUserMessage(event.target.value);
	}

	return (
		<StyledComp>
			<ChatArea>
				<StyledInput
					autoComplete="on"
					value={userMessage}
					onChange={handleChange}
					wrap="hard"
				/>
				<StyledIcon>
					<IconContext.Provider value={{ size: "25px" }}>
						<TbSend />
					</IconContext.Provider>
				</StyledIcon>
			</ChatArea>
		</StyledComp>
	);
}

const StyledComp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 10%;
	width: 100vw;
	background-color: #6497b1;
`;

const ChatArea = styled.div`
	display: flex;
	height: 70%;
	width: 95%;
	align-items: center;
`;

const StyledInput = styled.textarea`
	width: 90vw;
	background-color: #b3cde0;
	resize: vertical;
	min-height: 100%;
	font-size: 15px;
	display: flex;
	box-sizing: border-box;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	outline: none;
	resize: none;
	border: none;
	padding: 5px;
    box-sizing: border-box;
    box-shadow: ;
`;

const StyledIcon = styled.div`
	background-color: #b3cde0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	min-height: 100%;
	width: 30px;
`;
