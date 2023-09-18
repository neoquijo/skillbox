import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import css from './ModalProvider.module.css'

interface IProps {
    modal: ReactNode;
    cb: () => void
}

const modalRoot = document.getElementById("root");

export const ModalWrapper: FC<IProps> = ({ modal, cb }) => {
    const elRef = useRef<HTMLDivElement | null>(null);

    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        if (modalRoot && elRef.current) {
            modalRoot.appendChild(elRef.current);
        }
        return () => {
            if (modalRoot && elRef.current) {
                modalRoot.removeChild(elRef.current);
            }
        };
    }, []);

    return createPortal(<div onClick={cb} className={css.wrapper}>

        <div onClick={(e) => cb()} className={css.modal}>
            {modal}
        </div>

    </div>, elRef.current!);
};
