import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink
            to="/" 
            end
            className={({ isActive }) =>
            isActive ? activeNavLink : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="calculator"
            className={({ isActive }) =>
            isActive ? activeNavLink : undefined
            }
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="quote"
            className={({ isActive }) =>
            isActive ? activeNavLink : undefined
            }
          >
            Quote
          </NavLink>
        </li>        
      </ul>
    </nav>
  )
}

export default Navigation

//7EF5DC