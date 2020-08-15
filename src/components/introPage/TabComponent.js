import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../css/TabsNav.css";
import TabDoor from "./tab_nav/TabDoor";
import TabDevices from "./tab_nav/TabDevices";
import TabPrices from "./tab_nav/TabPrices";
import TabComponentOne from "./TabComponentOne";
import TabComponentTwo from "./TabComponentTwo";
import TabComponentThree from "./TabComponentThree";
class TabComponent extends Component {
	state = {
		tabIndex: 0,
	};
	render() {
		return (
			<div className="tabcomponent">
				<Tabs
					className="tabs"
					// style={{ backgroundColor: "white" }}
					selectedIndex={this.state.tabIndex}
					onSelect={(tabIndex) => this.setState({ tabIndex })}
				>
					<TabList className="tab-nav-container">
						<Tab
							className={`${
								this.state.tabIndex === 0 ? "tab-selected active2" : null
							}`}
						>
							<TabDoor />
							<p style={{ marginBottom: "1.8rem" }}>
								<strong>
									No commitment
									<br />
									Cancel online at anytime
								</strong>
							</p>
						</Tab>
						<Tab
							className={`${
								this.state.tabIndex === 1 ? "tab-selected active2" : null
							}`}
						>
							<TabDevices />
							<p style={{ marginTop: "-5.31rem" }}>
								<strong>Watch anywhere</strong>
							</p>
						</Tab>
						<Tab
							className={`${
								this.state.tabIndex === 2 ? "tab-selected active2" : null
							}`}
						>
							<TabPrices />
							<p>
								<strong>Pick your price</strong>
							</p>
						</Tab>
					</TabList>
					{/* Tabs Content */}
					<TabPanel>
						<TabComponentOne />
					</TabPanel>
					<TabPanel>
						<TabComponentTwo />
					</TabPanel>
					<TabPanel>
						<TabComponentThree />
					</TabPanel>
				</Tabs>
			</div>
		);
	}
}

export default TabComponent;
