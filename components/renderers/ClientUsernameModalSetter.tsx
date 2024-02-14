'use client'
import React from 'react';
import {useModal} from "@/hooks/use-modal-store";

function ClientUsernameModalSetter() {
    const { onOpen } = useModal();

    React.useEffect(() => {
        onOpen("set-username");
    }, [onOpen]);

    return null;
}

export default ClientUsernameModalSetter;