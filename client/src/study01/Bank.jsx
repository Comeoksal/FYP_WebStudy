import React from "react";
import { useState, useRef } from "react";
export default function Bank() {
    const inputRef = useRef(null);
    const [name, setName] = useState('');
    const [money, setMoney] = useState('');
    const [who, setWho] = useState('');
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/bank', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, money: (Number)(money), who: who })
            })
            setName('');
            setMoney('');
            setWho('');
            inputRef.current.focus();
            if (response.ok) {
                console.log('save success');
            } else {
                alert('error')
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            이름 : <input ref={inputRef} type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            금액 : <input type="text" value={money} onChange={(e) => { setMoney(e.target.value) }} />
            지인 : <input type="text" value={who} onChange={(e) => { setWho(e.target.value) }} />
            <button type="submit" onClick={handleSubmit}>제출</button>
        </div>
    )
}