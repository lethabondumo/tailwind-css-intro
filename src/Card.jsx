/* eslint-disable react/prop-types */

import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import Tooltip from "@mui/material/Tooltip";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";

const sex = "N";

const AVATAR_URL_BASE = "https://i.pravatar.cc/300?img=";
const IMG_URL = "https://images.unsplash.com/photo-1601237638950-cf0c4c46c37d";

const Card = ({ avatar, firstName, lastName }) => {
  return (
    <div className="card">
      {/* <img src={IMG_URL} /> */}
      <img src={`${AVATAR_URL_BASE}${avatar}`} />
      <div className="mt-5 p-5">
        <ul className="flex flex-col text-lg gap-2">
          <li>
            <span className="font-bold text-2xl uppercase">{lastName}</span>
            <span className="text-xl">, {firstName}</span>
          </li>
          <li className="flex gap-3 justify-self-center">
            <Tooltip title="City" placement="left">
              <LocationCityIcon />
            </Tooltip>
            <span>Berlin</span>
          </li>
          <li className="flex gap-3 justify-self-center">
            <Tooltip title="Nationality" placement="left">
              <PublicIcon />
            </Tooltip>
            <span>French</span>
          </li>
          <li className="flex gap-3 justify-self-center">
            <Tooltip title="Sex" placement="left">
              {sex === "F" && <FemaleIcon />}
              {sex === "M" && <MaleIcon />}
              {sex === "N" && <TransgenderIcon />}
            </Tooltip>
            {sex === "F" && <span>Female</span>}
            {sex === "M" && <span>Male</span>}
            {sex === "N" && <span>Non-binary</span>}
          </li>
          <li>
            <span>05 May 2000</span>
          </li>
        </ul>
        <div>French, English, German</div>
      </div>
    </div>
  );
};

export default Card;
