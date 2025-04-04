import { Dispatcher } from "@/api";

export function openModal(render: (props: { onClose(): void; }) => React.ReactNode) {
    Dispatcher.emit("OPEN_MODAL", {
        render
    });
}

export function closeModal(id?: string) {
    Dispatcher.emit("CLOSE_MODAL", { id });
}
