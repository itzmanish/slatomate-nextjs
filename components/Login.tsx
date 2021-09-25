import Image from 'next/image'
import { Pattern } from './Pattern'

export const Login = () => {
	return (
		<form className="max-w-xs w-full mx-auto px-4 md:px-0">
			<div className="text-3xl font-medium">Login to your existing account.</div>
			<div className="my-4">
				<div className="text-gray-300 my-2">Email</div>
				<input type="text" className="border-none focus:outline-none bg-white text-black rounded px-4 py-2 w-full" placeholder="john@gmail.com" />
			</div>
			<div className="my-4">
				<div className="text-gray-300 my-2">Password</div>
				<input type="password" className="border-none focus:outline-none bg-white text-black rounded px-4 py-2 w-full" placeholder="*******" />
			</div>
			<div className="my-4">
				Forgot your password? click here to reset it.
			</div>
			<button type="submit" className="my-4 text-center px-6 py-3 focus:outline-none border-none bg-blue-700 rounded">Get Started</button>
		</form>
	)
}