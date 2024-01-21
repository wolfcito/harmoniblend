import clsx from 'clsx'

export function Button({ onClick, label = 'Button', className }: ButtonProps) {
  return (
    <button className={clsx('text-white rounded-md btn btn-primary btn-sm', className)} onClick={onClick}>
      {label}
    </button>
  )
}

interface ButtonProps {
  onClick: () => void
  label?: string
  children?: React.ReactNode
  className?: string
}
