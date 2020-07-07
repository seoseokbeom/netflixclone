import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import TabDoor from "./tab_nav/TabDoor";
import "../css/TabsNav.css";
class TabComponent extends Component {
	state = {};
	render() {
		return (
			<div>
				{/* <Tabs>
					<TabList>
						<Tab>
							<TabDoor />
						</Tab>
						<Tab>Tab Link 2</Tab>
						<Tab>Tab Link 3</Tab>
					</TabList>
				</Tabs> */}
			</div>
		);
	}
}

export default TabComponent;
