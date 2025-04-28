import React from "react";
import { useState } from "react";

export default function Post() {
    const [requestNum, setRequestNum] = useState();
    const [responseNum, setResponseNum] = useState();
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ requestNumber: (Number)(requestNum) })
            })
            const data = await response.json();
            if (response.ok) {
                setResponseNum(data.responseNumber);
            } else {
                alert("error");
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            수 입력 : <input type="text" value={requestNum} onChange={(e) => { setRequestNum(e.target.value) }} />
            <button type="submit" onClick={handleSubmit}>제출</button>
            <p>수 출력 : {responseNum}</p>
        </div>
    )
}