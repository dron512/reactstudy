import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContextMyObj } from "../App";

function Days() {
  const { myobj, setMyobj } = useContext(ContextMyObj);
  const [words, setWords] = useState([]);
  const { day } = useParams();
  useEffect(() => {
    fetch("http://localhost:8080/words", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res, data) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        res.data = res.data.filter((data) => {
          return data.regdate == day;
        });
        setWords(res.data);
      });
  }, [day]);
  return (
    <>
      <h1>Days</h1>
      <div id="wordList">
        <table id="table">
          <thead>
            <tr>
              <td>날짜</td>
              <td>한국</td>
              <td>영어</td>
            </tr>
          </thead>
          <tbody>
            {words.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.regdate}</td>
                  <td>{data.ko}</td>
                  <td>{data.en}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        myObj.aa={myobj.aa}
      </div>
    </>
  );
}

export default Days;
