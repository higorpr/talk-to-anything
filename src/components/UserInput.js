import styled from "styled-components";
import { TbSend } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useState } from "react";
import useSendUserMessage from "../hooks/api/useSendUserMessage";

export default function UserInput({ updatePage, setUpdatePage }) {
	const [userMessage, setUserMessage] = useState("");
	const { sendUserMessage } = useSendUserMessage();

	function handleChange(event) {
		event.preventDefault();
		setUserMessage(event.target.value);
	}

	async function sendMessage(event = null) {
		if (event) {
			event.preventDefault();
		}

		if (userMessage.trim() !== "") {
			try {
				const user = "You";
				const response = await sendUserMessage(user, userMessage);
				console.log(response);
				setUpdatePage(!updatePage);
			} catch (err) {
				console.log(err);
			}
		} else {
			setUserMessage("");
		}
	}

	function checkKey(event) {
		if (event.key === "Enter") {
			console.log(event.key);
			// console.log("test");
			sendMessage();
		}
	}

	return (
		<StyledComp>
			<ChatArea>
				<StyledInput
					autoComplete="on"
					value={userMessage}
					onChange={handleChange}
					wrap="hard"
					onKeyUp={checkKey}
				/>
				<StyledIcon>
					<IconContext.Provider value={{ size: "25px" }}>
						<StyledTbSend onClick={sendMessage} />
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
	min-height: 60px;
	width: 100vw;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;
	background-color: #001122;
	/* display: none; */
	/* background-color: goldenrod; */
`;

const ChatArea = styled.div`
	display: flex;
	min-height: 90%;
	width: 98%;
	align-items: center;
	position: relative;
`;

const StyledInput = styled.textarea`
	width: 100%;
	background-color: #f3fff4;
	resize: vertical;
	min-height: 100%;
	font-size: 15px;
	display: flex;
	box-sizing: border-box;
	border-radius: 10px;
	outline: none;
	resize: none;
	border: none;
	padding: 5px 35px 5px 10px;
	box-sizing: border-box;
`;

const StyledIcon = styled.div`
	/* background-color: #f3fff4; */
	/* background-color: yellow; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 5px;
`;

const StyledTbSend = styled(TbSend)`
	cursor: pointer;
`;
