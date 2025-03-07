import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  
  const [listContacts] = useState([

    {
      title: "Phone Number",
      value: "+91 7990735883",
    },

    {
      title: "Email",
      value: "dantaniaryan47@gmail.com",
    },

    {
      title: "Instagram",
      value: "@Aditya_330_",
    },

  ]);

  const divs = useRef([]);
  
  const scrollTab = useRef();

  CustomHook(scrollTab, divs);

  return (

    <section className="contacts" ref={scrollTab}>

      <div className="title" ref={(el) => el && divs.current.push(el)}>

        This is my Contacts

      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur
        consequatur quisquam harum.

      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>

        {listContacts.map((value, key) => (

          <div className="item" key={key}>

            <h3>{value.title}</h3>

            <div>{value.value}</div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Contacts;
