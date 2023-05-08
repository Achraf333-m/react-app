import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Highlight({icon, subtitle, para}) {
  return (
    <li className="highlight">
      <div className="highlight__img">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="highlight__subtitle">{subtitle}</h3>
      <p className="highlight__para">{para}</p>
    </li>
  );
}

export default Highlight