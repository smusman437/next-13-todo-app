import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={active ? "nav_active" : "nav_non_active"}>
      <p className={`nav__link`}>{text}</p>
    </Link>
  );
};

export default NavItem;
