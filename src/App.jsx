import "./App.css";
import styled from "styled-components";
import IconCompleteImage from "./images/icon-complete.png";

function App() {
	return (
		<>
			<Header>
				<div className="header__inner">
					<HeaderLogo>Osyare Na ToDo App</HeaderLogo>
				</div>
			</Header>
			<Container>
				<main>
					<Wrapper>
						<Box>
							<BoxTitle>
								<TitleCircle></TitleCircle>
								<Title>Todo</Title>
							</BoxTitle>
							<List>
								<Item>
									<ItemContent>
										<ItemTitle>トイレ掃除</ItemTitle>
										<ItemTags>
											<ItemTag>家のこと</ItemTag>
										</ItemTags>
									</ItemContent>
									<ItemSubcontent>
										<ItemComplete>
											<img src={IconCompleteImage} alt="" />
										</ItemComplete>
										<ItemDelete>delete...</ItemDelete>
									</ItemSubcontent>
								</Item>
							</List>
						</Box>
						<Box>
							<BoxTitle>
								<TitleCircle></TitleCircle>
								<Title>Todo</Title>
							</BoxTitle>
							<List>
								<Item>
									<ItemContent>
										<ItemTitle>トイレ掃除</ItemTitle>
										<ItemTags>
											<ItemTag>家のこと</ItemTag>
										</ItemTags>
									</ItemContent>
									<ItemSubcontent>
										<ItemComplete>
											<img src={IconCompleteImage} alt="" />
										</ItemComplete>
										<ItemDelete>delete...</ItemDelete>
									</ItemSubcontent>
								</Item>
							</List>
						</Box>
						<Box>
							<BoxTitle>
								<TitleCircle></TitleCircle>
								<Title>Todo</Title>
							</BoxTitle>
							<List>
								<Item>
									<ItemContent>
										<ItemTitle>トイレ掃除</ItemTitle>
										<ItemTags>
											<ItemTag>家のこと</ItemTag>
										</ItemTags>
									</ItemContent>
									<ItemSubcontent>
										<ItemComplete>
											<img src={IconCompleteImage} alt="" />
										</ItemComplete>
										<ItemDelete>delete...</ItemDelete>
									</ItemSubcontent>
								</Item>
							</List>
						</Box>
					</Wrapper>
				</main>
			</Container>
		</>
	);
}
export default App;

const Container = styled.div`
	width: 1080px;
	max-width: 100%;
	margin: 60px auto 0;
`;
const Header = styled.div`
	background-color: #031d7c;
	padding: 10px 30px;
`;
const HeaderLogo = styled.h1`
	color: #fff;
	font-size: 32px;
`;

const Wrapper = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr 1fr 1fr;
`;
const Box = styled.div``;
const ItemComplete = styled.div`
	width: 30px;
	height: 30px;
`;
const BoxTitle = styled.div`
	position: relative;
`;
const Title = styled.h2`
	font-size: 40px;
	font-weight: bold;
	padding-left: 20px;
`;
const TitleCircle = styled.span`
	width: 55px;
	height: 55px;
	background-color: #ceffed;
	border-radius: 100%;
	display: block;
	position: absolute;
	z-index: -1;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(0%, -50%);
`;
const List = styled.ul`
	margin-top: 30px;
`;
const Item = styled.li`
	display: flex;
	padding: 10px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const ItemContent = styled.div`
	width: 80%;
`;
const ItemSubcontent = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const ItemTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
`;
const ItemTags = styled.div`
	margin-top: 10px;
`;
const ItemTag = styled.div`
	background-color: #1d8ac7;
	font-size: 12px;
	color: #fff;
	padding: 8px 15px;
	border-radius: 20px;
	width: fit-content;
`;
const ItemDelete = styled.div`
	color: red;
`;
