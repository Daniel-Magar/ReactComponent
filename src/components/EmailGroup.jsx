import React, { useState, useRef, useEffect } from "react";
import emailGroup from "../data/EmailGroup.json";

const userData = [
  { name: "Jivan", email: "jivan@gamil.com" },
  { name: "Amit", email: "amit@gamil.com" },
  { name: "Daniel", email: "daniel@gamil.com" },
  { name: "Ali", email: "ali@gamil.com" },
];

const EmailGroup = () => {
  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isShow && ref.current && !ref.current.contains(e.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShow]);

  // CheckBoxes
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(emailGroup);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "selectall") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.first_name === name ? { ...user, isChecked: checked } : user
      );

      setUsers(tempUser);
    }
  };

  //TO get all indexes from users array which are isChecked === true and to display the those array
  const [groupUsers, setGroupUsers] = useState([]);
  useEffect(() => {
    var newArray = users.filter(function (el) {
      return el.isChecked === true;
    });
    // console.log(newArray);
    setGroupUsers(newArray);
  }, [users]);

  useEffect(() => {
    console.log("grp users");
    console.log(groupUsers);
  }, [groupUsers]);

  // save a group
  const [groupOfuser, setGroupOfUser] = useState([]);

  const save = (e) => {
    let selectUsers = groupUsers.map((user) => {
      return { ...user };
    });
    setGroupOfUser(selectUsers);
    e.preventDefault();
    let tempUser = users.map((user) => {
      return { ...user, isChecked: false };
    });
    setUsers(tempUser);
  };

  useEffect(() => {
    console.log("Showing final result");
    console.log(groupOfuser);
  }, [groupOfuser]);
  // to clear all selected values from checked boxes
  const clearAll = (e) => {
    e.preventDefault();
    let tempUser = users.map((user) => {
      return { ...user, isChecked: false };
    });
    setUsers(tempUser);
  };

  return (
    <div>
      <div>
        <div>
          <form>
            <div className="mx-5 p-5 w-[400px]" ref={ref}>
              <div
                className="flex items-center justify-between py-2 border border-gray-300 cursor-pointer"
                onClick={(e) => setIsShow(!isShow)}
              >
                <div className="px-5  ">---Select---</div>
                <div className="text-[28px] cursor-pointer px-5 ">
                  <i
                    className={`bx bx-chevron-down text-[24px] ${
                      isShow
                        ? "rotate-180 transition duration-10 ease-out"
                        : "transition duration-10 ease-out"
                    }`}
                  ></i>
                </div>
              </div>
              {isShow && (
                <div className="relative h-[300px] overflow-y-scroll border border-t-0 border-gray-300">
                  <div>
                    <label className="mx-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mx-4 cursor-pointer"
                        name="selectall"
                        onChange={handleChange}
                        checked={
                          users.filter((user) => user?.isChecked != true)
                            .length < 1
                        }
                      />
                      Select All
                    </label>
                  </div>
                  {users.map((data, index) => (
                    <div className="" key={index}>
                      <div className="flex gap-10 ">
                        <div className="flex " key={index}>
                          <label className="mx-2 cursor-pointer ">
                            <input
                              type="checkbox"
                              name={data.first_name}
                              onChange={handleChange}
                              checked={data.isChecked || false}
                              className="mx-4 cursor-pointer"
                            />
                            {data.first_name}
                          </label>
                        </div>
                        {/* {data.isChecked === true ? (
                          <div>{data.first_name}</div>
                        ) : (
                          ""
                        )} */}
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center  border-t  p-1  ">
                    <div></div>
                    <button className="p-1  cursor-pointer" onClick={clearAll}>
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
          <div>
            {groupUsers ? (
              <div>
                <div className="p-5 border mx-5 rounded ">
                  <div className="grid grid-cols-3 border-b p-3">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Address</div>
                  </div>

                  {groupUsers.map((data, idx) => (
                    <div>
                      <div className="grid grid-cols-3 my-5">
                        <div>
                          {data.first_name} {data.last_name}
                        </div>
                        <div>{data.email}</div>
                        <div>{data.gender}</div>
                      </div>
                    </div>
                  ))}
                  {groupUsers.length > 0 && (
                    <div className="flex justify-between">
                      <div></div>
                      <button
                        className=" bg-blue-600 p-2 border px-8 text-white rounded"
                        onClick={save}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div>
              {groupOfuser.map((data, idx) => {
                return <div key={idx}>{data.first_name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailGroup;
