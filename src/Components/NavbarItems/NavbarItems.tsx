import classNames from "classnames";
import styles from "./NavbarItems.module.css";

interface NavbarItemsProps {
  icon: JSX.Element;
  link: string;
  active: boolean;
}

function NavbarItems({ icon, link, active }: NavbarItemsProps) {
  return (
    <li className={classNames(styles.nav_item, active && styles.active)}>
      <a href={link}>{icon}</a>
    </li>
  );
}

export default NavbarItems;
