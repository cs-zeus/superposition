import React, { MouseEventHandler, ReactChildren } from 'react';

import Paragraph from '../ui/Paragraph';
import styled from '@emotion/styled';

type ModalProps = {
	show: boolean;
	onClose: () => void;
	children: ReactChildren;
	title: string;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children, title }) => {
	const handleCloseClick: MouseEventHandler = (event) => {
		event.preventDefault();
		onClose();
	};

	return show ? (
		<ModalOverlay onClick={handleCloseClick}>
			<StyledModal>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<CloseLink href='#' onClick={handleCloseClick}>
						x
					</CloseLink>
				</ModalHeader>
				<ModalBody>
					<Paragraph>{children}</Paragraph>
				</ModalBody>
			</StyledModal>
		</ModalOverlay>
	) : null;
};

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 16px;
	font-size: 1.5rem;
`;

const ModalTitle = styled.h1`
	text-align: right;
	color: var(--background);
	font-weight: bold;
`;

const CloseLink = styled.a`
	text-decoration: none;
	color: var(--off-white);
`;

const ModalBody = styled.div`
	padding-top: 32px;
`;

const StyledModal = styled.div`
	background: white;
	width: 640px;
	height: 540px;
	border-radius: 16px;
	padding: 16px;
	overflow-y: auto;
`;
const ModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--black-alpha50);
	z-index: 1;
	isolation: isolate;
`;

export default Modal;
