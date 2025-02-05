import React from 'react'
import styles from './Container.module.sass'

import clsx from 'clsx'

interface ContainerProps extends React.PropsWithChildren {
	className?: string
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
	return <div className={clsx(styles.container, className)}>{children}</div>
}
