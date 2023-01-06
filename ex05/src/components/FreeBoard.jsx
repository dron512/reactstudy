import React, { useEffect, useState } from 'react';
import data from '../data.json';

function FreeBoard() {
    const arr = [1, 2, 3, 4, 5];
    const [boards, setBoards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/boards')
            .then((result) => {
                console.log(result.json);
                return result.json();
            })
            .then((data) => {
                console.log(data);
                setBoards(data);
            });
    }, []);
    return (
        <>
            <h1>자유게시판</h1>
            <table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>title</th>
                        <th>writer</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {boards.map((obj) => {
                        return (
                            <tr key={obj.idx}>
                                <td>{obj.idx}</td>
                                <td>{obj.title}</td>
                                <td>{obj.writer}</td>
                                <td>{obj.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default FreeBoard;
