import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import CodePage from "./pages/CodePage";
import ChatPage from "./pages/ChatPage";

function App() {

	return (
		<div>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<ChatPage />} />
					{/* <Route path="/chat" element={<ChatPage />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
