import BarGraph from "./component/ChartExample";
import balImg from "./img/logo.svg";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-cream flex justify-center items-center">
      <div className="flex flex-col space-y-6 sm:w-1/3 mx-auto">
        <div
          id="balance-indicator"
          className="rounded-lg bg-softRed text-white flex justify-between place-items-center p-6"
        >
          <div>
            <p className="text-xs">My balance</p>
            <h2 className="font-bold text-xl">$921.48</h2>
          </div>

          <div>
            <img className="h-8" src={balImg} alt="" />
          </div>
        </div>

        <div id="chart" className="bg-white rounded-lg w-full h-96 p-8">
          <h1 className="text-darkBrown font-bold text-xl">
            Spending - Last 7 days
          </h1>

          <div className="mt-4">
            <BarGraph />

            <hr className="mt-2" />
          </div>

          <div className="text-darkBrown flex justify-between place-items-center py-6">
            <div>
              <p className="text-xs">Total this month</p>
              <h2 className="font-bold text-3xl">$478.33</h2>
            </div>

            <div className="text-right">
              <p className="font-bold text-sm">
                2.4% <span className="block font-light ">from last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
