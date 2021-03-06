import { Component } from '../../services/js/Component';
import { Checkbox } from '../checkbox/checkbox';

export class Availabilities extends Component {
	constructor(state) {
		require('./availabilities.sass');

		state = {
			template: require('./availabilities.pug'),
			title: 'Доступность',
			widecorridor: false,
			assistant: false,
			...state,
		};

		super(state);
	}
	render() {
		super.render();
		this.renderCheckbox();
	}
	renderCheckbox() {
		const checkbox = new Checkbox({
			title: this.state.title,
			subtitle: this.state.subtitle,
			list: [
				{
					text: 'Широкий коридор',
					subtext: 'Ширина коридоров в номере не менее 91 см.',
					name: 'widecorridor',
					check: this.state.widecorridor,
				},
				{
					text: 'Помощник для инвалидов',
					subtext: 'На 1 этаже вас встретит специалист и проводит до номера.',
					name: 'assistant',
					check: this.state.assistant,
				},
			],
		});

		checkbox.addObserver((state) => {
			const checks = state.list.reduce((acc, elem) => {
				acc[elem.name] = elem.check;
				return acc;
			}, {});

			this.state = { ...checks };
		});

		this.node.appendChild(checkbox.node);
	}
}
