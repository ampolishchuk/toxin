import { Component } from '../../services/js/Component';
import { template } from '../../templates/main';
import { Input } from '../../blocks/components/input/input';
import { Button } from '../../blocks/components/button/button';
import { Radio } from '../../blocks/components/radio/radio';
import { Toggle } from '../../blocks/components/toggle/toggle';

class Registration extends Component {
	constructor() {
		require('./registration.sass');

		const state = {
			template: require('./registration.pug'),
		};

		super(state);
	}
	render() {
		super.render();
		this.renderForm();
		this.renderFooter();
	}
	renderForm() {
		const form = this.node.querySelector('.registration-form');
		const name = new Input({
			name: 'name',
			placeholder: 'Имя',
		});
		const surname = new Input({
			name: 'surname',
			placeholder: 'Фамилия',
		});
		const gender = new Radio({
			name: 'gender',
			list: ['Мужчина', 'Женщина'],
			check: 0,
		});
		const birthday = new Input({
			className: 'registration-birthday',
			title: 'Дата рождения',
			name: 'birthday',
			placeholder: 'ДД.ММ.ГГГГ',
			mask: '99.99.9999',
		});
		const email = new Input({
			className: 'registration-authorization',
			title: 'Данные для входа в сервис',
			name: 'email',
			placeholder: 'Email',
		});
		const password = new Input({
			name: 'password',
			type: 'password',
			placeholder: 'Пароль',
		});
		const subscribe = new Toggle({
			name: 'sibscribe',
			text: 'Получать спецпредложения',
		});
		const paymentButton = new Button({
			className: 'registration-payment',
			mod: ['filled', 'big', 'arrow'],
			text: 'Перейти к оплате',
		});

		form.appendChild(name.node);
		form.appendChild(surname.node);
		form.appendChild(gender.node);
		form.appendChild(birthday.node);
		form.appendChild(email.node);
		form.appendChild(password.node);
		form.appendChild(subscribe.node);
		form.appendChild(paymentButton.node);
	}
	renderFooter() {
		const footer = this.node.querySelector('.registration-footer');

		const loginButton = new Button({
			mod: 'bordered',
			text: 'Войти',
		});

		footer.appendChild(loginButton.node);
	}
}

const registration = new Registration();

template.main.node.appendChild(registration.node);

console.log(registration);