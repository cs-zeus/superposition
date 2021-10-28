import styled from '@emotion/styled';
import React, { useRef, useState } from "react";
import Paragraph from '../ui/Paragraph';

const Modal = ({ show, onClose, children, title }) => {

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return show ? (
        <ModalOverlay>
            <StyledModal>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <CloseLink href="#" onClick={handleCloseClick}>
                        x
                    </CloseLink>
                </ModalHeader>
                <ClearFix></ClearFix>
                <ModalBody>
                    <Paragraph>{children}</Paragraph>
                </ModalBody>
            </StyledModal>
        </ModalOverlay>
    ) :  null;

};
const ModalTitle = styled.h1 `
  text-align: right;
  float:left;
  color: var(--background);
  font-weight: bold;
`;

const ClearFix = styled.div `
  overflow: auto;
`

const CloseLink = styled.a`
  text-decoration: none;
  color: gray;
  float:right;
`;

const ModalBody = styled.div`
  padding-top: 8%;
`;

const ModalHeader = styled.div`
  padding-top: 16px;
  font-size: 1.5rem;
`;

const StyledModal = styled.div`
  background: white;
  width: 640px;
  height: 540px;
  border-radius: 15px;
  padding: 15px;
  padding-left: 16px;
  overflow: scroll;
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default Modal;