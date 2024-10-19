import type { ReactNode } from 'react'
import ArrowRightIcon from '../arrow-right'
import styles from './index.module.scss'

type Button = {
    className: string
    children: ReactNode
    target?: string
    url?: string
    onClick?: () => void
}

export default function Button({
    className,
    onClick,
    target,
    url,
    ...props
}: Partial<Button>) {
    
    const classNames = [ styles.btn, className ].join(' ')

    return (
        <>
            {url ? (
                <a href={url} rel="noreferrer" target={target} className={classNames} {...props}>
                    {props.children}
                    <ArrowRightIcon />
                </a>

            ) : (
                <button type="button" className={classNames} onClick={onClick} {...props} >
                    {props.children}
                    <ArrowRightIcon />
                </button>
            )}
        </>
    )
}
