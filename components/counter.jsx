import { useState } from "react"

export function Counter() {
    const [counter, setCount] = useState(0);
    return (
        <button className="hidden text-base font-h1 desktop:block desktop:border-solid desktop:border-white desktop:border-2 desktop:rounded desktop:w-158 ml-52 hover:bg-white hover:text-black" onClick={() => setCount((previousValue) => previousValue + 1)}>
            clicked <spam>{counter}</spam> times
        </button>
    )
}