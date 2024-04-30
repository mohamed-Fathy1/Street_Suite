import logo from "../../assets/images/street suite logo-04.png";
import AlertIconMin from "../../assets/svg/mobile/AlertIconMin";
import PortifolioIconMin from "../../assets/svg/mobile/PortifolioIconMin";
import TrainingIconMin from "../../assets/svg/mobile/TrainingIconMin";
import TradingIconMin from "../../assets/svg/mobile/TradingIconMin";
import AutomationIconMin from "../../assets/svg/mobile/AutomationIconMin";
import NavbarItems from "../NavbarItems/NavbarItems";
import NotificationBellIconMin from "../../assets/svg/mobile/NotificationBellIconMin";
import UserProfileIcon from "../../assets/svg/mobile/UserProfileIcon";

const navBarItems = [
  {
    icon: <AlertIconMin />,
    link: "#",
    active: true,
  },
  {
    icon: <TrainingIconMin />,
    link: "#",
    active: true,
  },
  {
    icon: <AutomationIconMin />,
    link: "#",
    active: false,
  },
  {
    icon: <PortifolioIconMin />,
    link: "#",
    active: false,
  },
  {
    icon: <TradingIconMin />,
    link: "#",
    active: false,
  },
];

function Navbar() {
  return (
    <nav className="w-12 h-dvh">
      <div className="flex flex-col justify-between h-full w-max w-min-12 items-center bg-neutral-900 px-1">
        <section className="flex flex-col">
          <div className="flex items-center justify-center w-10 mt-6">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          <ul className="flex flex-col items-center justify-center mt-11 gap-6">
            {navBarItems.map((item, index) => (
              <NavbarItems
                key={index}
                icon={item.icon}
                link={item.link}
                active={item.active}
              />
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-5 items-center justify-center mb-12">
          <NotificationBellIconMin />
          <UserProfileIcon />
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
