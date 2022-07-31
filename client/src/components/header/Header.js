import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
	const auth = useSelector((state) => state.auth);

	const { user, isLogged } = auth;

	const handleLogout = async () => {
		try {
			await axios.get("/user/logout");
			localStorage.removeItem("firstLogin");
			window.location.href = "/";
		} catch (err) {
			window.location.href = "/";
		}
	};

	const userLink = () => {
		return (
			<li className="drop-nav">
				<Link href="#" className="avatar">
					<a>
						<img src={user.avatar} alt="" /> {user.name}{" "}
						<i className="fas fa-angle-down"></i>
					</a>
				</Link>
				<ul className="dropdown">
					<li>
						<Link href="/profile">
							<a>Profile</a>
						</Link>
					</li>
					<li>
						<Link href="/" onClick={handleLogout}>
							<a>Logout</a>
						</Link>
					</li>
				</ul>
			</li>
		);
	};

	const transForm = {
		transform: isLogged ? "translateY(-5px)" : 0,
	};

	return (
		<header>
			<div className="logo">
				<h1>
					<Link href="/">
						<a>Resume Builder</a>
					</Link>
				</h1>
			</div>

			<ul style={transForm}>
				{/* <li>
          <Link to='/'>
            <i className='fas fa-shopping-cart'></i> Cart
          </Link>
        </li> */}
				{isLogged ? (
					userLink()
				) : (
					<li>
						<Link href="/login">
							<a>
								<i className="fas fa-user"></i> Sign in
							</a>
						</Link>
					</li>
				)}
			</ul>
		</header>
	);
}

export default Header;
