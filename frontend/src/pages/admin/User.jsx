import React, { useState, useEffect } from "react";
import LayoutAdminPage from "../../components/LayoutAdminPage";
import axios from "axios";
import { Clear, Edit } from "@mui/icons-material";
import Tables from "../../components/Tables";
import { Select } from "antd";

export default function User({ setLoading, active, setActive }) {
  const { Option } = Select;
  const [modal, setModal] = useState({ type: false, status: false });
  const [loadingTable, setLoadingTable] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [alert, setAlert] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const handleKeyUp = (e) => {
    setSearchValue(e.target.value);
    fetchDataUser(1, pageSize, e.target.value);
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "number",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Nickname",
      dataIndex: "nickname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const dataFilter = {
    currentPage: dataUser?.data?.current_page,
    per_page: dataUser?.data?.per_page,
    total: dataUser?.data?.total,
    data: [],
  };
  dataUser?.data?.data?.map((v, i) => {
    dataFilter?.data?.push({
      number:
        (dataUser?.data?.current_page - 1) * dataUser?.data?.per_page + i + 1,
      username: v?.username,
      nickname: v?.nickname,
      email: v?.email,
      role: v?.get_roles?.name,
      action: (
        <div className="flex flex-row items-center">
          <div
            className="bg-[#FF7A00] text-white p-2 mr-3 rounded-lg cursor-pointer"
            onClick={() => {
              setModal({ type: "edit", status: true });
            }}
          >
            <Edit />
          </div>
        </div>
      ),
    });
  });
  const [isSelected, setIsSelected] = useState(false);
  const [dataRoles, setDataRoles] = useState([]);
  const fetchDataRoles = async (page = 1, pageSize = pageSize, search) => {
    setLoadingTable(true);
    await axios
      .get(
        `${
          process.env.APP_API_URL
            ? process.env.APP_API_URL
            : "http://localhost:8000"
        }/v1/api/roles?pageNumber=${page}&pageSize=${pageSize}&search=${search}`,
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("token"))?.access_token,
          },
        }
      )
      .then((response) => {
        setDataRoles(response.data.data);
        setLoadingTable(false);
      })
      .catch((response) => {
        setLoadingTable(false);
        setAlert({
          message: (
            <div className="flex items-center">
              <Clear />
              <span className="ml-3">
                Failed.. {response?.response?.data?.message}.
              </span>
            </div>
          ),
          type: "danger",
        });
        setTimeout(() => {
          setAlert({ message: false, type: false });
        }, 4000);
      });
  };
  const fetchDataUser = async (page = 1, pageSize = pageSize, search) => {
    setLoadingTable(true);
    await axios
      .get(
        `${
          process.env.APP_API_URL
            ? process.env.APP_API_URL
            : "http://localhost:8000"
        }/v1/api/users?pageNumber=${page}&pageSize=${pageSize}&search=${search}`,
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("token"))?.access_token,
          },
        }
      )
      .then((response) => {
        setDataUser(response);
        setLoadingTable(false);
      })
      .catch((response) => {
        setLoadingTable(false);
        setAlert({
          message: (
            <div className="flex items-center">
              <Clear />
              <span className="ml-3">
                Failed.. {response?.response?.data?.message}.
              </span>
            </div>
          ),
          type: "danger",
        });
        setTimeout(() => {
          setAlert({ message: false, type: false });
        }, 4000);
      });
  };

  useEffect(() => {
    if (dataRoles.length === 0) {
      fetchDataRoles(1, pageSize, searchValue);
    }
    if (dataUser.length === 0) {
      fetchDataUser(1, pageSize, searchValue);
    }
  }, [pageSize, dataUser, searchValue]);

  const putUser = async (
    id,
    username,
    password,
    nickname,
    email,
    roles,
    bio
  ) => {
    setLoadingTable(true);
    await axios({
      method: "PUT",
      url: `${process.env.URL_API}/v1/api/users/${id}`,
      data: JSON.stringify({
        username: username,
        nickname: nickname,
        password: password,
        email: email,
        roles: roles,
        bio: bio,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token"))?.access_token,
      },
    })
      .then((response) => {
        setDataUser([]);
        fetchDataUser(1, 10, "");
        setLoadingTable(false);
      })
      .catch((response) => {
        setLoadingTable(false);
      });
  };

  const postUser = async (username, nickname, password, email, roles, bio) => {
    setLoadingTable(true);
    await axios({
      method: "POST",
      url: `${
        process.env.APP_API_URL
          ? process.env.APP_API_URL
          : "http://localhost:8000"
      }/v1/api/users`,
      data: JSON.stringify({
        username: username,
        nickname: nickname,
        password: password,
        email: email,
        roles: roles,
        bio: bio,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token"))?.access_token,
      },
    })
      .then((response) => {
        setDataUser([]);
        fetchDataUser(1, 10, "");
        setLoadingTable(false);
      })
      .catch((response) => {
        setLoadingTable(false);
      });
  };

  const handleOnSubmit = (event, typeModal) => {
    event.preventDefault();
    var { username, nickname, password, email, roles, bio } = document.forms[0];
    if (typeModal === "edit") {
      putUser(
        username.value,
        nickname.value,
        password.value,
        email.value,
        roles.value,
        bio.value
      );
    } else {
      postUser(
        username.value,
        nickname.value,
        password.value,
        email.value,
        roles.value,
        bio.value
      );
    }
    fetchDataUser(1, 10, "");
  };
  return (
    <>
      {alert?.type === "danger" ? (
        <div className="w-full bg-red-700 text-white py-5 px-3 rounded-lg mb-5 x-alert">
          <p>{alert?.message}</p>
        </div>
      ) : (
        alert?.type === "success" && (
          <div className="w-full bg-green-500 text-white py-5 px-3 rounded-lg mb-5 x-alert">
            <p>{alert?.message}</p>
          </div>
        )
      )}
      <LayoutAdminPage
        setLoading={setLoading}
        active={active}
        setActive={setActive}
      >
        <div className="px-4 pt-6 w-full">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="items-center justify-between lg:flex">
              <div className="mb-4 lg:mb-0">
                <h3 className="mb-2 text-xl font-bold text-gray-900">User</h3>
                <span className="text-base font-normal text-gray-500">
                  This is a list of latest user
                </span>
              </div>
              <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                <button
                  className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto"
                  onClick={() => setModal({ type: "Add", status: true })}
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Add User
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <div className="overflow-x-auto rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow sm:rounded-lg">
                    <Tables
                      loading={loadingTable}
                      columns={columns}
                      dataSource={dataFilter.data}
                      handleKeyUp={handleKeyUp}
                      isHideAddUserBtn={true}
                      isHideFilterAltBtn={true}
                      pagination={{
                        pageSize: pageSize,
                        total: dataFilter?.total,
                        onChange: (page) => {
                          setPageSize(10);
                          fetchDataUser(page, pageSize, searchValue);
                        },
                      }}
                      isSelected={isSelected}
                      textNoData={"Data Belum ada"}
                      className={"mt-5"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdminPage>
      <div
        className={`${
          modal.status ? "block" : "hidden"
        } fixed left-0 right-0 items-center justify-center overflow-x-hidden overflow-y-auto top-0 md:inset-0 h-modal sm:h-full flex bg-[#00000038] z-50`}
        id="add-user-modal"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
          <form onSubmit={(event) => handleOnSubmit(event, "Add")}>
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">{modal.type} user</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-toggle="add-user-modal"
                  onClick={() => setModal({ type: false, status: false })}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="username"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Fill..."
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="nickname"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Nickname
                    </label>
                    <input
                      type="text"
                      name="nickname"
                      id="nickname"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Fill..."
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Password..."
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="roles"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Roles
                    </label>
                    <Select
                      placeholder="Select a option and change input text above"
                      className="w-full capitalize"
                      name="roles"
                      id="roles"
                    >
                      {dataRoles?.map((v, i) => {
                        return (
                          <Option value={v?.uuid} className="capitalize">
                            {v?.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </div>
                  <div className="col-span-6">
                    <label
                      for="biography"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Biography
                    </label>
                    <textarea
                      id="biography"
                      rows="4"
                      name="biography"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Bio..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="items-center p-6 border-t border-gray-200 rounded-b">
                <button
                  className="bg-primary-700 border-[1px] border-gray-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
