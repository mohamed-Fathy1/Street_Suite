import classNames from "classnames";
import styles from "../Navbar/Navbar.module.css";

interface NavbarItemsProps {
  icon: JSX.Element;
  title: string;
  link: string;
  active: boolean;
}

function NavbarItems({ icon, link, active, title }: NavbarItemsProps) {
  return (
    <li
      className={classNames("w-fit", styles.nav_item, active && styles.active)}
    >
      <a href={link} className="flex items-center">
        {icon}
        <span className={classNames("", styles.navbar_item_title)}>
          {title}
        </span>
      </a>
    </li>
  );
}

export default NavbarItems;
