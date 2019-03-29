import React,{Component} from 'react';
import DisplayEmpCard from './DisplayEmpCard';

class AutoSuggestion extends Component{
	constructor(props){
		super(props);
		this.employeeNames = [
			{id: 1,name: 'Amar Kumar Ram'},
			{id: 2,name: 'Avijit Sen'},
			{id: 3,name: 'Sayoni Sarkar'},
			{id: 4,name: 'Indrani Bose'},
			{id: 5,name: 'Aritra Chakraborty'},
			{id: 6,name: 'Manisha Chakraborty'},
			{id: 7,name: 'Sujitha Radhakrishnan'},
			{id: 8,name: 'Moumita Bhattacharya'},
			{id: 9,name: 'Amrita Kanungo'},
			{id: 10,name: 'Sujoy Banerjee'}
		];

		this.state = {
			filteredEmpNames: [],
			text: "",
			employeeId: 0,
			responseText: ""
		};
	}

	changeEmpName = (evt) => {
		const textValue = evt.target.value;
		let filteredEmpNames = [];
		if(textValue.length > 0){
			const regex = new RegExp(`^${textValue}`,'i');
			if(regex.test(textValue)){
				filteredEmpNames = this.employeeNames.sort().filter(e => regex.test(e.name));
				if(filteredEmpNames.length === 0){
					filteredEmpNames = [{id:0, name:'No Records Matched!'}];
				}
			}
		}
		this.setState((evt) => ({
			filteredEmpNames,
			text: textValue,
			responseText: ""
		}));
	}

	selectEmpName(employeeName){
		if(employeeName.id == 0){
			this.setState((evt) => ({
				responseText: ""
			}));
		}else{
			this.setState((evt) => ({
				text: employeeName.name,
				employeeId: employeeName.id,
				filteredEmpNames: [],
				responseText: <DisplayEmpCard id={employeeName.id} />
			}));
		}
	}

	clearEmpSearchBox = () => {
		this.setState((evt) => ({
			filteredEmpNames: [],
			text: "",
			employeeId: 0,
			responseText: ""
		}));
	}

	renderFilteredEmpNames = (evt) => {
		const {filteredEmpNames} = this.state;
		if(filteredEmpNames.length === 0){
			return null;
		}
		return(
			<ul>
				{filteredEmpNames.map((employeeName) => <li class="empNameFilterRes" onClick={() => this.selectEmpName(employeeName)}>{employeeName.name}</li>)}
			</ul>
		);
	}

	render(){
		const {text} = this.state;
		const {responseText} = this.state;
		return(
			<div>
				<input value={text} onChange={this.changeEmpName} type="text" id="empSearchInput" />&nbsp;&nbsp;<button id="searchClearBtn" onClick={this.clearEmpSearchBox}>Clear Search</button>
				<div id="empNameFilterList">{this.renderFilteredEmpNames()}</div><br/>
				{responseText}
			</div>
		);
	}
}

export default AutoSuggestion;