import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const [data, set_data] = useState({});
  const fetch_me = async () => {
    const response = await fetch("https://api.github.com/users/ShaikShabaaz91");
    const data_ = await response.json();
    set_data(data_);
  };

  useEffect(() => {
    fetch_me();
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data?.followers}
      <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//  //   const data = useLoaderData();
// //   // const [data, setData] = useState([])
// //   // useEffect(() => {
// //   //  fetch('https://api.github.com/users/hiteshchoudhary')
// //   //  .then(response => response.json())
// //   //  .then(data => {
// //   //     console.log(data);
// //   //     setData(data)
// //   //  })
// //   // }, [])
// };
