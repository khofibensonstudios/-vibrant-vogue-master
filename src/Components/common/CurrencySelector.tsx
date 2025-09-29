import Select from "react-select";
import Flag from "react-world-flags";
import { useCurrencyStore } from "../../utils/stores/currency";

type Option = {
  value: string;
  label: React.ReactNode;
};

const options: Option[] = [
  {
    value: "ghc",
    label: (
      <div className="flex items-center">
        <Flag code="GHA" className="w-5 h-5 mr-2" />
        GHC
      </div>
    ),
  },
  {
    value: "usd",
    label: (
      <div className="flex items-center">
        <Flag code="USA" className="w-5 h-5 mr-2" />
        USD
      </div>
    ),
  },
  {
    value: "ngn",
    label: (
      <div className="flex items-center">
        <Flag code="NGA" className="w-5 h-5 mr-2" />
        NGN
      </div>
    ),
  },
];

export const CurrencySelector = () => {
  const setCurrency = useCurrencyStore((state) => state.setSelectedCurrency);
  const currency = useCurrencyStore((state) => state.selectedCurrency);

  const selectedOption =
    options.find((option) => option.value === currency) || options[0];

  const handleChange = (option: Option | null) => {
    setCurrency(option?.value || "ghc");
    // console.log(currency);
  };

  return (
    <div className="lg:w-40 bg-white dark:bg-black">
      <Select
        options={options}
        className="bg-appOrange"
        isSearchable={false}
        value={selectedOption}
        onChange={handleChange}
        instanceId="currency-selector"
      />
    </div>
  );
};
