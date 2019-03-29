import React,{Component} from 'react';

class DisplayEmpCard extends Component{
	constructor(props){
		super(props);

		this.employeeDetails = [
			{id: 1,name: 'Amar Kumar Ram (1126705)',role:'Developer.CMINA..',project:'Wiley CMS Support (2885958)',supervisor:'Anshuman Chattopadhyay (118730)',lastLogin:'Feb 15,2019 09:10:18 AM IST'},
			{id: 2,name: 'Avijit Sen (192131)',role:'Technical Architect.CMINA..',project:'Wiley CMS Support (2885958)',supervisor:'Anshuman Chattopadhyay (118730)',lastLogin:'Jan 29,2019 10:44:08 AM IST'},
			{id: 3,name: 'Sayoni Sarkar (1033930)',role:'Developer.CMINA..',project:'PC Quality Assurance GNR (2885679)',supervisor:'Kaushik Karmakar (327840)',lastLogin:'Mar 05,2019 11:36:28 AM IST'},
			{id: 4,name: 'Indrani Bose (1355671)',role:'Developer.CMINA..',project:'PC Quality Assurance GNR (2885679)',supervisor:'Kaushik Karmakar (327840)',lastLogin:'Feb 24,2019 08:28:02 AM IST'},
			{id: 5,name: 'Aritra Chakraborty (759006)',role:'Developer.CMINA..',project:'Australia Schools SOW 167_Kolkata (2936208)',supervisor:'Debashree Dutta (155365)',lastLogin:'Jan 14,2019 07:52:12 PM IST'},
			{id: 6,name: 'Manisha Chakraborty (593968)',role:'Technical Architect.CMINA..',project:'Wiley CMS Support (2885958)',supervisor:'Anshuman Chattopadhyay (118730)',lastLogin:'Mar 02,2019 06:43:22 PM IST'},
			{id: 7,name: 'Sujitha Radhakrishnan (1130732)',role:'Developer.CMINA.Delivery.',project:'Wiley CMS Support (2885958)',supervisor:'Anshuman Chattopadhyay (118730)',lastLogin:'Feb 28,2019 05:39:10 PM IST'},
			{id: 8,name: 'Moumita Bhattacharya (1215576)',role:'Lead.CMINA.Project Management.',project:'Wiley CMS Support (2885958)',supervisor:'Anshuman Chattopadhyay (118730)',lastLogin:'Jan 19,2019 04:21:15 PM IST'},
			{id: 9,name: 'Amrita Kanungo (370675)',role:'Developer.CBO - IT IS..',project:'ALM Phase 1 Execution and Phase 2 Elaboration Kol (2954308)',supervisor:'Anshuman Chattopadhyay (118730)',lastLogin:'Feb 21,2019 03:16:25 PM IST'},
			{id: 10,name: 'Sujoy Banerjee (146871)',role:'Program Manager.CMINA..',project:'ALM Phase 1 Execution and Phase 2 Elaboration Kol (2977101)',supervisor:'Ruth Majhi (307393)',lastLogin:'Mar 14,2019 02:28:49 PM IST'}
		];

		this.state = {
			filteredEmpDetails: [],
			empDetailsResponse: ""
		};
	}

	renderFilteredEmpDetails = (empId) => {
		let filteredEmpDetails = [];
		filteredEmpDetails = this.employeeDetails.sort().filter(e => e.id == empId);
		if(filteredEmpDetails.length === 0){
			return null;
		}

		function importAll(r) {
			return r.keys().map(r);
		}
		const images = importAll(require.context('./profileImg/', false, /\.(png|jpe?g|svg)$/));
		return(
			<ul>
				{filteredEmpDetails.map((employeeDetailRes) => 
					<div><span id="empProfilePic"><img src={images[employeeDetailRes.id - 1]} alt="No Image" /></span>
					<div id="empProfileShowName"><b>Welcome {employeeDetailRes.name}</b></div>
					<div id="empProfileShowRole"><b>{employeeDetailRes.role}</b></div>
					<table id="empProfileShowProjectSupervisorLogin">
						<tr>
							<td class="profileFirstColumn"><b>Project Name : </b></td>
							<td class="profileSecondColumn"><div id="empProfileShowProject">{employeeDetailRes.project}</div></td>
						</tr>
						<tr>
							<td class="profileFirstColumn"><b>Supervisor Name : </b></td>
							<td class="profileSecondColumn"><div id="empProfileShowSupervisor">{employeeDetailRes.supervisor}</div></td>
						</tr>
						<tr>
							<td class="profileFirstColumn"><b>Last Login : </b></td>
							<td class="profileSecondColumn"><div id="empProfileShowLastLogin">{employeeDetailRes.lastLogin}</div></td>
						</tr>
					</table>
					</div>

				)}
			</ul>
		);
	}

	render(){
		return(
			<div id="employeeCardDetails">
				{this.renderFilteredEmpDetails(this.props.id)}
			</div>
		);
	}
}

export default DisplayEmpCard;