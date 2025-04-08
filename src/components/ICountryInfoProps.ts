interface CountryData {
  name: {
    common: string;
    official: string;
    nativeName: {
      deu: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
}

export interface ICountryInfoProps {
  countryData: CountryData;
}
