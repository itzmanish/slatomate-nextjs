import { SubmitHandler, useForm } from "react-hook-form";
import { FC, version } from 'react';
import { useSlatomateClient } from "@slatomate/sdk";

interface ILoginFormInput {
	email: String;
	password: String;
}
export const Login: FC = () => {
	const client = useSlatomateClient()
	const { register, formState: { errors }, handleSubmit } = useForm<ILoginFormInput>();

	const login: SubmitHandler<ILoginFormInput> = (data) => {
		console.log(data);
		client.call({
			method: "POST",
			url: "/v1/slatomate/login",
			body: JSON.stringify(data),
		})
	}

	return (
		<form className="max-w-xs w-full mx-auto px-4 md:px-0">
			<div className="text-3xl font-medium">Login to your existing account.</div>
			<div className="my-4">
				<div className="text-gray-300 my-2">Email</div>
				<input {...register("email", { required: true, maxLength: 20 })} type="text" className="border-none focus:outline-none bg-white text-black rounded px-4 py-2 w-full" placeholder="john@gmail.com" />
			</div>
			<div className="my-4">
				<div className="text-gray-300 my-2">Password</div>
				<input {...register("password", { required: true, minLength: 8, maxLength: 20 })} type="password" className="border-none focus:outline-none bg-white text-black rounded px-4 py-2 w-full" placeholder="*******" />
			</div>
			<div className="my-4">
				Forgot your password? click here to reset it.
			</div>
			<button onClick={handleSubmit(login)} type="submit" className="my-4 text-center px-6 py-3 focus:outline-none border-none bg-blue-700 rounded">Get Started</button>
		</form>
	)
}