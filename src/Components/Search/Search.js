import React from "react";
import "./search.css";

function Search() {
  return (
    <>
      <div className="div_container">
        <div className="main_container">
          <div className="div_container_1">
            <div>
              <div className="container_1">
                <h1>Search by ID</h1>
                <input type="text" />
                <button>Search</button>
              </div>
              <div className="container_1_1">
                <h1>Remarraige search</h1>
                <div>
                  <label for="gender">Select Gender:</label>
                  <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>

          <div className="container_2">
            {" "}
            <h1>Quick Search</h1>
            <div>
              <label for="gender">Select Gender:</label>
              <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <button>Search</button>
            </div>
          </div>
          <div className="container_3">
            {" "}
            <h1>Member Login</h1>
            <div>
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
