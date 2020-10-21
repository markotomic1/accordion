import React, { useState } from "react";
import Questions from "./Questions";
import data from "./data";

function App() {
  const [data1, setData1] = useState(data);
  return (
    <main>
      <section className='look'>
        <div className='title'>
          <h2>Questions and answers</h2>
        </div>

        {data1.map((item) => {
          return (
            <Questions key={item.id} {...item} />
          );
        })}
      </section>
    </main>
  );
}

export default App;
