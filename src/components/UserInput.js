import styled from "styled-components";
import { TbSend } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useState } from "react";
import useSendUserMessage from "../hooks/api/useSendUserMessage";
import { TailSpin } from "react-loader-spinner";

export default function UserInput({ updatePage, setUpdatePage }) {
	const [userMessage, setUserMessage] = useState("");
	const { sendUserMessage } = useSendUserMessage();
	const [loading, setLoading] = useState(false);

	function handleChange(event) {
		event.preventDefault();
		setUserMessage(event.target.value);
	}

	async function sendMessage(event = null) {
		if (event) {
			event.preventDefault();
		}

		if (userMessage.trim() !== "") {
			setLoading(true);
			try {
				const user = "You";
				await sendUserMessage(user, userMessage);
				setUserMessage("");
				setLoading(false);
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
					disabled={loading}
				/>
				<StyledIcon>
					{loading ? (
						<TailSpin height="25" width="25" color="#000000" />
					) : (
						<IconContext.Provider value={{ size: "25px" }}>
							<StyledTbSend onClick={sendMessage} />
						</IconContext.Provider>
					)}
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

	&:disabled {
		background-color: #d3d3d3;
	}
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
