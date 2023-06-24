
import React from 'react';
import s from './Form.module.scss';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data, null, 2)); // Display form data in an alert
	};

	return (
		<>
			<div className={s.registration}>
				<h2 className={s.registration__title}>write us</h2>
				<Form className={s.registration__form} onSubmit={handleSubmit(onSubmit)}>
					<Form.Field className={s.form__input}>
						<input
							className={s.registration__input}
							placeholder="Your Name"
							type="text"
							{...register("Name", { required: true, maxLength: 10 })}
						/>
					</Form.Field>
					{errors.Name && <p className={s.error}>Please check the Name</p>}
					<Form.Field className={s.form__input}>
						<input
							className={s.registration__input}
							placeholder='Email'
							type="email"
							{...register("email",
								{
									required: true,
									pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
								})}
						/>
					</Form.Field>
					{errors.email && <p className={s.error}>Please check the Email</p>}
					<div className={s.form__input}>
						<textarea
							placeholder='Your Message'
							className={s.form__field_area}
							{...register("message", { required: true })}
						></textarea>
					</div>
					{errors.message && <p className={s.error}>Please check the Message</p>}
					<Button className={s.registration__button} type='submit'>Submit</Button>
				</Form>
			</div>
		</>
	);
}

export default ContactUsForm;


