import { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {children}
    </button>
  )
}