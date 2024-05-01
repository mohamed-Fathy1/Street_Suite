import logo from "../../assets/images/street suite logo-04.png";
import AlertIconMin from "../../assets/svg/mobile/AlertIconMin";
import PortifolioIconMin from "../../assets/svg/mobile/PortifolioIconMin";
import TrainingIconMin from "../../assets/svg/mobile/TrainingIconMin";
import TradingIconMin from "../../assets/svg/mobile/TradingIconMin";
import AutomationIconMin from "../../assets/svg/mobile/AutomationIconMin";
import NavbarItems from "../NavbarItems/NavbarItems";
import NotificationBellIconMin from "../../assets/svg/mobile/NotificationBellIconMin";
import UserProfileIcon from "../../assets/svg/mobile/UserProfileIcon";
import styles from "./Navbar.module.css";
import classNames from "classnames";

const navBarItems = [
  {
    id: 1,
    title: "Alerts",
    icon: <AlertIconMin />,
    link: "#",
    active: true,
  },
  {
    id: 2,
    title: "Training",
    icon: <TrainingIconMin />,
    link: "#",
    active: true,
  },
  {
    id: 3,
    title: "Automation",
    icon: <AutomationIconMin />,
    link: "#",
    active: false,
  },
  {
    id: 4,
    title: "Portifolio",
    icon: <PortifolioIconMin />,
    link: "#",
    active: false,
  },
  {
    id: 5,
    title: "Trading",
    icon: <TradingIconMin />,
    link: "#",
    active: false,
  },
];

function Navbar() {
  return (
    <nav className="w-12 h-dvh">
      <div
        className={classNames(
          "flex flex-col justify-between h-full w-max w-min-12 bg-neutral-900 px-1 group",
          styles.navbar
        )}
      >
        <section className="flex flex-col relative">
          <div className="flex items-center justify-center mt-6">
            <img
              src={logo}
              alt="logo"
              className={classNames("", styles.nav_item_img)}
            />
          </div>
          <ul className="flex flex-col items-center justify-center mt-11 gap-4">
            {navBarItems.map((item) => (
              <NavbarItems
                key={item.id}
                title={item.title}
                icon={item.icon}
                link={item.link}
                active={item.active}
              />
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-5 items-center justify-center mb-12">
          <div className="lg:hidden">
            <NotificationBellIconMin />
          </div>
          <UserProfileIcon />
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
