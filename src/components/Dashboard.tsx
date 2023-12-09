import React, { useEffect, useState } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";

const Dashboard = () => {
  const [data, setData] = useState<any>([]);

  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://192.168.140.215:8001/iplist", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  const maliciousCommands = data.filter(
    (item: any) => item.isMalicious === true
  );

  return (
    <div className="space-y-6" id="dashboard">
      <p
        className="text-2xl font-bold md:text-4xl"
        style={{ color: "#ccd6f6" }}
      >
        <span
          style={{
            fontFamily:
              '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
            color: "#64ffda",
            fontSize: "smaller",
            fontWeight: 400,
          }}
        >
          00.
        </span>{" "}
        Dashboard
      </p>
      {/*Table*/}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 w-full sm:w-auto">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Sender IP
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Command
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Sent at
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Is Malicious
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Malicious Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: any) => (
                    <tr
                      key={data?.length}
                      className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.ip}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.isMalicious ? (
                          <Chip
                            label="Yes"
                            style={{ backgroundColor: "red" }}
                          />
                        ) : (
                          <Chip label="No" color="success" />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.payloadType}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="stats shadow w-full sm:w-auto">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Commands</div>
            <div className="stat-value">{data.length}</div>
            <div className="stat-desc">Dec 8 - Dec 9</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-secondary">Users</div>
            <div className="stat-value">2</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Malicious Commands</div>
            <div className="stat-value">{maliciousCommands.length}</div>
            <div className="stat-desc">
              {(maliciousCommands.length / data.length) * 100} %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
