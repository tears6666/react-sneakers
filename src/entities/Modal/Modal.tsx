import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import styles from './Modal.module.scss';

type ModalProps = {
	isOpen: boolean
	onClose: () => void
}
export const Modal = ({
	isOpen,
	onClose,
	children,
}: PropsWithChildren<ModalProps>) => {
	if (!isOpen) return null
	return createPortal(
		<div className={styles.modal}>
			<div className={styles.modal__overlay}>
				<IoMdClose onClick={onClose} className={styles.overlay__close} />
				<div className={styles.overlay__content}>
          <h1 className={styles.modal__title}>Корзина</h1>
					{children}
				</div>
			</div>
		</div>,
		document.getElementById('root')!
	)
}