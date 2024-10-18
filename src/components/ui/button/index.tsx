import type { ReactNode } from 'react'
import styles from './index.module.scss'

type Button = {
    className: string
    children: ReactNode
    target?: string
    url?: string
    type?: 'button' | 'link' | undefined
    onClick?: (e: any) => any
}

export default function Button({
    className,
    onClick,
    type,
    target,
    url,
    ...props
}: Partial<Button>) {
    
    const classNames = [ styles.btn, className ].join(' ')

    return (
        <>
            {type && type == 'link' ? (
                <a href={url} rel="noreferrer" target={target} className={classNames} {...props}>
                    {props.children}
                </a>

            ) : (
                <button type="button" className={classNames} onClick={onClick} {...props} >
                    {props.children}
                </button>
            )}
        </>
    )
}
