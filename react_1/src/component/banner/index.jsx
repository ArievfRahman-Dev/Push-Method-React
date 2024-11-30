import "./style.css/";
export const Banner = () => {
  return (
    <div>
      <div className="background">
        <img
          src="https://hdqwalls.com/wallpapers/avengers-infinty-war-2018-hd-42.jpg"
          alt="Background image showing various movie posters"
        />
      </div>

      <div className="content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Starts at IDR 54,000. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email-form">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};
