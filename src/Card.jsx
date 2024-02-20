/* eslint-disable react/prop-types */
const AVATAR_URL_BASE = "https://i.pravatar.cc/300?img=";
const IMG_URL = "https://images.unsplash.com/photo-1601237638950-cf0c4c46c37d";

const Card = ({ avatar, firstName, lastName }) => {
  return (
    <div className="card">
      {/* <img src={IMG_URL} /> */}
      <img src={`${AVATAR_URL_BASE}${avatar}`} />
      <div className="mt-5 p-5">
        <ul className="flex flex-col">
          <li>
            <span>{lastName}</span>
            <span>, {firstName}</span>
          </li>
          <li>Berlin</li>
          <li>French</li>
          <li>Female</li>
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
