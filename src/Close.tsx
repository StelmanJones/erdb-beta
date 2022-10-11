import { CloseButton, Group } from "@mantine/core";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
export function Close() {
	return (
		<Group position="center">
			<CloseButton
				className="closeButton"
				title="Close popover"
				size="xl"
				iconSize={30}
				onClick={() =>
					invoke("close_options").then(() => console.log("Closed Window!"))
				}
			/>
		</Group>
	);
}
