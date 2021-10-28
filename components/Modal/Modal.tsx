import React, { MouseEventHandler } from 'react';

import styled from '@emotion/styled';

type ModalProps = {
	show: boolean;
	onClose: () => void;
	title: string;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children, title }) => {
	const handleCloseClick: MouseEventHandler = (event) => {
		event.preventDefault();
		onClose();
	};

	return show ? (
		<ModalContainer>
			<ModalOverlay onClick={handleCloseClick} />
			<ModalBody>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<CloseLink href='#' onClick={handleCloseClick}>
						&times;
					</CloseLink>
				</ModalHeader>
				<ModalContent>{children}</ModalContent>
			</ModalBody>
		</ModalContainer>
	) : null;
};

const ModalContainer = styled.div`
	isolation: isolate;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--black-alpha50);
	z-index: 1;
`;

const ModalBody = styled.div`
	position: fixed;
	background: var(--white);
	width: 60%;
	height: 70%;
	border-radius: 16px;
	padding: 32px;
	overflow-y: auto;
	z-index: 2;
`;

const ModalHeader = styled.header`
	position: fixed;
	width: inherit;
	margin-left: -32px;
	margin-top: -32px;
	padding: 32px;
	z-index: 1;
	background-color: var(--white);
	display: flex;
	justify-content: space-between;
	padding-top: 16px;
	font-size: 1.5rem;
	margin-bottom: 16px;
`;

const ModalTitle = styled.h1`
	padding-top: 16px;
	color: var(--primary-color);
	font-weight: bold;
`;

const CloseLink = styled.a`
	margin-left: auto;
	padding-top: 16px;
	text-decoration: none;
	color: var(--off-white);
	font-size: 1.5rem;

	&:hover {
		color: var(--text-color);
		transition: color 0.2s ease-in-out;
	}
`;

const ModalContent = styled.div`
	padding-top: 64px;
`;

export default Modal;
