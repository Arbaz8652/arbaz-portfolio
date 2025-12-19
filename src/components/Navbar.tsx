export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6 justify-center">
                <li>
                    <a href="/" className="text-white hover:text-blue-400">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-white hover:text-blue-400">
                        About
                    </a>
                </li>
                <li>
                    <a href="/experience" className="text-white hover:text-blue-400">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="/projects" className="text-white hover:text-blue-400">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-white hover:text-blue-400">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}