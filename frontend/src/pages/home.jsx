import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home page">
            <div className="info bg-lightdark text-white p-5 rounded-4 shadow-lg">
                <h1 className="display-4 fw-bold">Welcome to Organika Store</h1>
                <h4 className="fw-light">Fresh food, 1-click away!</h4>
            </div>

            <div className="controls mt-4">
                <Link to="/catalog" className="btn btn-success btn-lg px-5 py-3 fw-bold shadow">
                    <div>
                        Check Our Catalog
                    </div>

                    <div>
                        Click Here
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;

/**
 * 
 * Improve presentation:
 * - images
 * - text
 * 
 * a link to the catalog
 */