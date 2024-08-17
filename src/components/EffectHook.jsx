import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

export default function EffectHook() {
    const [data, setData] = useState("");

    useLayoutEffect(() => {
        console.log("Layout Hook");
        
    })
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            setData(res.data[2].email);
        });
    }, []);
    return <div>Hello, {data}</div>;
}
