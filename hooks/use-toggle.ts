import { useState } from "react";

export const useToggle = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const toggle = (): void => setIsToggled(!isToggled);

    return { isToggled, toggle }
}
