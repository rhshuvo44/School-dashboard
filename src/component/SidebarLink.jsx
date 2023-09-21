import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
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
      id: 2,
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
    {
      id: 3,
      navTitle: "Teachers",
      icon: <GiTeacher className="text-white" />,
      links: [
        {
          path: "all-teachers",
          title: "All Tearchers",
        },
        {
          path: "teacher-details",
          title: "Teacher Details",
        },
        {
          path: "add-teacher",
          title: "Add Teacher",
        },
        {
          path: "payment",
          title: "Payment",
        },
      ],
    },
  ];

  return (
    <>
      {navLink.map((item) => (
        <>
          <li key={item.id}>
            {item.id === 1 ? (
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
            ) : (
              <details>
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
            )}
          </li>
        </>
      ))}
    </>
  );
};

export default SidebarLink;
