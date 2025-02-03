import { useContext } from "react";
import WindowContext from "../context/WindowContext.tsx";

const useRenderOrder = () => {
    const context = useContext(WindowContext);

    if (!context) {
        throw new Error("useWindow must be used within a WindowProvider");
    }

    return context;
};

export default useRenderOrder;