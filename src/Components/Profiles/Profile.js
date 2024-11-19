import React, { useState } from "react";
import "./profile.css";
import Bride_1 from "../Images/Bride_1.jpeg";
import Bride_2 from "../Images/Bride_2.jpeg";
import Bride_3 from "../Images/Bride_3.jpeg";
import Bride_4 from "../Images/Bride_4.jpeg";
import Bride_5 from "../Images/Bride_5.jpg";
import Groom_1 from "../Images/Groom_1.jpeg";
import Groom_2 from "../Images/Groom_2.avif";
import Groom_3 from "../Images/Groom_3.jpeg";
import Groom_4 from "../Images/Groom_4.jpg";
import Groom_5 from "../Images/Groom_5.jpg";

function Profile() {
  const [selectedProfile, setSelectedProfile] = useState("groom");

  return (
    <>
      <div className="profile_select">
        <div
          className={`profile_option ${
            selectedProfile === "bride" ? "active" : ""
          }`}
          onClick={() => setSelectedProfile("bride")}
        >
          Bride
        </div>
        <div
          className={`profile_option ${
            selectedProfile === "groom" ? "active" : ""
          }`}
          onClick={() => setSelectedProfile("groom")}
        >
          Groom
        </div>
      </div>
      <div className="profile_container">
        <div className="profile_content">
          {selectedProfile === "bride" && (
            <div className="profile_list">
              <div className="home">
                <div className="profile_id">ID:12345</div>
                <div className="profile_picture">
                  <img src={Bride_1} alt="Bride Profile" />
                </div>
                <div className="profile_name">Asin</div>
                <div className="profile_details">24 years | Chennai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:234654</div>
                <div className="profile_picture">
                  <img src={Bride_2} alt="Bride Profile" />
                </div>
                <div className="profile_name">Trisha</div>
                <div className="profile_details">24 years | Kolkata</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:736456</div>
                <div className="profile_picture">
                  <img src={Bride_3} alt="Bride Profile" />
                </div>
                <div className="profile_name">Nayan</div>
                <div className="profile_details">24 years | Mumbai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:980087</div>
                <div className="profile_picture">
                  <img src={Bride_4} alt="Bride Profile" />
                </div>
                <div className="profile_name">Sneha</div>
                <div className="profile_details">24 years | Madurai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:847493</div>
                <div className="profile_picture">
                  <img src={Bride_5} alt="Bride Profile" />
                </div>
                <div className="profile_name">Laila</div>
                <div className="profile_details">24 years | Delhi</div>
              </div>
            </div>
          )}

          {selectedProfile === "groom" && (
            <div className="profile_list">
              <div className="home">
                <div className="profile_id">ID:74658</div>
                <div className="profile_picture">
                  <img src={Groom_1} alt="Bride Profile" />
                </div>
                <div className="profile_name">Vijay</div>
                <div className="profile_details">24 years | Chennai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:749302</div>
                <div className="profile_picture">
                  <img src={Groom_2} alt="Bride Profile" />
                </div>
                <div className="profile_name">Ajith</div>
                <div className="profile_details">24 years | Chennai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:748404</div>
                <div className="profile_picture">
                  <img src={Groom_3} alt="Bride Profile" />
                </div>
                <div className="profile_name">Kamal</div>
                <div className="profile_details">24 years | Chennai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:738303</div>
                <div className="profile_picture">
                  <img src={Groom_4} alt="Bride Profile" />
                </div>
                <div className="profile_name">Rajini</div>
                <div className="profile_details">24 years | Chennai</div>
              </div>
              <div className="home">
                <div className="profile_id">ID:166479</div>
                <div className="profile_picture">
                  <img src={Groom_5} alt="Bride Profile" />
                </div>
                <div className="profile_name">Suriya</div>
                <div className="profile_details">24 years | Chennai</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
