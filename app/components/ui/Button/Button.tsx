import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLElement> {}

const Button = ({ children, className, ...htmlAttributes }: ButtonProps): JSX.Element | null => {
	return (
		<div className={className} {...htmlAttributes}>
			{children}
		</div>
	)
}

export default Button
