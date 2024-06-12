
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/4Jxv1Dz/First-Seester.png)',  }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">The everything app,
                        for work</h1>
                        <p className="mb-5">Get everyone working in a single platform designed to manage any type of work.</p>
                        <button className="btn btn-primary">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;