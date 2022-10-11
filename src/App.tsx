import React from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./Search.css";
import {
	Accordion,
	Button,
	Container,
	createStyles,
	Divider,
	Grid,
	Title,
	Table,
	Tabs,
	Space,
	Text
} from "@mantine/core";
import {
	InstantSearch,
	SearchBox,
	Hits,
	Highlight,
	Configure,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { ScrollArea, Center, Stack, Image } from "@mantine/core";
import ReactJson from "react-json-view";
const searchClient = instantMeiliSearch(
	"https://api.harigaben.se",
	"8714f37c3d55c9d2830cab8ceba1dd75551434643ed52f190cf04821b6619931",
	{
		placeholderSearch: false,
		primaryKey: "id",
	}
);

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 1,
		paddingBottom: theme.spacing.xl * 2,
		minHeight: 650,
	},

	title: {
		marginBottom: theme.spacing.xl * 1.5,
	},

	item: {
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,

		border: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}));

const App = () => (

	<Stack
		className="firstStack"
		styles={(theme) => ({
			header: {
				background: theme.fn.rgba("#171a21", 1.0),
			},
			main: {
				Title: theme.fn.rgba("#ffffff", 1),
			},
		})}>

		<InstantSearch
			indexName="items"
			searchClient={searchClient}>
			<SearchBox
				className="search"
				translations={{ placeholder: "Search ERDB" }}
			/>
			<ScrollArea
				style={{ height: 1100, width: 900, alignSelf: "center" }}
				offsetScrollbars>
				<Hits hitComponent={Hit} />
			</ScrollArea>
		</InstantSearch>
	</Stack>
);

const Hit = ({ hit }: {hit: any}) => (
	<Grid
		columns={24}
		className="itemGrid"
		gutter={"xs"}
		grow={true}
		styles={(theme) => ({
			header: {
				background: theme.fn.rgba("#171a21", 1.0),
			},
			main: {
				Title: theme.fn.rgba("#ffffff", 1),
			},
		})}>
		<Grid.Col className="image-col" span={4}>
			<Image src={hit.image} className="image-bg" width={220} height={220}/>
		</Grid.Col>
		<Grid.Col span={12}>
			<Stack>
				<Title className="title-white" order={3}>
					{hit.name}
				</Title>
				<Accordion variant="separated">
					<Accordion.Item value="description">
						<Accordion.Control>📝 Description</Accordion.Control>
						<Accordion.Panel>{hit.description}</Accordion.Panel>
					</Accordion.Item>

					<Accordion.Item value="location">
						<Accordion.Control>🔍 Location</Accordion.Control>
						<Accordion.Panel>{hit.location}</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="stats">
						<Accordion.Control>📊 Stats</Accordion.Control>
						<Accordion.Panel>
							<Tabs color="red" defaultValue="Attack">
								<Tabs.List>
									<Tabs.Tab value="Attack">⚔️Attack</Tabs.Tab>
									<Tabs.Tab color="blue" value="Defence">
										🛡️Defence
									</Tabs.Tab>
									<Tabs.Tab color="violet" value="Other">
										🗒️Other
									</Tabs.Tab>
								</Tabs.List>
								<Tabs.Panel value="Attack">
									<Grid align={"center"} gutter={1} grow={true}>
										<Grid.Col span={3}>
											<Title order={6}>Atk</Title>
											<ReactJson
												enableClipboard={false}
												indentWidth={8}
												displayDataTypes={false}
												iconStyle="circle"
												theme="google"
												collapsed={false}
												name={false}
												src={hit.attack}></ReactJson>
										</Grid.Col>
										<Grid.Col span={3}>
											<Title order={6}>Guard</Title>
											<ReactJson
												enableClipboard={false}
												indentWidth={0}
												displayDataTypes={false}
												iconStyle="circle"
												theme="google"
												collapsed={false}
												name={false}
												src={hit.defence}></ReactJson>
										</Grid.Col>
									</Grid>
								</Tabs.Panel>
								<Tabs.Panel value="Defence">
									<Grid align={"center"} gutter={1} grow={true}>
										<Grid.Col span={3}>
											<Title order={6}>Resistance</Title>
											<ReactJson
												enableClipboard={false}
												indentWidth={8}
												displayDataTypes={false}
												iconStyle="circle"
												theme="google"
												collapsed={false}
												name={false}
												src={hit.resistance}></ReactJson>
										</Grid.Col>
										<Grid.Col span={3}>
											<Title order={6}>Damage Negation</Title>
											<ReactJson
												enableClipboard={false}
												indentWidth={8}
												displayDataTypes={false}
												iconStyle="circle"
												theme="google"
												collapsed={false}
												name={false}
												src={hit.dmgNegation}></ReactJson>
										</Grid.Col>
									</Grid>
								</Tabs.Panel>
								<Tabs.Panel value="Other">
									<Container size="md" px="md">
										<Stack spacing={10}>
											<Space h={10} />
											<Title underline className="weight" inline align="start" order={6}>
												Weight: {hit.weight}
											</Title>
											<Space h={10} />
											<Title underline className="effects" inline align="start" order={6}>Effects: </Title>
											<>
											<Text>{hit.effects}</Text>
											</>
										</Stack>
									</Container>
									<Space h="lg" />
									<Divider size="sm" />
									<Space h="sm" />
									<Grid align={"center"} gutter={1} grow={true}>
										<Divider size="md" variant="solid" />
										<Grid.Col span={3}>
											<Title order={6}>Scaling</Title>
											<ReactJson
												enableClipboard={false}
												indentWidth={8}
												displayDataTypes={false}
												iconStyle="circle"
												theme="google"
												collapsed={false}
												name={false}
												src={hit.scaling}></ReactJson>
										</Grid.Col>
										<Grid.Col span={3}>
											<Title order={6}>Requirements</Title>
											<ReactJson
												enableClipboard={false}
												indentWidth={8}
												displayDataTypes={false}
												iconStyle="circle"
												theme="google"
												collapsed={false}
												name={false}
												src={hit.requirements}></ReactJson>
										</Grid.Col>
									</Grid>
								</Tabs.Panel>
							</Tabs>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
			</Stack>
		</Grid.Col>
		<Divider size="md"></Divider>
	</Grid>
);

export default App;
