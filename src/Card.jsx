/* eslint-disable react/prop-types */

import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import Tooltip from "@mui/material/Tooltip";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import CakeIcon from "@mui/icons-material/Cake";
import PoolIcon from "@mui/icons-material/Pool";
import LanguageIcon from "@mui/icons-material/Language";
import { Pool } from "@mui/icons-material";

const languages = ["French", "English", "German"];

const sex = "N";

const AVATAR_URL_BASE = "https://i.pravatar.cc/300?img=";
const IMG_URL = "https://images.unsplash.com/photo-1601237638950-cf0c4c46c37d";

const Card = ({ avatar, firstName, lastName }) => {
  return (
    <div className="card">
      {/* <img src={IMG_URL} /> */}
      <img src={`${AVATAR_URL_BASE}${avatar}`} />
      <div className="mt-5 p-5">
        <ul className="flex flex-col text-xl gap-2">
          <li className="pt-3 pb-3">
            <span className="font-bold text-3xl uppercase tracking-wider">
              {lastName}
            </span>
            <span className="text-2xl tracking-wider">, {firstName}</span>
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

          <li className="flex gap-3 justify-self-center">
            <Tooltip title="Birthday" placement="left">
              <CakeIcon />
            </Tooltip>
            <span>05 May</span>
          </li>
        </ul>
        <div className="flex gap-3 justify-self-center mt-3">
          <Tooltip title="Languages" placement="left">
            <LanguageIcon />
          </Tooltip>
          <div className="flex gap-3 justify-self-center">
            {languages.map((lang) => (
              <span key={lang} className="badge badge-neutral p-3">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <Tooltip title="Swimming" placement="left">
            <PoolIcon />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Card;
