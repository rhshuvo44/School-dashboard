import { Link } from "react-router-dom";
import { navLink } from "../services";

const SidebarLink = () => {
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
