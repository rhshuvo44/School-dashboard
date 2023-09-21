import { AiFillDashboard } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const SidebarLink = () => {
  const navLink = [
    {
      id: 1,
      navTitle: "Dashboard",
      icon: <AiFillDashboard className="text-white" />,
      links: [
        {
          path: "admin",
          title: "Admin",
        },
        {
          path: "student",
          title: "Students",
        },
        {
          path: "teacher",
          title: "Teachers",
        },
        {
          path: "parents",
          title: "Parents",
        },
      ],
    },
    {
      id: 1,
      navTitle: "Students",
      icon: <PiStudentBold className="text-white" />,
      links: [
        {
          path: "all-students",
          title: "All Students",
        },
        {
          path: "student-details",
          title: "Student Details",
        },
        {
          path: "admisson-form",
          title: "Admisson Form",
        },
        {
          path: "student-promotion",
          title: "Student Promotion",
        },
      ],
    },
  ];

  return (
    <>
      {navLink.map((item) => (
        <>
          <li key={item.id}>
            <details open>
              <summary className="font-bold text-xl text-[orange] hover:bg-transparent hover:text-[orange]">
                {item.icon}
                {item.navTitle}
              </summary>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="hover:bg-transparen capitalize"
                      to={link.path}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </>
      ))}
    </>
  );
};

export default SidebarLink;
