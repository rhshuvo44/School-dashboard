const UserDatails = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 gap-10">
      <img
        src="https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/figure/student1.jpg"
        className="w-full md:w-96 rounded h-full"
        alt=""
      />

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between py-2">
          <h3 className="text-2xl font-bold">Jessia Rose</h3>
          <div className="card-icon">
            <ul className="menu menu-horizontal gap-2 rounded-box">
              <li>
                <a className="bg-[#f0f1f3] hover:bg-orange-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="bg-[#f0f1f3] hover:bg-orange-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="bg-[#f0f1f3] hover:bg-orange-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            corporis quibusdam sed nam fugiat culpa corrupti natus consequuntur
            vel similique, id tenetur reprehenderit laborum repellendus,
            molestias ex cupiditate aperiam eos sunt! Enim ullam accusamus
            tenetur fuga. Sed dolore architecto maxime, fuga quia perspiciatis
            officia corporis asperiores ipsum quae. Voluptas, ut.
          </p>
          <div className="flex flex-col gap-3 py-5 justify-start">
            <div className="flex gap-5">
              <p className="text-lg">Name:</p>{" "}
              <p className="text-lg font-bold">Jessia Rose</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Gender:</p>{" "}
              <p className="text-lg font-bold">Female</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Father Name:</p>{" "}
              <p className="text-lg font-bold">Steve Jones </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Mother Name:</p>{" "}
              <p className="text-lg font-bold">Naomi Rose </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Date Of Birth:</p>{" "}
              <p className="text-lg font-bold">07.08.2016 </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Religion:</p>{" "}
              <p className="text-lg font-bold">Islam </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Father Occupation:</p>{" "}
              <p className="text-lg font-bold">Graphic Designer </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> E-mail:</p>{" "}
              <p className="text-lg font-bold">jessiarose@gmail.com</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Admission Date:</p>{" "}
              <p className="text-lg font-bold">07.08.2019</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Class:</p>{" "}
              <p className="text-lg font-bold">7</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Section:</p>{" "}
              <p className="text-lg font-bold">Pink</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Roll:</p>{" "}
              <p className="text-lg font-bold">10005</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Address:</p>{" "}
              <p className="text-lg font-bold">House #10, Road #6, Australia</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Phone:</p>{" "}
              <p className="text-lg font-bold">+ 88 98568888418</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDatails;
