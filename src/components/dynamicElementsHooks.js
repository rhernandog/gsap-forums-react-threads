import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./dynamicElementStyles.css";

const users1 = [
  {
    "id": "0abdb1049555d870901c73e9e7f83cc2",
    "name": "Diahann Ugolini"
  }, {
    "id": "6ef8c1008aebd0e5d43cf811d7ab84f1",
    "name": "Star Yates"
  }, {
    "id": "f3115648cb6b2405c4438a753fc910ac",
    "name": "Donalt McCarroll"
  }, {
    "id": "012185ae7dfc5ac252c06c941e671503",
    "name": "Olympie Doret"
  }
];

const users2 = [
  {
    "id": "a8e973cf475d14c6deb083448eff228a",
    "name": "Stace Rider"
  }, {
    "id": "bf9cdd6916a2c24ae6b22b94c9ce5c24",
    "name": "Pavel Byron"
  }, {
    "id": "fde3301e58cdec45a24d05f9926dd988",
    "name": "Adrian Goranov"
  }, {
    "id": "f409ae2460cc438bd6098ee944a6cd0f",
    "name": "Abagael Juett"
  }, {
    "id": "cb5283e78cf135268708f2642ab61da4",
    "name": "Raynor Roadknight"
  }, {
    "id": "22e3b23341047bd7afcb2849ca99266c",
    "name": "Yvette Fleis"
  }
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [usersTween, setUsersTween] = useState(null);
  const usersDomNodes = [];

  const buttonClickHandler = e => {
    if (e.target.getAttribute("data-target") == "users1") {
      setUsers(users1);
    } else {
      setUsers(users2);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(usersDomNodes, {
      duration: 0.3, stagger: 0.05,
      y: 0, autoAlpha: 1
    }).play();
  }, [users]);

  return <div className="row">
    <div className="col-12">
      <h3>Users List</h3>
      <p className="lead">Use the buttons to change the list of users. Creates a new GSAP animation each time.</p>
      <hr />
      <button className="btn btn-info mr-3" data-target="users1"
        onClick={buttonClickHandler}
      >First Set</button>
      <button className="btn btn-info" data-target="users2"
        onClick={buttonClickHandler}
      >Second Set</button>
      <hr />
      <div className="row justify-content-center">
        {
          users.map((user, index) => {
            return <div key={user.id} ref={e => usersDomNodes[index] = e}
              className="col-12 col-sm-5 col-md-4 mb-3 user-card"
            >
              <div className="card">
                <div className="card-body">
                  {user.name}
                </div>
              </div>
            </div>;
          })
        }
      </div>
    </div>
  </div>;
};

export default Users;
