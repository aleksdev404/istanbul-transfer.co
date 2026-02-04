import Link from "next/link";


export default () => {

    return (
      <div
        className="hero bg-blue-100"
      >
        <div className="hero-content text-center w-full">
            <Link className="link" href="#">Terms of Service</Link>
            <Link className="link" href="#">Privacy policy</Link>
        </div>
      </div>
    );
  }
  