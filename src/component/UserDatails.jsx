import { AiFillEdit, AiFillPrinter, AiOutlineDownload } from "react-icons/ai";

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
                  <AiFillEdit className="text-lg" />
                </a>
              </li>
              <li>
                <a className="bg-[#f0f1f3] hover:bg-orange-500 hover:text-white">
                  <AiFillPrinter className="text-lg" />
                </a>
              </li>
              <li>
                <a className="bg-[#f0f1f3] hover:bg-orange-500 hover:text-white">
                  <AiOutlineDownload className="text-lg" />
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
              <p className="text-lg">Name:</p>
              <p className="text-lg font-bold">Jessia Rose</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Gender:</p>
              <p className="text-lg font-bold">Female</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Father Name:</p>
              <p className="text-lg font-bold">Steve Jones </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Mother Name:</p>
              <p className="text-lg font-bold">Naomi Rose </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Date Of Birth:</p>
              <p className="text-lg font-bold">07.08.2016 </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg">Religion:</p>
              <p className="text-lg font-bold">Islam </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Father Occupation:</p>
              <p className="text-lg font-bold">Graphic Designer </p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> E-mail:</p>
              <p className="text-lg font-bold">jessiarose@gmail.com</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Admission Date:</p>
              <p className="text-lg font-bold">07.08.2019</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Class:</p>
              <p className="text-lg font-bold">7</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Section:</p>
              <p className="text-lg font-bold">Pink</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Roll:</p>
              <p className="text-lg font-bold">10005</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Address:</p>
              <p className="text-lg font-bold">House #10, Road #6, Australia</p>
            </div>
            <div className="flex gap-5 ">
              <p className="text-lg"> Phone:</p>
              <p className="text-lg font-bold">+ 88 98568888418</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDatails;
