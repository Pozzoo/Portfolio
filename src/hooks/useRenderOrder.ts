import { useContext } from "react";
import WindowContext from "../context/WindowProvider.tsx";

const useRenderOrder = () => {
    const context = useContext(WindowContext);

    if (!context) {
        throw new Error("useRenderOrder must be used within a WindowProvider");
    }

    return context;
};

export default useRenderOrder;