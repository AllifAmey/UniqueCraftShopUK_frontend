import Link from "next/link";
export default function NavBar() {
  const navHeaders = ["Home", "Shop", "Education", "Contact"];
  return (
    <div className="h-[15vh] flex flex-col justify-evenly">
      <h1 className="text-center text-3xl">UniqueCraftShopUK</h1>
      <div className="flex justify-center">
        <nav className="flex justify-between w-2/5 text-xl text-pink-400">
          {navHeaders.map((header) => {
            return (
              <Link
                key={header}
                href={
                  header === "Shop" ? "shop" : header === "Home" ? "/" : header
                }
                className="btn btn-link no-underline"
              >
                {header}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
